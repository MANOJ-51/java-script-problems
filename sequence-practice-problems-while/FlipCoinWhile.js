let headsCount = 0;
let tailsCount = 0;

while (headsCount != 11 && tailsCount != 11) {
    let flipCoin = Math.floor(Math.random() * 2);
    switch (flipCoin) {
        case 0:
            headsCount++;
            break;
        default:
            tailsCount++;
            break;
    }
}
console.log("Heads Count is " + headsCount);
console.log("Tails count is " + tailsCount);