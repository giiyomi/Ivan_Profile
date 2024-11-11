CREATE TABLE gp1_4 AS
(SELECT country, customer_id, invoice_amount_usd, disputed, dispute_lost
GROUP BY country, customer_id, invoice_amount_usd, disputed, dispute_lost
HAVING disputed = 1
ORDER BY invoice_amount_usd DESC)

SELECT * FROM gp1_4

CREATE TABLE gp1_5 AS
(SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd, disputed, dispute_lost FROM gp1_4
GROUP BY country, customer_id, disputed, dispute_lost
ORDER BY customer_id, SUM(invoice_amount_usd) DESC)

SELECT * FROM gp1_5

CREATE TABLE gp1_6 AS
(SELECT country, customer_id, total_amount_usd, dispute_lost
FROM gp1_5
WHERE dispute_lost = 1)

SELECT * FROM gp1_6

CREATE TABLE gp1_7 AS
(SELECT country, customer_id, total_amount_usd, disputed
FROM gp1_5
WHERE dispute_lost = 0)

SELECT * FROM gp1_7

SELECT gp1_7.country, gp1_7.customer_id, gp1_7.total_amount_usd AS revenue_gain,
gp1_6.total_amount_usd AS revenue_lost, gp1_7.total_amount_usd + gp1_6.total_amount_usd AS total_gross_revenue,
gp1_3.outliers AS z_scores FROM gp1_7
JOIN gp1_6
ON gp1_7.customer_id = gp1_6.customer_id
JOIN gp1_3
ON gp1_7.customer_id = gp1_3.customer_id
WHERE gp1_7.customer_id IN ('1080-NDGAE','9725-EZTEJ','3448-OWJOT','3568-JJMFW')
ORDER BY gp1_7.total_amount_usd DESC


