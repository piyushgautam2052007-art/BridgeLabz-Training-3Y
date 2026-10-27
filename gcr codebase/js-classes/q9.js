// Q9. Shopping Cart

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    }

    applyCoupon(code) {
        let total = this.getTotal();

        if (!/^(SAVE20|DISC10)$/.test(code)) {
            console.log("Invalid coupon");
            return total;
        }

        let discount = code === "SAVE20" ? 20 : 10;

        return total - (total * discount / 100);
    }
}

let cart = new Cart();

cart.addItem("Book", 200, 2);
cart.addItem("Pen", 50, 3);

console.log("Total:", cart.getTotal());
console.log("After discount:", cart.applyCoupon("SAVE20"));
