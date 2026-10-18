const total = 6500;
let discountPercentage;

if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = total * discountPercentage / 100;
const finalPrice = Math.round(total - discountAmount);

console.log(`Original Total: ${Math.round(total)}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: ${Math.round(discountAmount)}`);
console.log(`Final Price: ${finalPrice}`);