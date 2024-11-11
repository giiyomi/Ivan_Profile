SELECT * FROM gp1_9

CREATE TABLE gp1_13 AS
(SELECT gp1_9.country, gp1_9.customer_id, SUM(invoice_amount_usd) AS expected_rev, total_amount_usd AS total_amount_disputes, revenue_gain, revenue_loss, 
SUM(disputed) AS count_disputed, SUM(dispute_lost) AS count_dispute_lost, COUNT(gp1_9.customer_id) AS count_transactions,
ROUND(AVG(days_to_settle),2) AS avg_settlement_days, ROUND(AVG(days_late),2) AS avg_days_late FROM gp1_9
LEFT JOIN gain
	ON gp1_9.customer_id = gain.customer_id
LEFT JOIN lost
	ON gp1_9.customer_id = lost.customer_id
LEFT JOIN gp1_3
	ON gp1_9.customer_id = gp1_3.customer_id
GROUP BY gp1_9.country, gp1_9.customer_id, revenue_gain, revenue_loss, total_amount_usd
ORDER BY SUM(invoice_amount_usd) DESC)

SELECT * FROM gp1_13

CREATE TABLE gp1_14 AS
(SELECT * FROM gp1_13
WHERE count_disputed > 0)

SELECT * FROM gp1_14
ORDER BY count_dispute_lost DESC

--- OUTLIER CUSTOMERS IN TERMS OF AVG DAYS LATE OVER TOTAL NUMBER OF CLIENTS 
SELECT * FROM
(SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, avg_settlement_days, avg_days_late,
ROUND((avg_days_late - AVG(avg_days_late) OVER ()) / STDDEV(avg_days_late) OVER(),2) AS outliers_avg_days_late
FROM gp1_13
ORDER BY outliers_avg_days_late DESC) AS alias
WHERE outliers_avg_days_late > 2.576 OR outliers_avg_days_late < -2.576

--- OUTLIER CUSTOMER, WHO ARE PAYMENT DISPUTES LOSSES OF THE COMPANY, IN TERMS OF AVG DAYS LATE
SELECT * FROM gp1_14
WHERE outliers_avg_days_late > 2.576 OR outliers_avg_days_late < -2.576


CREATE TABLE gp1_15 AS
(SELECT * FROM gp1_13
WHERE count_disputed != 0 AND count_dispute_lost != 0)

SELECT * FROM gp1_15

SELECT * FROM
(SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, avg_settlement_days,
ROUND((avg_days_late - AVG(avg_days_late) OVER ()) / STDDEV(avg_days_late) OVER(),2) AS outliers_avg_days_late
FROM gp1_15
ORDER BY avg_settlement_days DESC) AS alias
WHERE outliers_avg_days_late > 2.576 OR outliers_avg_days_late < -2.576

---
SELECT * FROM gp1_13

SELECT *, ROUND((count_disputed / count_transactions) * 100, 2) AS percentage_disputes FROM
(SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_transactions, count_disputed FROM gp1_13
GROUP BY country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_transactions, count_disputed
HAVING total_amount_disputes IS NOT NULL) AS alias
WHERE revenue_loss IS NOT NULL
ORDER BY percentage_disputes DESC

CREATE TABLE gp1_16 AS
(SELECT *, ROUND((count_disputed / count_transactions) * 100, 2) AS percentage_disputes FROM
(SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_transactions, count_disputed FROM gp1_13
GROUP BY country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_transactions, count_disputed
HAVING total_amount_disputes IS NOT NULL) AS alias
WHERE revenue_loss IS NOT NULL
ORDER BY percentage_disputes DESC)

SELECT * FROM gp1_16
-- TOTAL AVG OF PERCENTAGE OF PAYMENT DISPUTES COUNTS OVER TOTAL OF TRANSACTION COUNTS
SELECT ROUND(AVG(percentage_disputes),2) FROM gp1_16


CREATE TABLE gp1_17 AS
(SELECT *, ROUND((total_amount_disputes/expected_rev) * 100, 2) AS percentage_disputes FROM
(SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss FROM gp1_13
GROUP BY country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss
HAVING total_amount_disputes IS NOT NULL) AS alias
WHERE revenue_loss IS NOT NULL)

SELECT * FROM gp1_17

-- TOTAL AVG OF PERCENTAGE OF PAYMENT DISPUTES AMOUNT OVER TOTAL OF TRANSACTION COUNTS
SELECT ROUND(AVG(percentage_disputes),2) FROM gp1_17

SELECT * FROM gp1