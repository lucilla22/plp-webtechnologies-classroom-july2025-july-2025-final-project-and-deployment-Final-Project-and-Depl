document.addEventListener('DOMContentLoaded', () => {
    // --- Mean Calculator Logic ---
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const numbersInput = document.getElementById('numbers');
            const resultDiv = document.getElementById('result');
            const numbersString = numbersInput.value;
            const numbersArray = numbersString.split(',').map(num => parseFloat(num.trim()));

            // Validate that all inputs are valid numbers
            if (numbersArray.some(isNaN) || numbersArray.length === 0) {
                resultDiv.textContent = 'Please enter a valid list of numbers.';
                resultDiv.style.color = 'red';
                return;
            }

            // Calculate the mean
            const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
            const mean = sum / numbersArray.length;

            resultDiv.textContent = `The mean is: ${mean.toFixed(2)}`;
            resultDiv.style.color = '#1a237e';
        });
    }

    // --- Contact Form Validation Logic ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the default form submission (to an external server)
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
            } else {
                alert('Thank you! Your message has been sent.');
                // You could add code here to send the data to an external service
                contactForm.reset();
            }
        });
    }
});