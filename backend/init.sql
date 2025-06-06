CREATE DATABASE portfolio_db;

\c portfolio_db

CREATE TABLE portfolios (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  risk_level VARCHAR(50)
);
