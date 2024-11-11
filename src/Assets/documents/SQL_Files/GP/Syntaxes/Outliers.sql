SELECT * FROM gp1_9

CREATE TABLE lost AS
(SELECT customer_id, SUM(invoice_amount_usd) AS REVENUE FROM gp1_9
GROUP BY customer_id, dispute_lost
HAVING dispute_lost = 1
ORDER BY SUM(invoice_amount_usd) DESC)

SELECT * FROM lost

CREATE TABLE gain AS
(SELECT customer_id, SUM(invoice_amount_usd) AS REVENUE FROM gp1_9
GROUP BY customer_id, dispute_lost
HAVING dispute_lost = 0
ORDER BY SUM(invoice_amount_usd) DESC)

SELECT * FROM gain

----------------
SELECT gp1_9.country, gp1_9.customer_id, SUM(invoice_amount_usd) AS expected_rev, total_amount_usd AS total_amount_disputes, revenue_gain, revenue_loss, 
SUM(disputed) AS count_disputed, SUM(dispute_lost) AS count_dispute_lost, COUNT(gp1_9.customer_id) AS count_transactions,
ROUND(AVG(days_to_settle),2) AS avg_settlement_days, ROUND(AVG(days_late),2) AS avg_days_late FROM gp1_9
LEFT JOIN gain
	ON gp1_9.customer_id = gain.customer_id
LEFT JOIN lost
	ON gp1_9.customer_id = lost.customer_id
LEFT JOIN gp1_3
	ON gp1_9.customer_id = gp1_3.customer_id
GROUP BY gp1_9.country, gp1_9.customer_id, revenue_gain, revenue_loss, total_amount_usd
ORDER BY SUM(invoice_amount_usd) DESC

--
SELECT *,
ROUND(count_disputed/count_transactions * 100,2) AS percentage_payment_dispute_per_client,
ROUND((count_dispute_lost - AVG(count_dispute_lost) OVER ()) / STDDEV(count_dispute_lost) OVER(),2) AS outliers_based_on_count_of_dispute
FROM
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
ORDER BY SUM(invoice_amount_usd) DESC) AS ewan

CREATE TABLE gp1_10 AS
(SELECT *, ROUND((count_dispute_lost - AVG(count_dispute_lost) OVER ()) / STDDEV(count_dispute_lost) OVER(),2) AS outliers_count_of_dispute_lost FROM
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
ORDER BY SUM(invoice_amount_usd) DESC) AS edited)

SELECT * FROM gp1_10

-- OUTLIER CLIENTS BASED ON THE COUNT OF THEIR PAYMENT DISPUTE LOST
SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_dispute_lost, outliers_count_of_dispute_lost FROM gp1_10
WHERE outliers_count_of_dispute_lost > 2.576 OR outliers_count_of_dispute_lost < -2.576
ORDER BY outliers_count_of_dispute_lost DESC

--------------
CREATE TABLE gp1_11 AS
(SELECT *, ROUND((count_disputed - AVG(count_disputed) OVER ()) / STDDEV(count_disputed) OVER(),2) AS outliers_count_of_disputed FROM
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
ORDER BY SUM(invoice_amount_usd) DESC) AS edited)

SELECT * FROM gp1_11

-- OUTLIER CLIENTS BASED ON THE COUNT OF THEIR PAYMENT DISPUTE
SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_disputed, outliers_count_of_disputed FROM gp1_11
WHERE outliers_count_of_disputed > 2.576 OR outliers_count_of_disputed < -2.576
ORDER BY outliers_count_of_disputed DESC

-------------
CREATE TABLE gp1_12 AS
(SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, 
count_disputed, count_dispute_lost, count_transactions, avg_settlement_days, avg_days_late,
ROUND((revenue_loss - AVG(revenue_loss) OVER ()) / STDDEV(revenue_loss) OVER(),2) AS outliers_revenue_loss
FROM gp1_10
WHERE revenue_loss IS NOT NULL
ORDER BY expected_rev DESC)

SELECT * FROM gp1_12

-- OUTLIER CLIENTS BASED ON THE AMOUNT OF LOST REVENUE 
SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, outliers_revenue_loss FROM gp1_12
WHERE outliers_revenue_loss > 2.576 OR outliers_revenue_loss < -2.576
ORDER BY outliers_revenue_loss DESC

-- OUTLIER CLIENTS BASED ON THE AMOUNT OF GAINED REVENUE FROM PAYMENT DISPUTES
SELECT * FROM
(SELECT country, customer_id, total_amount_usd,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers_gained_payment_disputes
FROM gp1_5) AS general
WHERE outliers_gained_payment_disputes > 2.576 OR outliers_gained_payment_disputes < -2.576
GROUP BY country, customer_id, total_amount_usd, outliers_gained_payment_disputes
ORDER BY total_amount_usd DESC

-- OUTLIER CLIENTS BASED ON AMOUNT OF THEIR PAYMENT DISPUTES
SELECT country, customer_id, total_amount_usd, outliers AS outliers_based_on_amount_payment_disputes FROM gp1_3
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY total_amount_usd DESC