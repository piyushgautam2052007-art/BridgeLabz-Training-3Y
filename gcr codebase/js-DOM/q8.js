// Q8. Custom Dropdown

document.body.innerHTML = `
<h2>Custom Dropdown</h2>
<div id="dropdown">
    <button id="dropdownBtn">Select Option</button>
    <div id="options" style="display:none;">
        <p class="option">JavaScript</p>
        <p class="option">Java</p>
        <p class="option">Python</p>
    </div>
</div>
`;

let dropdown = document.getElementById("dropdown");
let button = document.getElementById("dropdownBtn");
let options = document.getElementById("options");

button.onclick = function(e) {
    e.stopPropagation();
    options.style.display =
        options.style.display === "none" ? "block" : "none";
};

options.addEventListener("click", function(e) {
    if (e.target.classList.contains("option")) {
        button.innerText = e.target.innerText;
        options.style.display = "none";
    }
});

document.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target)) {
        options.style.display = "none";
    }
}, true);
