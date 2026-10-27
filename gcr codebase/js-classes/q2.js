// Q2. Student Form Validation

document.body.innerHTML = `
<h2>Student Form</h2>
<form id="form">
<input id="name" placeholder="Name"><br><br>
<input id="email" placeholder="Email"><br><br>
<input id="phone" placeholder="Phone"><br><br>
<input id="password" type="password" placeholder="Password"><br><br>
<button>Submit</button>
<p id="message"></p>
</form>
`;

document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let message = "";

    if (!/^[A-Za-z ]+$/.test(name)) {
        message = "Enter a valid name";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        message = "Enter a valid email";
    } else if (!/^\d{10}$/.test(phone)) {
        message = "Enter a 10-digit phone number";
    } else if (!/[A-Z]/.test(password) ||
               !/[0-9]/.test(password) ||
               !/[^A-Za-z0-9]/.test(password)) {
        message = "Password needs uppercase, number and special character";
    } else {
        message = "Form submitted successfully!";
    }

    document.getElementById("message").innerText = message;
};
