// Q6. Table Filter

document.body.innerHTML = `
<h2>Student Table</h2>
<input id="search" placeholder="Search student">
<table border="1" cellpadding="10">
<thead>
<tr><th>Name</th><th>Branch</th><th>CGPA</th></tr>
</thead>
<tbody id="students">
<tr><td>Amit</td><td>CSE</td><td>8.5</td></tr>
<tr><td>Rahul</td><td>ECE</td><td>7.8</td></tr>
<tr><td>Priya</td><td>CSE</td><td>9.0</td></tr>
<tr><td>Neha</td><td>IT</td><td>8.2</td></tr>
</tbody>
</table>
<p id="message"></p>
`;

let search = document.getElementById("search");
let rows = document.querySelectorAll("#students tr");

search.addEventListener("input", function() {
    let value = search.value.toLowerCase();
    let found = false;

    rows.forEach(row => {
        if (row.innerText.toLowerCase().includes(value)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    document.getElementById("message").innerText =
        found ? "" : "No results found";
});
