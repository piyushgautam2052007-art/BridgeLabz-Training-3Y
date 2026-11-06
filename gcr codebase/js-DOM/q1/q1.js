// Q1. Dynamic Product List

document.body.innerHTML = `
<h2>Product List</h2>
<input id="productInput" placeholder="Enter product">
<button id="addBtn">Add Product</button>
<ul id="productList"></ul>
`;

let input = document.getElementById("productInput");
let list = document.getElementById("productList");

document.getElementById("addBtn").onclick = function() {
    if (input.value.trim() === "") {
        alert("Enter product name");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let edit = document.createElement("button");
    let del = document.createElement("button");

    span.innerText = input.value;
    edit.innerText = "Edit";
    del.innerText = "Delete";

    li.append(span, edit, del);
    list.appendChild(li);

    input.value = "";
};

list.addEventListener("click", function(e) {
    let li = e.target.parentElement;
    let span = li.querySelector("span");

    if (e.target.innerText === "Delete") {
        li.remove();
    }

    if (e.target.innerText === "Edit") {
        span.contentEditable = true;
        span.focus();
    }
});

list.addEventListener("focusout", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.contentEditable = false;
    }
});
