
// using Loop
let num = 5;
let fact = 1;
//run a loop to find all the multiplication
for(let i=1;i<=num;i++){
  fact *= i;
}
// print the factorial
console.log(fact);//120


// Using Recusrsion

function factorial  (num){
   if(num == 0 || num === 1){
    return 1
   }

   return num*factorial(num-1);
}

console.log(factorial(num))//120