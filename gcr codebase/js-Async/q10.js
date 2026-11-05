function runStep(message) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(message + " failed");
            } else {
                console.log(message);
                resolve();
            }
        }, time);
    });
}

async function takeOrder() {
    await runStep("Step 1: Order taken");
}

async function prepare() {
    await runStep("Step 2: Food prepared");
}

async function pack() {
    await runStep("Step 3: Package ready");
}

async function dispatch() {
    await runStep("Step 4: Out for delivery");
}

async function deliver() {
    await runStep("Delivery completed!");
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();

    } catch (error) {
        console.log("Pipeline failed!");
    }
}

runPipeline();
