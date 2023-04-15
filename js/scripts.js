const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const commaButton = document.querySelector('[data-comma]');
const equalButton = document.querySelector('[data-equals]');
let firstNumber = undefined;
let secondNumber = undefined;
let selectedOperator = undefined;
let operatorSelected = false;
let answer = undefined;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectNumber(button.innerText);
    })
})

commaButton.addEventListener("click", () => {
    selectNumber(".");
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectOperator(button.innerText);
    })
})

clearButton.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    operatorSelected = undefined;
    answer = undefined;
    document.getElementById('display_field').innerHTML = 0;
})

equalButton.addEventListener("click", () => {
    if(firstNumber && secondNumber && selectedOperator)
        calculate();
})

function selectNumber(number){
    let currentNumber;
    if(!operatorSelected){
        if(!firstNumber){
            firstNumber = number;
        }
        else if(firstNumber && firstNumber.length < 16){
            firstNumber += number;
        }
        currentNumber = firstNumber;
        
    }
    else{
        if(!secondNumber){
            secondNumber = number
        }
        else{
            secondNumber += number;
        }
        currentNumber = secondNumber;
    }
    document.getElementById('display_field').innerHTML = currentNumber;
}

function selectOperator(operator){
    operatorSelected = true;
    selectedOperator = operator;
    if(secondNumber){
        firstNumber = secondNumber;
        secondNumber = undefined;
    }
}

function calculate(){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(answer){
        firstNumber = answer;
    }
    switch(selectedOperator){
        case "+":
            answer = (firstNumber + secondNumber);
            console.log(firstNumber);
            console.log(secondNumber);
            break;
        case "-":
            answer = (firstNumber - secondNumber);
            break;
        case "*":
            answer = (firstNumber * secondNumber);
            break;
        case "/":
            answer = (firstNumber / secondNumber);
            break;
    }
    document.getElementById('display_field').innerHTML = answer;
}