SELECT * FROM gpl

-- Outliers in total rev from dispute

CREATE TABLE example_1 AS
(SELECT country, customer_id, 
CASE 
	WHEN dispute_lost = 0 THEN invoice_amount_usd
	ELSE null
	END AS rev_gain,
CASE
	WHEN dispute_lost = 1 THEN invoice_amount_usd
	ELSE null
	END AS rev_loss, invoice_amount_usd
FROM (SELECT country, customer_id, disputed, dispute_lost, invoice_amount_usd
FROM gpl
WHERE disputed = 1) AS alias)

CREATE TABLE example_2 AS
(SELECT *, ROUND((total_rev - AVG(total_rev) OVER ()) / STDDEV(total_rev) OVER (),2) AS z_score FROM
(SELECT country, customer_id, SUM(rev_gain) AS total_rev_gain, SUM(rev_loss) AS total_rev_loss, SUM(invoice_amount_usd) AS total_rev
FROM example_1
GROUP BY customer_id, country) AS alias)

SELECT * FROM example_2
WHERE z_score > 2.576 OR z_score < -2.576
ORDER BY z_score DESC;

-- Outliers in dispute counts (disputants)

CREATE TABLE example_3 AS
SELECT *, ROUND((dispute_count - AVG(dispute_count) OVER ()) / STDDEV(dispute_count) OVER (),2) AS z_score FROM
(SELECT country, customer_id, COUNT(disputed) AS dispute_count
				FROM gpl
			   WHERE disputed = 1
			   GROUP BY customer_id, country
			   ORDER BY dispute_count DESC) AS alias
			   
SELECT * FROM example_3
WHERE z_score > 2.576 OR z_score < -2.576;



-- Outliers in % dispute from total transactions (disputants 2) / Different Type of Outlier (Weak to Support 7 Stubborns)

CREATE TABLE example_4 AS
(SELECT *, ROUND((dispute/invoice * 100),2) AS percentage FROM
(SELECT country, customer_id, SUM(disputed) AS dispute, COUNT(disputed) AS invoice FROM gpl
GROUP BY customer_id, country
HAVING SUM(disputed) > 0
ORDER BY SUM(disputed) DESC) AS alias)

SELECT * FROM (SELECT *, ROUND((percentage - AVG(percentage) OVER()) / STDDEV(percentage) OVER (), 2) AS z_score FROM example_4) AS alias
WHERE z_score > 2.576 OR z_score < -2.576



-- Outliers in # of lost disputes (malcontents)

CREATE TABLE example_5 AS
(SELECT *, ROUND((lost_count - AVG(lost_count) OVER()) / STDDEV(lost_count) OVER (), 2) AS z_score FROM
(SELECT country, customer_id, SUM(dispute_lost) AS lost_count FROM gpl
GROUP BY customer_id, country
HAVING SUM(dispute_lost) > 0) AS alias
ORDER BY z_score DESC)

SELECT * FROM example_5
WHERE z_score > 2.576 OR z_score < -2.576



-- Outliers in rev losses (delinquents)

CREATE TABLE example_6 AS
SELECT *, ROUND((rev_loss - AVG(rev_loss) OVER ()) / STDDEV(rev_loss) OVER (), 2) AS z_score FROM
(SELECT country, customer_id, SUM(invoice_amount_usd) AS rev_loss FROM gpl
GROUP BY country, customer_id, dispute_lost
HAVING dispute_lost = 1
ORDER BY SUM(invoice_amount_usd) DESC) AS alias

SELECT * FROM example_6
WHERE z_score > 2.576 OR z_score < -2.576







			 