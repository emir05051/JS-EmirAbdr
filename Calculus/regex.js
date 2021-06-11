const pi = Math.PI;
const e = Math.E;

reOperation = /([+\-\/*])/gm
reNumber = /([^ \n+\-\/*][\d,.]*)/gm
reBrackets = /[\(]([\d+\-\/*]*)[\)]/gm

reSin = /sin[(][\dpi+-\/\*]*[)]/gm
    // sin(x)

reCos = /cos[(][\dpi+-\/\*]*[)]/gm
    //cos(x)

reSqrt = /sqrt[(][\d]*[\)]/gm
    //sqrt(x)

rePow = /(\d*)[\^](\d*)/gm
    // x^y

reLog = /log[\(]([\d]*)[\)][\(]([\d]*)[\)]/gm
    // log (x)(y)


let sum = 0;
let haveBrackets = false;


const getLog = (x, y) => {
    return Math.log(y) / Math.log(x);
}


window.addEventListener("load", () => {

    const form = document.forms["calculator"];


    let input = form.elements["calc"]
    let div = document.getElementById("final");
    let button = document.getElementById("confirm")


    // div.innerHTML = input.value;
    value = input.value;
    operation = value.match(reOperation);
    numbers = value.match(reNumber);

    console.log(operation)
    console.log(numbers)

    function stringToArray(s) {
        return [...s];
    }

    function calculate(calc) {
        var ops = [{
                    '^': (a, b) => Math.pow(a, b)
                },
                {
                    '*': (a, b) => a * b,
                    '/': (a, b) => a / b
                },
                {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b
                }
            ],
            newCalc = [],
            currentOp;
        for (var i = 0; i < ops.length; i++) {
            for (var j = 0; j < calc.length; j++) {
                if (ops[i][calc[j]]) {
                    currentOp = ops[i][calc[j]];
                } else if (currentOp) {
                    newCalc[newCalc.length - 1] =
                        currentOp(newCalc[newCalc.length - 1], calc[j]);
                    currentOp = null;
                } else {
                    newCalc.push(calc[j]);
                }
                console.log(newCalc);
            }
            calc = newCalc;
            newCalc = [];
        }
        if (calc.length > 1) {
            console.log('Error: unable to resolve calculation');
            return calc;
        } else {
            return calc[0];
        }
    }



    button.addEventListener('click', function() {
        div.innerHTML = calculate(stringToArray(value));
    });

})