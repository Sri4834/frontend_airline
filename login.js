document.addEventListener("DOMContentLoaded", function() {
    const adminLoginForm = document.getElementById("adminLoginForm");
    const userLoginForm = document.getElementById("userLoginForm");

    // Admin Login
    adminLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const adminEmail = document.getElementById("adminEmail").value;
        const adminPassword = document.getElementById("adminPassword").value;

        if (adminEmail === "uh@gmail.com" && adminPassword === "123456") {
            alert("Admin Login Successful! Redirecting...");
            window.location.href = "./dashboard.html"; 
        } else {
            alert("Invalid Admin Credentials! Please try again.");
        }
    });

    // User Login
    userLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const userEmail = document.getElementById("userEmail").value;
        const userPassword = document.getElementById("userPassword").value;

        if (userEmail && userPassword) {
            alert("User Login Successful! Redirecting...");
            window.location.href = "./customer.html"; 
        } else {
            alert("Please fill in all fields.");
        }
    });
});
