document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email address.");
        return;
    }

    // Password strength validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Simulate a successful registration
    alert("Registration Successful! Redirecting to login page...");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
