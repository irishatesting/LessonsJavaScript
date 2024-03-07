
let symbolForDraw = "+";
let lines = 10;

// first way - with FOR loop
function drawTriangle (lines, symbolForDraw) {
    let result = symbolForDraw;
    for (let i = 1; i <= lines; i++){        
        console.log(result);
        result = result + symbolForDraw;
    }
}

drawTriangle(lines, symbolForDraw);

//the second way with while loop
function drawTriangleWhile (lines, symbolForDraw) {
    let result = symbolForDraw;
    let i = 1;
    while (i <= lines) {
        console.log(result);
        result = result + symbolForDraw;
        i++;
    }
}

drawTriangleWhile(lines, symbolForDraw);