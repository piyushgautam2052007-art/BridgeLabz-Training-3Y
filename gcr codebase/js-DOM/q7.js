// Q7. Mouse Coordinates

document.body.innerHTML = `
<h2>Mouse Coordinates</h2>
<div id="box" style="width:400px; height:400px; border:2px solid black; position:relative;">
</div>
<p id="coordinates">Move mouse inside the box</p>
`;

let box = document.getElementById("box");
let coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", function(e) {
    let x = e.clientX;
    let y = e.clientY;

    coordinates.innerText = "X: " + x + " Y: " + y;
});

box.addEventListener("dblclick", function(e) {
    let dot = document.createElement("div");

    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.backgroundColor = "red";
    dot.style.borderRadius = "50%";
    dot.style.position = "absolute";
    dot.style.left = (e.clientX - box.getBoundingClientRect().left) + "px";
    dot.style.top = (e.clientY - box.getBoundingClientRect().top) + "px";

    box.appendChild(dot);
});
