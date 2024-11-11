SELECT * FROM gp1
WHERE settled_date - invoice_date != days_to_settle

SELECT * FROM gp1
WHERE days_late = 0

UPDATE gp1
SET days_late = settled_date - due_date

UPDATE gp1
SET days_late = 0
WHERE days_late < 0

--FOR VERIFICATION
SELECT * FROM gp1
WHERE days_late = 0

---
CREATE TABLE gp1_8 AS
(SELECT * FROM gp1)

UPDATE gp1_8
SET days_late = settled_date - due_date

UPDATE gp1_8
SET days_late = 0
WHERE days_late < 0

SELECT * FROM gp1_8
WHERE days_late >= 1

SELECT * FROM gp1_8
WHERE days_late = 0

SELECT * FROM gp1_8
WHERE days_late < 0



