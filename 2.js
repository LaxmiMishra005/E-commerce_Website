// Add to Cart Button
const addCartBtn = document.getElementById("addCart");

if (addCartBtn) {
    addCartBtn.addEventListener("click", function () {
        alert("Product added to cart successfully!");
    });
}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Login Successful!");

        window.location.href = "index.html";

    });

}

// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Registration Successful!");

        window.location.href = "Login.html";

    });

}

// Search Button
const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const text = document.querySelector(".search-box input").value;

        if (text === "") {

            alert("Please enter a product name.");

        } else {

            alert("Searching for: " + text);

        }

    });

}

// Product Buttons
const buttons = document.querySelectorAll(".card button");

buttons.forEach(function (btn) {

    btn.addEventListener("mouseover", function () {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseout", function () {

        btn.style.transform = "scale(1)";

    });

});

// Checkout Button
const checkout = document.querySelector(".checkout-btn");

if (checkout) {

    checkout.addEventListener("click", function () {

        alert("Proceeding to Checkout...");

    });

}

