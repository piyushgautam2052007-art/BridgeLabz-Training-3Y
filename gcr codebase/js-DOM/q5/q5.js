// Q5. Image Gallery

document.body.innerHTML = `
<h2>Image Gallery</h2>
<div id="gallery"></div>
<div id="modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;">
    <img id="bigImage" width="500">
</div>
`;

let gallery = document.getElementById("gallery");
let modal = document.getElementById("modal");
let bigImage = document.getElementById("bigImage");

for (let i = 1; i <= 6; i++) {
    let img = document.createElement("img");

    img.src = `https://picsum.photos/200?random=${i}`;
    img.width = 150;
    img.style.margin = "10px";
    img.style.cursor = "pointer";

    gallery.appendChild(img);
}

gallery.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        modal.style.display = "flex";
        bigImage.src = e.target.src;
    }
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

bigImage.addEventListener("click", function(e) {
    e.stopPropagation();
});
