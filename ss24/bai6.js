let n = +prompt("Nhập n :");
let sodaongc = 0;

if (n > 0) {
    for (; n > 0; n = n / 10 | 0) {
        sodaongc = sodaongc * 10 + n % 10;
    }
    console.log(sodaongc);
} else {
    console.log('Nhập số dương');
}
