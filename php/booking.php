<?php
// Database configuration (update these with your database credentials)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "catering_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $number = isset($_POST['number']) ? trim($_POST['number']) : '';
    $total_guest = isset($_POST['total_guest']) ? intval($_POST['total_guest']) : 0;
    $event_date = isset($_POST['event_date']) ? $_POST['event_date'] : '';
    $event_type = isset($_POST['event_type']) ? trim($_POST['event_type']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    
    if (empty($number)) {
        $errors[] = "Phone number is required.";
    }
    
    if (empty($total_guest) || $total_guest < 1) {
        $errors[] = "Total guests must be at least 1.";
    }
    
    if (empty($event_date)) {
        $errors[] = "Event date is required.";
    }
    
    // If no errors, insert into database
    if (empty($errors)) {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO bookings (name, number, total_guest, event_date, event_type, message, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
        
        if ($stmt) {
            $stmt->bind_param("ssisss", $name, $number, $total_guest, $event_date, $event_type, $message);
            
            if ($stmt->execute()) {
                // Success - redirect to thank you page or show success message
                header("Location: ../booking.html?success=1");
                exit();
            } else {
                $error_message = "Error: " . $stmt->error;
            }
            
            $stmt->close();
        } else {
            $error_message = "Error preparing statement: " . $conn->error;
        }
    } else {
        // Display errors
        $error_message = implode("<br>", $errors);
    }
}

$conn->close();

// If there's an error, redirect back with error message
if (isset($error_message)) {
    header("Location: ../booking.html?error=" . urlencode($error_message));
    exit();
}
?>


