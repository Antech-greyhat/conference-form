functuin clicked() {
alert("Form Submitted Successfully");
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const submit-btn = document.getElementById('submit-btn');
    const loader = document.getElementById('loader');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // --- 1. Show Loading State ---
        submit-btn.disabled = true; // Disable the button
        submit-btn.textContent = 'Processing...'; // Change button text
        loader.classList.add('visible'); // Show the spinner

        // --- 2. Simulate Form Submission (Replace this with your actual AJAX/Fetch call) ---
        console.log('Form data being submitted...');
        
        // This is a placeholder for a network request (e.g., fetch('/api/submit', { method: 'POST', body: data }))
        // We use a timeout to simulate a 3-second delay in network response.
        setTimeout(() => {
            console.log('Submission Complete!');
            
            // --- 3. Hide Loading State and Reset ---
            loader.classList.remove('visible'); // Hide the spinner
            submit-btn.textContent = 'Success!'; // Update button text to confirm
            
            // In a real application, you would:
            // - Check the response status (success/error)
            // - If successful: clear the form, redirect, or show a success message.
            // - If error: show an error message.
            
            // For this example, let's reset the button after a moment
            setTimeout(() => {
                submit-btn.disabled = false; // Re-enable the button
                submit-btn.textContent = 'Submit'; // Reset button text
                form.reset(); // Optionally clear the form fields
            }, 1000); // 1 second to show 'Success!'
            
        }, 3000); // Wait 3 seconds to simulate server latency
    });
});
