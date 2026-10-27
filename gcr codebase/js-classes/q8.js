// Q8. Update User Object

let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
<h2>User Details</h2>
<input id="name" value="${user.name}"><br><br>
<input id="email" value="${user.email}"><br><br>
<input id="age" type="number" value="${user.age}"><br><br>
<h3>Updated Object</h3>
<pre id="result"></pre>
`;

function updateUser() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    document.getElementById("result").innerText =
        JSON.stringify(user, null, 2);
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateUser);
});

updateUser();
