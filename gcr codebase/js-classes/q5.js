// Q5. Movie Ticket Booking

document.body.innerHTML = `
<h2>Movie Ticket Booking</h2>
<form id="form">
<input id="name" placeholder="Name"><br><br>
<input id="email" placeholder="Email"><br><br>
<input id="seats" type="number" placeholder="Seats (1-10)"><br><br>
<button>Book Ticket</button>
</form>
<p id="result"></p>
`;

document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let seats = Number(document.getElementById("seats").value);

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Enter a valid name");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email");
    } else if (seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10");
    } else {
        let booking = { name, email, seats };

        document.getElementById("result").innerText =
            JSON.stringify(booking, null, 2);
    }
};
