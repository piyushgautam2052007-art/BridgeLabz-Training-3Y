// Q3. Multi Step Form

document.body.innerHTML = `
<h2>Registration Form</h2>
<div id="step">
<input id="name" placeholder="Enter name">
</div>
<p id="message"></p>
<button id="back">Back</button>
<button id="next">Next</button>
`;

let currentStep = 1;
let name = "";
let email = "";
let password = "";

function showStep() {
    let step = document.getElementById("step");
    let back = document.getElementById("back");
    let next = document.getElementById("next");

    if (currentStep === 1) {
        step.innerHTML = '<input id="name" placeholder="Enter name">';
    } else if (currentStep === 2) {
        step.innerHTML = '<input id="email" placeholder="Enter email">';
        document.getElementById("email").value = email;
    } else if (currentStep === 3) {
        step.innerHTML = '<input id="password" type="password" placeholder="Enter password">';
        document.getElementById("password").value = password;
    }

    back.style.display = currentStep === 1 ? "none" : "inline";
    next.innerText = currentStep === 3 ? "Submit" : "Next";
}

document.getElementById("next").onclick = function() {
    let message = document.getElementById("message");

    if (currentStep === 1) {
        name = document.getElementById("name").value.trim();

        if (name === "") {
            message.innerText = "Enter your name";
            return;
        }
    } else if (currentStep === 2) {
        email = document.getElementById("email").value.trim();

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            message.innerText = "Enter valid email";
            return;
        }
    } else {
        password = document.getElementById("password").value;

        if (password.length < 6) {
            message.innerText = "Password must have 6 characters";
            return;
        }

        document.getElementById("step").innerHTML =
            `<h3>Form Summary</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Password: ${"*".repeat(password.length)}</p>`;

        message.innerText = "Form completed successfully";
        document.getElementById("next").style.display = "none";
        return;
    }

    message.innerText = "";
    currentStep++;
    showStep();
};

document.getElementById("back").onclick = function() {
    if (currentStep > 1) {
        currentStep--;
        showStep();
        document.getElementById("message").innerText = "";
    }
};

showStep();
