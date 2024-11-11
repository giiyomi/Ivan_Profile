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

--NOT OUTLIER CUSTOMERS WHO HAVE PAYMENT DISPUTE PER TRANSACTION 
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
