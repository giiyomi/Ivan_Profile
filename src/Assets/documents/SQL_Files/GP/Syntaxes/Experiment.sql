SELECT * FROM gp1

SELECT DISTINCT country FROM gp1

1.
SELECT ROUND(AVG(days_to_settle),0 as AVG_SETTLED_DATE) FROM gp1

2.
SELECT ROUND(AVG(days_to_settle),0) AS AVE_DISPUTES_SETTLED_DATE FROM gp1
WHERE disputed = 1

3.
SELECT ROUND(SUM(dispute_lost) / SUM(disputed)* 100, 2)  AS TOTAL FROM gp1

--FOR VERIFICATION
SELECT SUM(dispute_lost) FROM gp1

SELECT SUM (disputed) FROM gp1

4.
SELECT ROUND((SELECT SUM(invoice_amount_usd) FROM gp1
WHERE dispute_lost = 1) / SUM(invoice_amount_usd) * 100,2) AS percentage_revenue_loss
FROM gp1

5.
SELECT country, SUM(invoice_amount_usd) AS countries_loss_revenue FROM gp1
GROUP BY country, dispute_lost
HAVING dispute_lost = 1
ORDER BY SUM(invoice_amount_usd) DESC

SELECT SUM(invoice_amount_usd) FROM gp1 WHERE dispute_lost = 1


--MORE INVESTIGATION: DETERMINING OUTLIERS

1.
SELECT country, customer_id, invoice_amount_usd FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC

SELECT country, customer_id, invoice_amount_usd FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, dispute_lost
HAVING dispute_lost = 1
ORDER BY invoice_amount_usd DESC


--OUTLIER CUSTOMERS WHO HAVE PAYMENT DISPUTE PER TRANSACTION 
SELECT * FROM
(SELECT country, customer_id, invoice_amount_usd, disputed,
ROUND((invoice_amount_usd - AVG(invoice_amount_usd) OVER ()) / STDDEV(invoice_amount_usd) OVER(),2) AS OUTLIERS FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC) AS OUTLIERS_1
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY invoice_amount_usd DESC

--NOT OUTLIERS
SELECT * FROM
(SELECT country, customer_id, invoice_amount_usd, disputed,
ROUND((invoice_amount_usd - AVG(invoice_amount_usd) OVER ()) / STDDEV(invoice_amount_usd) OVER(),2) AS OUTLIERS FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC) AS OUTLIERS_1
WHERE NOT(OUTLIERS > 2.576 OR OUTLIERS < -2.576)
ORDER BY invoice_amount_usd

--OUTLIER CUSTOMERS WHO HAVE PAYMENT DISPUTE (SUM OF PAYMENT PER CUSTOMER)
SELECT country, customer_id, SUM(invoice_amount_usd) AS sum_invoice_amount_usd, OUTLIERS FROM
(SELECT country, customer_id, invoice_amount_usd, disputed,
ROUND((invoice_amount_usd - AVG(invoice_amount_usd) OVER ()) / STDDEV(invoice_amount_usd) OVER(),2) AS OUTLIERS FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC) AS OUTLIERS_1
GROUP BY country, customer_id, OUTLIERS
HAVING OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY SUM(invoice_amount_usd) DESC

--OUTLIER CUSTOMERS WHO HAVE PAYMENT DISPUTE (SUM OF PAYMENT PER CUSTOMER)
SELECT country, customer_id, SUM(invoice_amount_usd) AS sum_invoice_amount_usd, outliers FROM
(SELECT country, customer_id, invoice_amount_usd, disputed,
ROUND((invoice_amount_usd - AVG(invoice_amount_usd) OVER ()) / STDDEV(invoice_amount_usd) OVER(),2) AS outliers FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
ORDER BY invoice_amount_usd DESC) AS outliers_1
GROUP BY country, customer_id, outliers, disputed
HAVING (outliers < 2.576 OR OUTLIERS > -2.57) AND disputed = 1
ORDER BY customer_id, SUM(invoice_amount_usd) DESC


SELECT DISTINCT customer_id FROM gp1
WHERE disputed = 1

SELECT invoice_amount_usd FROM gp1
GROUP BY invoice_amount_usd, customer_id, disputed
HAVING disputed = 1


--EXPERIMENTAL
SELECT customer_id, SUM(invoice_amount_usd) FROM
(SELECT country, customer_id, invoice_amount_usd, disputed FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC) AS gp1
GROUP BY customer_id
ORDER BY SUM(invoice_amount_usd)

SELECT customer_id, SUM(invoice_amount_usd) FROM
(SELECT country, customer_id, invoice_amount_usd, disputed FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC) AS gp1
GROUP BY customer_id
ORDER BY SUM(invoice_amount_usd)
