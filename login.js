document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve stored user details from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    // Get the form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if the input username and password match the stored credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page
        window.location.href = "home.html";
    } else {
        // Display error message
        alert("Invalid username or password. Please try again.");
    }
});
