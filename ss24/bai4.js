let a = +prompt("Nhập a:")
if (a>0) {
    let bphuong = 0;
    for (let i = 2; bphuong + i * i <=a; i += 2) {
        let square = i * i;
        bphuong += square;
        console.log(`${i}^2 = ${square}`)
    }
} else {
    console.log('Nhập số nguyên dương ')
}