// Q1. Product Class

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    showDetails() {
        console.log(this.id, this.name, this.price, this.category);
    }

    applyDiscount(discount) {
        this.price = this.price - (this.price * discount / 100);
    }
}

let products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Accessories"),
    new Product(3, "Phone", 20000, "Electronics")
];

products.forEach(p => p.showDetails());

console.log("Products above 1000:");

products.filter(p => p.price > 1000)
        .forEach(p => console.log(p.name));
