SELECT *,
ROUND((total_amount_usd - AVG(total_amount_usd) OVER ()) / STDDEV(total_amount_usd) OVER(),2) AS outliers FROM
(SELECT country, customer_id, SUM(invoice_amount_usd) AS total_amount_usd FROM gp1
GROUP BY country, customer_id, disputed
HAVING disputed = 1
ORDER BY SUM(invoice_amount_usd) DESC) AS alias

SELECT * FROM gp1_1

SELECT ROUND(AVG(total_amount_usd)) FROM gp1_1

SELECT customer_id, total_amount_usd, ROUND(AVG(total_amount_usd)) FROM gp1_1
GROUP BY customer_id, total_amount_usd
ORDER BY total_amount_usd DESC

SELECT country, customer_id, total_amount_usd, ROUND(AVG(total_amount_usd) OVER ()) FROM gp1_1
GROUP BY customer_id, total_amount_usd, country
ORDER BY total_amount_usd DESC

SELECT country, customer_id, total_amount_usd, ROUND(total_amount_usd - AVG(total_amount_usd)) AS unknown FROM gp1_1
GROUP BY country, customer_id, total_amount_usd
ORDER BY total_amount_usd DESC

SELECT SUM(total_amount_usd) FROM gp1_1


SELECT customer_id, total_amount_usd, total_amount_usd + SUM(total_amount_usd) AS unknown FROM gp1_1
GROUP BY country, customer_id, total_amount_usd
ORDER BY total_amount_usd DESC

SELECT ROUND(AVG(total_amount_usd)) AS AVG FROM gp1_1

SELECT ROUND(SUM(total_amount_usd)/COUNT(total_amount_usd)) AS AVG FROM gp1_1

SELECT ROUND(AVG(total_amount_usd) OVER ()) AS avg FROM gp1_1
--

SELECT * FROM gp1_2

SELECT *, ROUND(AVG(total_amount_usd) OVER ()) AS AVG FROM gp1_2
ORDER BY total_amount_usd DESC

SELECT ROUND(SUM(total_amount_usd)/ COUNT(*)) from gp1_2

SELECT *, ROUND(AVG(total_amount_usd)) AS AVG FROM gp1_2
GROUP BY country, customer_id,total_amount_usd, disputed, dispute_lost
ORDER BY total_amount_usd DESC


SELECT * FROM gp1_2

SELECT *, ROUND(AVG(total_amount_usd) OVER (PARTITION BY customer_id)) AS AVG FROM gp1_2
ORDER BY total_amount_usd DESC

SELECT country, customer_id, SUM(total_amount_usd), SUM(disputed), SUM(dispute_lost), ROUND(SUM(total_amount_usd)/2) FROM gp1_2
GROUP BY country, customer_id
HAVING customer_id = '1080-NDGAE'


--- ANOTHER WAY TO GET THE AVG OF THE SAMPLE WITHOUT USING OVER()

SELECT gp1_9.country, gp1_9.customer_id, SUM(invoice_amount_usd) AS expected_rev, total_amount_usd AS total_amount_disputes, revenue_gain, revenue_loss, 
SUM(disputed) AS count_disputed, SUM(dispute_lost) AS count_dispute_lost, COUNT(gp1_9.customer_id) AS count_transactions,
ROUND(AVG(days_to_settle),2) AS avg_settlement_days, ROUND(AVG(days_late),2) AS avg_days_late FROM gp1_9
LEFT JOIN gain
	ON gp1_9.customer_id = gain.customer_id
LEFT JOIN lost
	ON gp1_9.customer_id = lost.customer_id
LEFT JOIN gp1_1
	ON gp1_9.customer_id = gp1_1.customer_id
GROUP BY gp1_9.country, gp1_9.customer_id, revenue_gain, revenue_loss, total_amount_usd
ORDER BY SUM(invoice_amount_usd) DESC

SELECT * FROM gp1_9

--USING ROUND
SELECT ROUND(AVG(days_late),2) FROM gp1_9
WHERE customer_id = '1080-NDGAE'

--USING COUNT
SELECT COUNT(customer_id) FROM gp1_9
WHERE customer_id = '1080-NDGAE'

--USING SUM
SELECT SUM(dispute_lost) FROM gp1_9
WHERE customer_id = '1080-NDGAE'