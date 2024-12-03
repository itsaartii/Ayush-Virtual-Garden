function submitFeedback() {
    const feedback = document.getElementById('feedback').value.trim();
    if (feedback) {
        alert('Thank you for your feedback!');
        document.getElementById('feedback').value = ''; // Clear the textarea
    } else {
        alert('Please enter your feedback.');
    }
}
