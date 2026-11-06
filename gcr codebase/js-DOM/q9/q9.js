// Q9. Form Submit Validation

document.body.innerHTML = `
<h2>Registration Form</h2>
<form id="form">
    <input id="name" placeholder="Enter name">
    <span id="nameError"></span>
    <br><br>

    <input id="email" placeholder="Enter email">
    <span id="emailError"></span>
    <br><br>

    <input id="password" type="password" placeholder="Enter password">
    <span id="passwordError"></span>
    <br><br>

    <button type="submit">Submit</button>
</form>
<p id="success"></p>
`;

let form = document.getElementById("form");

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText =
            "Password must have 6 characters";
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (validateForm()) {
        document.getElementById("success").innerText =
            "Form Submitted Successfully";
    }
});

form.addEventListener("input", function() {
    validateForm();
    document.getElementById("success").innerText = "";
});
