let n=+prompt('Nhập a')
let sum=0;
if(n>0){
    for(let i=1;i<=n;i++){
        sum+=(1/i**3);
    }
    console.log(sum.toFixed(5))
}else{
    console.log('Nhập số dương')
}