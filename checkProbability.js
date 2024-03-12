function checkProbabilityTheory(count) {
    let num;
    let pair = 0;
    let nonPair = 0;
    for (let i = 1; i <= count; i++) {
        num = Math.round(Math.random() * 900) + 100;
        console.log(num);
        if (num % 2 === 0) {
            pair = pair + 1; 
        } 
        else nonPair = nonPair + 1;
    }
    console.log("Парних чисел: " + pair);
    console.log("Не парних чисел: " + nonPair);
    console.log ("Відсоток парних до не парних чисел: " + pair/count * 100 + " %");
    console.log ("Відсоток не парних до парних чисел: " + nonPair/count * 100 + " %");
}


let count = 10;
console.log("Кількість згенерованих чисел: " + count);
checkProbabilityTheory(count);
