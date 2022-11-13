// Check the number is prime or not
let num = 11;
let count = 0;
for(let i=1;i<=num/2;i++){
    if(num%i==0){
        count++;
    }
}
if(count>2){
    console.log("Number is Not Prime");
}else{
    console.log("Number is Prime");
}


// check number of prime numbers 1 to num;

for(let i=1;i<=num;i++){
    let count1 = 0;
    for(let j=1;j<=Math.floor(i/2);j++){
        if(i%j==0){
            count1++;
        }
    }   
    if(count1 >= 2){
        console.log(i+":" +"Number is Not prime")
    }else{
        console.log(i+":" +'Number is Prime');
    }
}