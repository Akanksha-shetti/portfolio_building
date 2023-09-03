// Function to validate the contact form
function validateForm() {
    // Get the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    // Check if any field is empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission
    }

    // Validate email format (a basic check)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission if all checks pass
}

// Add an event listener to the form submit button
document.querySelector('.contact__button').addEventListener('click', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
