// Q2. Character Counter

document.body.innerHTML = `
<h2>Character Counter</h2>
<textarea id="text" maxlength="100" placeholder="Write something"></textarea>
<p id="counter">100 characters remaining</p>
<button id="reset">Reset</button>
`;

let text = document.getElementById("text");
let counter = document.getElementById("counter");

text.addEventListener("input", function() {
    let remaining = 100 - text.value.length;

    counter.innerText = remaining + " characters remaining";

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "orange";
    } else if (remaining === 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "green";
    }
});

text.addEventListener("beforeinput", function(e) {
    if (text.value.length >= 100 && e.inputType === "insertText") {
        e.preventDefault();
    }
});

document.getElementById("reset").onclick = function() {
    text.value = "";
    counter.innerText = "100 characters remaining";
    counter.style.color = "green";
};
