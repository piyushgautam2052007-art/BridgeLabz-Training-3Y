function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand, this.model);
};

let car1 = new Car("Tata", "Nexon");
let car2 = new Car("Mahindra", "Thar");

car1.getDetails();
car2.getDetails();
