let primeNumberRange = 7;
let primeOutput = 0;

for (let i = 0; i < primeNumberRange / 2; i++) {
    if ((primeNumberRange % 2) == 0) {
        primeOutput++;
    }
}
if (primeOutput == 0) {
    console.log(primeNumberRange + " is a prime number");
} else {
    console.log(primeNumberRange + " is not prime number");
}