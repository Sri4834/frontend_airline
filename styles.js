


// Navbar effect when scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.6)";
    }
});
// Show Booking Form
function showBookingForm() {
    document.getElementById("bookingForm").style.display = "block";
    document.getElementById("flightStatus").style.display = "none";
}

// Show Flight Status
function showFlightStatus() {
    document.getElementById("flightStatus").style.display = "block";
    document.getElementById("bookingForm").style.display = "none";
}