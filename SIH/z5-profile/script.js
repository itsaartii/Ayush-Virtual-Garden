// Handling the login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Dummy username and password check
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example check - in reality, this would be done on the server side
    if (username === "Anshika" && password === "1234") {
        // Save username to local storage
        localStorage.setItem("username", username);

        // Show profile container and hide login container
        showProfile();
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
});

// Function to show the profile page
function showProfile() {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("profile-username").textContent = username;
        document.getElementById("login-container").classList.remove("active");
        document.getElementById("profile-container").classList.add("active");
        loadPerformanceChart();
    }
}

// Function to load the performance chart
function loadPerformanceChart() {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5'],
            datasets: [{
                label: 'Quiz Scores',
                data: [80, 85, 78, 92, 88],
                backgroundColor: '#2f6d31',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Logout button event
document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("username");
    document.getElementById("profile-container").classList.remove("active");
    document.getElementById("login-container").classList.add("active");
});

// Check if user is already logged in on page load
window.onload = function() {
    if (localStorage.getItem("username")) {
        showProfile();
    }
};
