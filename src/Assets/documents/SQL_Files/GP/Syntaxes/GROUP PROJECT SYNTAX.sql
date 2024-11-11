SELECT * FROM gp1

SELECT DISTINCT country FROM gp1

1.
SELECT ROUND(AVG(days_to_settle),0) AS AVG_SETTLED_DATE FROM gp1

2.
SELECT ROUND(AVG(days_to_settle),0) AS AVG_DISPUTES_SETTLED_DATE FROM gp1
WHERE disputed = 1

3.
SELECT ROUND(SUM(dispute_lost) / SUM(disputed)* 100, 2)  AS TOTAL FROM gp1

SELECT SUM (disputed) FROM gp1

4.
SELECT ROUND((SELECT SUM(invoice_amount_usd) FROM gp1 WHERE dispute_lost = 1) / SUM(invoice_amount_usd) * 100,2) AS percentage_revenue_loss
FROM gp1

5.
SELECT country, SUM(invoice_amount_usd) AS countries_loss_revenue FROM gp1
GROUP BY country, dispute_lost
HAVING dispute_lost = 1
ORDER BY SUM(invoice_amount_usd) DESC

SELECT SUM(invoice_amount_usd) FROM gp1 WHERE dispute_lost = 1
