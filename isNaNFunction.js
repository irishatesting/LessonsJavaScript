function isNaNFunction(value) {
    const num = Number(value);
    return num !== num;
  }

console.log("My function: " + isNaNFunction (NaN));
console.log("isNaN: " + isNaN(NaN));

console.log("My function: " + isNaNFunction ("20"));
console.log("isNaN: " + isNaN("20"));

console.log("My function: " + isNaNFunction ("qwerty" / 10));
console.log("isNaN: " + isNaN("qwerty" / 10));

console.log("My function: " + isNaNFunction (undefined));
console.log("isNaN: " + isNaN(undefined));


console.log("My function: " + isNaNFunction (20));
console.log("isNaN: " + isNaN(20));


console.log("My function: " + isNaNFunction (null));
console.log("isNaN: " + isNaN(null));

console.log("My function: " + isNaNFunction ("qwerty"));
console.log("isNaN: " + isNaN("qwerty"));