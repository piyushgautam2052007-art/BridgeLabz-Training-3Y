let product = " wireless headphones PRO ";

product = product.trim();
product = product.toLowerCase();
product = product.replace("pro", "pro edition");

console.log("Product:", product);
console.log("Length:", product.length);