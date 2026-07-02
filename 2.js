// Login Form
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email=document.getElementById("loginEmail").value;
        const password=document.getElementById("loginPassword").value;

        const savedEmail=localStorage.getItem("userEmail");
        const savedPassword=localStorage.getItem("userPassword");

        if(email===savedEmail && password===savedPassword){

            alert("Login Successful!");

            window.location.href="index.html";

        }else{

            alert("Invalid Email or Password!");

        }

    });

}

// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(name==="" || email==="" || password==="" || confirmPassword===""){
            alert("Please fill all fields.");
            return;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match.");
            return;
        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Registration Successful!");

        window.location.href="Login.html";

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

