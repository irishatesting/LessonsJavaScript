/* Task - 1
   Replace the "for" loop with a "while" loop 
*/

for (let i = 0; i < 8; i++) {
    console.log( `число - ` + i);
  }

  // while loop
  let i = 0;
  while (i < 8) {
    console.log( `число - ` + i);
    i++;
  }
  
  /*Task - 2
    Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
    Use 3 different cycles: for | while | do..while */
// for loop
let summa = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 !== 0) {
        summa = summa + i;
    }    
}
console.log("Сума чисел від 1 до 50, які не кратні 3 = " + summa);


// while loop
let sum = 0;
let i = 1;
while (i <= 50) {
    if (i % 3 !== 0) {
        sum = sum + i;
    }
    i++;
}
console.log("Сума чисел від 1 до 50, які не кратні 3 = " + sum);

// do...while

let sumDoWhile = 0;
let j = 1;
do {
    if (j % 3 !== 0) {
        sumDoWhile = sumDoWhile + j;
    }
    j++;
} 
while (j <= 50);

console.log("Сума чисел від 1 до 50, які не кратні 3 = " + sumDoWhile)


  
  /* Task - 3
    Implement algorithm which will calculate sum of numbers from firstNumber to secondNumber (included)
    
    Use for loop  
  */
  
  let firstNumber = -100;
  let secondNumber = 250;
  let summaOfNumbers = 0;
  for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
        summaOfNumbers = summaOfNumbers + firstNumber;

  }
  console.log(summaOfNumbers);
  
  /* Task - 4
    Make a timer that will count from 10 to 0
   
    For example,
    10 seconds left
    9 seconds left
    8 seconds left 
  */

  for (let i = 10; i >= 0; i--) {
        console.log(i + " seconds left");
  }
  
  /* Task - 5
    Create program to display the following sequence: 7 14 21 28 35 42 49 */
  for (let i = 1; i <= 7; i++) {
    console.log(7 * i);
  }


  /* Task - 6 
    implement algorithm which calculates factorial for 
    using for, while, do..while operators
    what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
  */
 let factorialOfNumber = 1;
 let number = 5;

 // for

 /* for (let i = 1; i <= number; i++) {
    factorialOfNumber = factorialOfNumber * i;
 }
 console.log(factorialOfNumber); */

// while
/*let ii = 1;
while (ii <= number) {
    factorialOfNumber = factorialOfNumber * ii;
    ii++;
}
console.log(factorialOfNumber); */

// do...while

let i = 1;
do {
    factorialOfNumber = factorialOfNumber * i;
    i++;
} 
while (i <= number);
console.log(factorialOfNumber);


  /* Task - 7 
    implement algorithm filling a bathtub using buckets. 
    we know how many liters the bathtub holds and the capacity of one bucket, 
    but we don't know how many buckets we need. 
    We need to fill the bathtub without overflowing it.
  
    Use while loop 
  */
  
  let bucket = 5; //capacity of one bucket
  let initialBathState = 0; //the initial value of the amount of water in the bathroom
  let bathCapacity = 60; //
  let newBathCapacity = 0; 

  while (newBathCapacity < bathCapacity) {
    newBathCapacity = newBathCapacity + bucket;
    initialBathState++;
  }
  console.log(initialBathState, newBathCapacity);
