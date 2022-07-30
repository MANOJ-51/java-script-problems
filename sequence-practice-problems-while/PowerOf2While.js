let maximimumNumber = 256;
let startNumber = 0;
let powerOfTwo = 0;

while (powerOfTwo < maximimumNumber) {
    powerOfTwo = Math.pow(2, startNumber);
    console.log("power of two " + startNumber + " is " + powerOfTwo);
    startNumber++;
}