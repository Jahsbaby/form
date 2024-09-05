function toggleNav() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (!name || !email || !message) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address!";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}