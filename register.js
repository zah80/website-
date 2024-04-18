document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform signup logic here
    
    // Get the form inputs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Example: Store user details in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    
    // Set a flag indicating that the user has registered
    localStorage.setItem("registered", "true");
    
    // Redirect to login page
    window.location.href = "login.html";
});
