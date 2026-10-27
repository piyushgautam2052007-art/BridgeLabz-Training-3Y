"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const item = JSON.parse(rawData[i]);

        if (!item.user || item.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(item.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        if (age < 18) {
            console.log(`Line ${i + 1}: User is under 18`);
            continue;
        }

        clean.push({
            user: item.user,
            age: age
        });
    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean data:", clean);
