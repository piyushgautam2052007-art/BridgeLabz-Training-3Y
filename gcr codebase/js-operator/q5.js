let doorLocked = true;
let windowClosed = true;
let alarmOn = true;
let ownerInside = true;

if (doorLocked && windowClosed && alarmOn && ownerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}