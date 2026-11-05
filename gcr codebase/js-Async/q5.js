function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

function callbackPipeline() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

function wait() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function asyncPipeline() {
    await wait();
    console.log("Design completed");

    await wait();
    console.log("Build completed");

    await wait();
    console.log("Testing completed");

    await wait();
    console.log("Deployment completed");

    await wait();
    console.log("Celebration time!");
}

console.log("Callback Pipeline");
callbackPipeline();

setTimeout(() => {
    console.log("Async/Await Pipeline");
    asyncPipeline();
}, 5500);
