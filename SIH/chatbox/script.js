// Predefined answers for demonstration
const answers = {
    "What is the best time to water plants?": "The best time to water plants is early in the morning or late in the afternoon when the sun is not too strong.",
    "Which plants are suitable for indoors?": "Indoor plants like Snake Plant, Aloe Vera, Spider Plant, and Peace Lily are great for improving air quality and easy to maintain.",
    "How to take care of aloe vera?": "Aloe Vera needs bright, indirect sunlight. Water it deeply but infrequently, allowing the soil to dry out between waterings.",
    "How often should I fertilize my plants?": "Fertilize your plants every 4-6 weeks during the growing season, and less frequently during the dormant period.",
    "What are the benefits of having plants indoors?": "Indoor plants can improve air quality, reduce stress, increase humidity, and add beauty to your space.",
    "Which herbs are easy to grow at home?": "Easy-to-grow herbs include basil, mint, rosemary, thyme, and chives.",
    "How do I prevent pests on my plants?": "Regularly check your plants for signs of pests, use natural insecticides, and maintain good plant hygiene to prevent infestations.",
    "How much sunlight do herbs need?": "Most herbs require at least 4-6 hours of direct sunlight per day. Some, like basil, need more light to thrive.",
    "explain about ayush": "AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy. These traditional systems of medicine focus on holistic and natural approaches to health and wellness, aiming to balance the mind, body, and spirit.",
    "explain about aloe vera": "Aloe Vera is a succulent plant known for its soothing gel, which is often used in skincare. It has medicinal properties such as anti-inflammatory and moisturizing effects, and it can be used to treat minor burns, cuts, and skin irritations."
};

// Function to handle sending predefined messages
function sendMessage(question) {
    displayMessage(question, 'user-message');

    setTimeout(() => {
        const answer = answers[question] || "Sorry, I don't have information on that topic.";
        displayMessage(answer, 'bot-message');
    }, 1000);
}

// Function to handle sending custom messages
function sendCustomMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    displayMessage(messageText, 'user-message');
    userInput.value = '';

    setTimeout(() => {
        const answer = answers[messageText.toLowerCase()] || "Sorry, I don't have information on that topic.";
        displayMessage(answer, 'bot-message');
    }, 1000);
}

// Function to display messages in the chat box
function displayMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}
