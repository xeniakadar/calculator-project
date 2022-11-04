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
            return "you broke me </3"
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
function splitUserInput(string) {
    let finalVersion = string.split(/(\D)/);
    console.log(finalVersion);
    return finalVersion;
}
//array into result but also if there are 3 numbers and 2 operators
function getResult(input) {
    let numbersArray = splitUserInput(input);
    if (numbersArray.length === 3) {
        return operate(numbersArray);
    }
    else if (numbersArray.length > 3) {
        let result1 = operate(numbersArray);
        let longerNumbersArray = [result1, numbersArray[3], numbersArray[4]];
        return operate(longerNumbersArray);
    }
}
//transfroms array into result
function getResult2(input) {
    let numbersArray = splitUserInput(input); //we get split numbers
    console.log(numbersArray);
    let finalResult = operate(numbersArray);
    console.log(typeof(numbersArray));
    return finalResult;
}
//for loop!!!!!

function getResult3(input) {
    let numbersArray = splitUserInput(input);

    for (let i = 0; numbersArray.length > 0; i++) {

    }


    // for(let i = 0; numbersArray.length > i; i++) {
    // }
}



//pressing "=" calls operate function
const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
    let resultsOfOperations = getResult3(userInput);
    results.innerText = resultsOfOperations;
});

//clear button AC
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
