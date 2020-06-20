function fibonacciGenerator(n) {
    var output = [];
    if (n === 0) {
        output = [0];
    } else if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[output.lenght - 2] + output[output.lenght - 1]);
        }

    }
    return output;
}
output = fibonacciGenerator(1);
console.log(output);
