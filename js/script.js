// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Ensure index is within bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // Add active class to current slide
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-play slider
function autoSlide() {
    changeSlide(1);
}

// Initialize slider on page load
if (slides.length > 0) {
    // Set interval for auto-sliding (every 5 seconds)
    setInterval(autoSlide, 5000);
    
    // Show first slide
    showSlide(0);
}

// Form Validation
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const number = document.getElementById('number').value.trim();
        const totalGuest = document.getElementById('total_guest').value;
        const eventDate = document.getElementById('event_date').value;
        
        // Basic validation
        if (!name || !number || !totalGuest || !eventDate) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return false;
        }
        
        // Validate phone number (basic check)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(number)) {
            e.preventDefault();
            alert('Please enter a valid phone number.');
            return false;
        }
        
        // Validate guest count
        if (parseInt(totalGuest) < 1) {
            e.preventDefault();
            alert('Total guests must be at least 1.');
            return false;
        }
        
        // Validate event date (should be in the future)
        const selectedDate = new Date(eventDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            e.preventDefault();
            alert('Event date must be in the future.');
            return false;
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


