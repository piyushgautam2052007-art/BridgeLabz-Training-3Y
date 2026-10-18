for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
        console.log(i, "FizzBuzz");
    } else if (i % 2 === 0) {
        console.log(i, "Even");
    } else {
        console.log(i, "Odd");
    }
}