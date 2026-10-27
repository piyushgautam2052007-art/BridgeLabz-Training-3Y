// Q7. Login Form Validation

document.body.innerHTML = `
<h2>Login Form</h2>
<form id="form">
<input id="username" placeholder="Username"><br><br>
<input id="password" type="password" placeholder="Password"><br><br>
<button>Login</button>
</form>
<p id="message"></p>
`;

document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = "";

    if (username.length < 5) {
        message = "Username must have at least 5 characters";
    } else if (password.length < 8) {
        message = "Password must have at least 8 characters";
    } else if (!/[0-9]/.test(password)) {
        message = "Password must contain a number";
    } else if (!/[A-Z]/.test(password)) {
        message = "Password must contain an uppercase letter";
    } else if (!/[a-z]/.test(password)) {
        message = "Password must contain a lowercase letter";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
        message = "Password must contain a special character";
    } else {
        message = "Login successful!";
    }

    document.getElementById("message").innerText = message;
};
