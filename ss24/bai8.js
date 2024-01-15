let a = +prompt('Nhập a');

if (a > 0) {
    console.log(`Các số nguyên tố trong khoảng từ 2 đến ${a} là:`);

    for (let i = 2; i <= a; i++) {
        let isPrime = true;

        if (i === 1) {
            isPrime = false;
        } else {
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
} else {
    console.log('Nhập số dương');
}
