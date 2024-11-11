SELECT * FROM investment_subset_1

CREATE TABLE investment_subset_1 AS
SELECT * FROM investment_subset

ALTER TABLE investment_subset_1
ALTER COLUMN founded_year TYPE VARCHAR USING (founded_year::VARCHAR)

UPDATE investment_subset_1
SET founded_year = '-'
WHERE founded_year = '0'

1.
--CLEANING AND PREPARING THE DATA
CREATE TABLE new_table AS
SELECT * FROM investment_subset

SELECT DISTINCT market FROM new_table
WHERE market ILIKE '%fin%'

SELECT * FROM new_table
WHERE market ILIKE '%fin%' AND market != 'StaffingFirms'

--UPDATING THE VALUES
UPDATE new_table
SET market = 'Financial Services'
WHERE market ILIKE '%fin%' AND market NOT IN ('StaffingFirms')

SELECT market FROM new_table
WHERE market = 'StaffingFirms'

--CREATING A TABLE
CREATE TABLE financial_services AS
SELECT * FROM new_table
WHERE market ILIKE '%fin%' AND market != 'StaffingFirms'

--SHOWING THE GENERAL INFORMATION
SELECT * FROM financial_services

2.
SELECT market, AVG(seed) AS AVG_SEED, MIN(seed) AS MIN_SEED, MAX(seed) AS MAX_SEED FROM financial_services
GROUP BY market

3.
SELECT * FROM financial_services

SELECT market, country_code, founded_year, status, equity_crowdfunding
FROM financial_services
WHERE equity_crowdfunding > 0

4.
--GENERAL RESULTS OF OUTLIERS AND NOT OUTLIERS
SELECT market, country_code, status, founded_year, funding_total_usd,
ROUND((funding_total_usd - AVG(funding_total_usd) OVER()) / STDDEV(funding_total_usd) OVER(),4) AS OUTLIERS
FROM financial_services
ORDER BY funding_total_usd

--OUTLIERS
SELECT * FROM
(SELECT market, country_code, status, founded_year, funding_total_usd,
(funding_total_usd - AVG(funding_total_usd) over()) / STDDEV(funding_total_usd) over () AS OUTLIERS
FROM financial_services) AS OUTLIERS
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY funding_total_usd

5.
-- GENERAL RESULT OF NOT OUTLIER
SELECT * FROM
(SELECT market, equity_crowdfunding, undisclosed, convertible_note, debt_financing, private_equity,
(funding_total_usd - AVG(funding_total_usd) over()) / STDDEV(funding_total_usd) over () AS OUTLIERS
FROM financial_services) AS OUTLIERS
WHERE NOT (OUTLIERS > 2.576 OR OUTLIERS < -2.576)


