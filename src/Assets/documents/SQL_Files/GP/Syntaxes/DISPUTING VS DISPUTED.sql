CREATE TABLE gp1_4 AS
(SELECT country, customer_id, invoice_amount_usd, disputed, dispute_lost,
ROUND((invoice_amount_usd - AVG(invoice_amount_usd) OVER ()) / STDDEV(invoice_amount_usd) OVER(),2) AS OUTLIERS FROM gp1
GROUP BY country, customer_id, invoice_amount_usd, disputed, dispute_lost
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC)

SELECT * FROM gp1_4

SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd, disputed, dispute_lost FROM gp1_4
GROUP BY country, customer_id, disputed, dispute_lost
ORDER BY customer_id, SUM(invoice_amount_usd) DESC

SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd, disputed, dispute_lost FROM gp1_4
WHERE dispute_lost = 1
GROUP BY country, customer_id, disputed, dispute_lost
ORDER BY customer_id, SUM(invoice_amount_usd) DESC

SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd, disputed, dispute_lost FROM gp1_4
WHERE dispute_lost = 0
GROUP BY country, customer_id, disputed, dispute_lost
ORDER BY customer_id, SUM(invoice_amount_usd) DESC

---
SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd, disputed, dispute_lost FROM gp1_4
GROUP BY country, customer_id, disputed, dispute_lost
ORDER BY customer_id, SUM(invoice_amount_usd) DESC

CREATE TABLE gp1_5 AS
(SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd, disputed, dispute_lost FROM gp1_4
GROUP BY country, customer_id, disputed, dispute_lost
ORDER BY customer_id, SUM(invoice_amount_usd) DESC)

SELECT * FROM gp1_5

SELECT country, customer_id, total_amount_usd, disputed, dispute_lost,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers
FROM gp1_5

SELECT * FROM
(SELECT country, customer_id, total_amount_usd, disputed, dispute_lost,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers
FROM gp1_5) AS general
WHERE dispute_lost = 0
GROUP BY country, customer_id, total_amount_usd, disputed, dispute_lost, total_amount_usd, OUTLIERS
HAVING OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY total_amount_usd DESC

SELECT * FROM
(SELECT country, customer_id, total_amount_usd, disputed, dispute_lost,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers
FROM gp1_5) AS general
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
GROUP BY country, customer_id, total_amount_usd, disputed, dispute_lost, total_amount_usd, OUTLIERS
ORDER BY total_amount_usd DESC

SELECT * FROM
(SELECT country, customer_id, total_amount_usd,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers
FROM gp1_5) AS general
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
GROUP BY country, customer_id, total_amount_usd, OUTLIERS
ORDER BY total_amount_usd DESC