let a = +prompt('Nhập a');

if (a > 0) {
    let isPrime = true;

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('Số này là số nguyên tố');
    } else {
        console.log('Đây không phải số nguyên tố');
    }
} else {
    console.log('Nhập số dương');
}
