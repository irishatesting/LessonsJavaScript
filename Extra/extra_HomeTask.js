// --- Operators ----

/* Task - 1
Create variable named myAge and set its value equal your age
Display the sum of myAge + 30, using two variables: x and y. */
    let myAge = 41; 
    let x = 30;
    let y = myAge + x;
    console.log(y);

/* Task - 2
Create variable named dividedNumber and set its value equal myAge divided by 2
 /* NOTE: you should use myAge variable here */
    let dividedNumber = myAge / 2;
    console.log(dividedNumber);

/* Task - 3
Create variable named multipleNumber and set its value equal myAge multiply by 2 */
    let multipleNumber = myAge * 2;
    console.log(multipleNumber);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'if' conditional ---

/* Task - 4
 Створіть програму, яка буде зберігати значення ваги кота. 
Якщо кіт важить менше 5 кг, то він маленький і його ще треба годувати, 
якщо більше 5, то кіт дуже пухнастий і його потрібно розчесати :) 

Переписати інструкцію if з використанням умовного оператора '?
*/

let weight = 2;
if (weight <= 5) {
    console.log("Ваш кіт маленький і його треба годувати");
}
else {
    console.log("Ваш кіт пухнастий і його треба розчесати");
};

// тернарний
let message = (weight <= 5) ? "Ваш кіт маленький і його треба годувати" : "Ваш кіт пухнастий і його треба розчесати";
console.log(message);



/* Task - 5
Напишіть умову if, яка перевіряє, чи значення віку НЕ знаходиться між 18 і 50 включно, якщо це не так, то наймайте. 

Переписати інструкцію if з використанням умовного оператора '? 

%%% https://www.tiktok.com/@devslopes/video/7260261089928105258 %%%%
*/

let age = 21;
if (age <= 50 && age >= 18) {
    console.log("Наймаэмо");
}
else {
    console.log("НЕ Наймаємо");
}

let newMessage = (age <= 50 && age >= 18) ? "Наймаэмо": "НЕ Наймаємо";
console.log(newMessage);
   
 /* Task - 6
Переписати інструкцію if з використанням умовного оператора '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */
let height = 100;
let infoMessage = (height < 140) ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(infoMessage);

/* Task - 7
Створіть сценарій. Запросіть у користувача вік. Якщо вік користувача більше ніж 18 
– виведіть на екран повідомлення «доступ дозволено». Якщо введене користувачем значення 
менше ніж 18 – виведіть на екран повідомлення «доступ заборонено»
 */


let ageOfCustomer = prompt("Введіть ваш вік:");

    if (ageOfCustomer >= 18) {
        alert("Доступ дозволено");
    } else {
        alert("Доступ заборонено");
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'switch' conditinal ---

/* Task - 8
Напишіть програму, яка буде показувати, до якої пори року належить певний номер місяця 
(наприклад, я вводжу "1" і вона повідомляє мені, що зараз зима, вводжу "5" - весна і т.д.). */

let mountOfYear = 10;
switch (mountOfYear) {
    case 12:
    case 1: 
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Не валідне значення місяца");
}





/* Task - 9
Перепишіть "if" на "switch"

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/
let ageOfClient =17;
switch (true) {
    case (ageOfClient < 16):
        console.log('We cant hire u!');
        break;
    case (ageOfClient >= 18):
        console.log('U can take full time job');
        break;
    case ((ageOfClient === 16) || (ageOfClient === 17)):
        console.log('U can take part time job');
        break;
    default:
        console.log('No suitable condition found.');
}
