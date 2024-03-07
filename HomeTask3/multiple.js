// for loop
let summa = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        summa = summa + i;
    }    
}
console.log("Сума чисел від 1 до 100, які не кратні 3 = " + summa);


// while loop
let sum = 0;
let i = 1;
while (i <= 100) {
    if (i % 3 !== 0) {
        sum = sum + i;
    }
    i++;
}
console.log("Сума чисел від 1 до 100, які не кратні 3 = " + sum);