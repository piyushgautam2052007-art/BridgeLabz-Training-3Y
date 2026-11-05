function delay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Water boiling failed");
            } else {
                console.log("Water boiled");
                resolve();
            }
        }, delay());
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee brewed");
            resolve();
        }, delay());
    });
}

function pourCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee poured into cup");
            resolve();
        }, delay());
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log(error));
