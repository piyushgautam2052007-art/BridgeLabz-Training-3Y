function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Messages failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    let startTime = Date.now();

    let results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });

    let endTime = Date.now();

    console.log("Total time:", endTime - startTime, "ms");
}

loadDashboard();
