//operate function -> takes in an operator (+ - / *) and 2 numbers
//and then calls one of the functions on the numbers

//operator function

function operate([num1, op, num2]) {
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
            return "hehe no"
        } else {
            return number1 / number2;
        }
    }
}

//things that makes stuff (not results) appear on the screen
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
function splitUserInput(userInput) {
    return userInput.split(/(\D)/)
}
//transfroms array into result
function getResult(input) {
    let numbersArray = splitUserInput(input);
    let finalResult = operate(numbersArray);
    return finalResult;
}

//pressing "=" calls operate function
const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
    let resultsOfOperations = getResult(userInput);
    results.innerText = resultsOfOperations;
});

//clear button AC
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    results.innerText = '';
    calculations.innerText = '';
    userInput = 0;
});




















// const buttons = document.querySelectorAll('#buttonsContainer');
// buttons.addEventListener('click', () => {
//     alert('i was alerted')
// })
