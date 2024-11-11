--SELECT * FROM film

--1.
--A:
--SELECT title, length, replacement_cost FROM film
--WHERE (title LIKE 'S%' OR title LIKE 'T%') AND
--replacement_cost BETWEEN '15.99' AND '20.99' 
--ORDER BY replacement_cost
--LIMIT 20;

--B:
--SELECT film_id, title, length, replacement_cost, rating FROM film
--WHERE length < '100' AND replacement_cost > '15.99'
--AND rating in ('G', 'PG', 'PG-13')
--ORDER BY title DESC

--2.
--A: G has no single single quote. It should be like this:
--SELECT * FROM film
--WHERE rating = 'G'
--B: There is no column customer_name in the table "film".

--3.
--A. 
--SELECT * FROM payment
--WHERE customer_id = '514'


--SELECT COUNT (rating = 'R') FROM film
--WHERE rating = 'R'