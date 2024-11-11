SELECT * FROM gp1_1

CREATE TABLE gp1_2 AS
(SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd FROM gp1_1
GROUP BY country, customer_id
ORDER BY SUM(invoice_amount_usd) DESC)


SELECT * FROM gp1_2

SELECT country, customer_id, total_amount_usd,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers FROM gp1_2
GROUP BY country, customer_id, total_amount_usd
ORDER BY total_amount_usd DESC

CREATE TABLE gp1_3 AS
(SELECT country, customer_id, total_amount_usd,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers FROM gp1_2
GROUP BY country, customer_id, total_amount_usd)

SELECT * FROM gp1_3
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY total_amount_usd DESC

SELECT * FROM gp1_3
WHERE NOT(OUTLIERS > 2.576 OR OUTLIERS < -2.576)
ORDER BY total_amount_usd DESC

-- COUNTRY: FRANCE
SELECT * FROM gp1_3
WHERE country = 'France'
ORDER BY total_amount_usd DESC