-- Create database
CREATE DATABASE IF NOT EXISTS catering_db;
USE catering_db;

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    number VARCHAR(20) NOT NULL,
    total_guest INT NOT NULL,
    event_date DATE NOT NULL,
    event_type VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


