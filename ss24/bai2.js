let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");
if (a > b) {
    [a, b] = [b, a];
}
let sum=0
for (let i = a ; i <= b; i++) {
    sum+=i;
    }
console.log(sum)