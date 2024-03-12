function pad(line, symbol, isStart, count) {
    let newstr = "";
    if (isStart) {
        for (let i = 1; i <= (count - line.length); i++) {
            newstr = symbol + newstr;
        }
        line = newstr + line;

    }
    else {
        for (let i = 1; i <= (count - line.length); i++) {
            newstr = symbol + newstr;
        }
        line = line + newstr;
    }
    console.log(line);
};

let line = "Testing";
let symbol = "*";
let count = 12;
let isStart = false;
line.length
pad(line, symbol, isStart, count);