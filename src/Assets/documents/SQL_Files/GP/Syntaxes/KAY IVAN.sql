-- Amount of Payment Disputes
SELECT country, customer_id, total_amount_usd, outliers AS outliers_based_on_amount_payment_disputes FROM gp1_1
WHERE OUTLIERS > 2.576 OR OUTLIERS < -2.576
ORDER BY total_amount_usd DESC


-- Count of Payment Disputes
SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_disputed, outliers_count_of_disputed FROM gp1_11
WHERE outliers_count_of_disputed > 2.576 OR outliers_count_of_disputed < -2.576
ORDER BY outliers_count_of_disputed DESC


-- Count of Dispute Lost
SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, count_dispute_lost, outliers_count_of_dispute_lost FROM gp1_10
WHERE outliers_count_of_dispute_lost > 2.576 OR outliers_count_of_dispute_lost < -2.576
ORDER BY outliers_count_of_dispute_lost DESC

-- Amount of Dispute Lost
SELECT country, customer_id, expected_rev, total_amount_disputes, revenue_gain, revenue_loss, outliers_revenue_loss FROM gp1_12
WHERE outliers_revenue_loss > 2.576 OR outliers_revenue_loss < -2.576
ORDER BY outliers_revenue_loss DESC


