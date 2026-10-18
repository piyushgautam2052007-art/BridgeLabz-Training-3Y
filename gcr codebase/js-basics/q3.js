const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1800 },
    { category: "Leisure", amount: 1500 }
];

let total = 0;

for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
const tax = total * 0.10;
total += tax;

console.log(`Total before tax: ${(total - tax).toFixed(2)}`);
console.log(`Average expense: ${average.toFixed(2)}`);
console.log(`Tax amount: ${tax.toFixed(2)}`);
console.log(`Final amount after tax: ${total.toFixed(2)}`);