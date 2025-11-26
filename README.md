# Delicious Catering Website

A modern, responsive catering website built with HTML, CSS, and JavaScript, featuring a PHP booking system.

## Features

- **Top Header**: Email and phone number display
- **Navigation Bar**: Home, About Us, Booking, Event Video, Event Image
- **Home Page**:
  - 3-image slider with auto-play functionality
  - Features section
  - Menu 1 and Menu 2 sections
  - Event video section
  - Footer
- **Booking Page**: PHP form with fields for name, number, total guests, and event date
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Project Structure

```
nextjsEcommerce/
├── index.html          # Home page
├── about.html          # About Us page
├── booking.html        # Booking page
├── event-video.html    # Event Video page
├── event-image.html    # Event Image page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── php/
│   ├── booking.php     # Booking form handler
│   └── database.sql    # Database schema
└── assets/
    └── images/         # Image folder (add your images here)
```

## Setup Instructions

### 1. Database Setup

1. Create a MySQL database
2. Import the database schema:
   ```sql
   mysql -u root -p < php/database.sql
   ```
3. Update database credentials in `php/booking.php`:
   ```php
   $servername = "localhost";
   $username = "your_username";
   $password = "your_password";
   $dbname = "catering_db";
   ```

### 2. Image Assets

Add your images to the `assets/images/` folder:

**Required images:**
- `slider1.jpg`, `slider2.jpg`, `slider3.jpg` (for slider)
- `menu1-item1.jpg`, `menu1-item2.jpg`, `menu1-item3.jpg` (Menu 1)
- `menu2-item1.jpg`, `menu2-item2.jpg`, `menu2-item3.jpg` (Menu 2)
- `about.jpg` (About page)
- `gallery1.jpg` through `gallery6.jpg` (Event gallery)

### 3. Server Setup

This website requires a PHP server to handle the booking form. You can use:

- **XAMPP** (Windows/Mac/Linux)
- **WAMP** (Windows)
- **MAMP** (Mac)
- **Local PHP server**: `php -S localhost:8000`

### 4. Running the Website

1. Place all files in your web server directory (e.g., `htdocs` for XAMPP)
2. Start your web server
3. Open `http://localhost/nextjsEcommerce/index.html` in your browser

## Features Details

### Image Slider
- Auto-plays every 5 seconds
- Manual navigation with previous/next buttons
- Smooth transitions

### Booking Form
- Client-side validation
- Server-side validation
- Stores data in MySQL database
- Required fields: Name, Number, Total Guests, Event Date

### Responsive Design
- Mobile-friendly navigation
- Adaptive grid layouts
- Touch-friendly interface

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit the color scheme in `css/style.css`:
- Primary: `#e74c3c` (red)
- Secondary: `#2c3e50` (dark blue)
- Background: `#f8f9fa` (light gray)

### Contact Information
Update email and phone number in all HTML files:
- Search for: `info@deliciouscatering.com`
- Search for: `+1 (555) 123-4567`

## License

This project is open source and available for personal and commercial use.


