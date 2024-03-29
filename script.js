function operate(num1, op, num2) {
    number1 = parseInt(num1);
    number2 = parseInt(num2)
    if (op === '+') {
        return number1 + number2
    } else if (op === '-') {
        return number1 - number2;
    } else if (op === '*') {
        return number1 * number2;
    } else if (op === '/') {
        if(number2 === 0) {
            return "you broke me </3"
        } else {
            return number1 / number2;
        }
    }
}


let calculations = document.querySelector('#calculations');
let results = document.querySelector('#result');
let userInput = '';

for (let i = 0; i < 10; i++) {
    const button = document.getElementById(`button-${i}`);
    button.addEventListener('click', () => {
        calculations.innerText += i
        userInput += i
    });
}
const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => {
    userInput += (btnMultiply.textContent);
    calculations.innerText += (btnMultiply.textContent);
})
const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => {
    userInput += (btnDivide.textContent);
    calculations.innerText += (btnDivide.textContent);
})
const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
    userInput += (btnMinus.textContent);
    calculations.innerText += (btnMinus.textContent);
});
const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
    userInput += (btnPlus.textContent);
    calculations.innerText += (btnPlus.textContent);
});
const btnPoint = document.querySelector('#point');
btnPoint.addEventListener('click', () => {
    userInput += (btnPoint.textContent);
    calculations.innerText += (btnPoint.textContent);
});

// splits userInput into numbers and signs into array
function splitUserInput(string) {
    let finalVersion = string.split(/(\D)/);
    console.log(finalVersion);
    return finalVersion;
}

function getResult3(input) {
    let numArr = splitUserInput(input);
    let i = 1;
    let result = numArr[0];
    while (i < numArr.length) {
        let op = numArr[i];
        let num2 = numArr[i+1];
        result = operate(result, op, num2);
        i += 2;
    }
    return result;
    // for (let i = 0; numbersArray.length > 0; i++) {
    //     if (numbersArray.length === 3) {
    //         return operate(numbersArray);
    //     }
    //     else if (numbersArray.length > 3) {
    //         let result1 = operate(numbersArray);

    //         let longerNumbersArray = [result1, numbersArray[i+1], numbersArray[i]];
    //         console.log(longerNumbersArray);
    //         return operate(longerNumbersArray);
    //     }
    // }

}


const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
    let resultsOfOperations = getResult3(userInput);
    results.innerText = resultsOfOperations;
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    results.innerText = '';
    calculations.innerText = '';
    userInput = '';
});

//del button DEL
const btnDel = document.querySelector('#delete');
btnDel.addEventListener('click', () => {
    calculations.innerText = (calculations.innerText).slice(0, -1);
})
