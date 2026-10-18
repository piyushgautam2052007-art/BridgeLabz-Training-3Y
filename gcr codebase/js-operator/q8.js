let laptop = 45000;
let shoes = 2500;
let book = 600;

let laptopPrice = laptop - (laptop * 10 / 100);
let shoesPrice = shoes - (shoes * 5 / 100);

let total = laptopPrice + shoesPrice + book;

console.log("Original Total:", laptop + shoes + book);
console.log("Final Total:", total);