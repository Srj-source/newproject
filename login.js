// login.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Define multiple credentials with their corresponding pages
    const users = {
        "user1": { password: "pass1", page: "page1.html" },
        "untitled": { password: "untitled", page: "Untitled.html" },
        "user3": { password: "pass3", page: "page3.html" }
    };

    // Get values from the form
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if the entered username exists and the password matches
    if (users[enteredUsername] && users[enteredUsername].password === enteredPassword) {
        // Redirect to the user's designated page
        window.location.href = users[enteredUsername].page;
    } else {
        // Show error message if login fails
        document.getElementById("message").textContent = "Invalid username or password.";
        document.getElementById("message").style.color = "red";
    }
});
