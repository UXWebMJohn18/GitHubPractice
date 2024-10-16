// JavaScript code for form validation
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// Prevent form from submitting
form.addEventListener('submit', function(event) {
    // Retrieve the input field value
    const inputValue = inputField.value;

    // Regular expression pattern for alphanumeric input
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphanumericRegex.test(inputValue)) {
        // Valid input: display confirmation and prevent the actual form submission
        successMessage.textContent = 'Form submitted successfully!';
        errorMessage.textContent = '';
        event.preventDefault();
    } else {
        // Invalid input: display error message
        errorMessage.textContent = 'Please enter an alphanumeric value.';
        successMessage.textContent = '';
        event.preventDefault(); // Prevent form submission
    }
});
