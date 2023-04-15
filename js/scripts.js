const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const commaButton = document.querySelectorAll('[data-comma]');
const equalButton = document.querySelector('[data-equals]');
let firstNumber = undefined;
let secondNumber = undefined;
let selectedOperator = undefined;
let operatorSelected = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectNumber(button.innerText);
    })
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
        else{
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
    let answer = undefined;
    switch(selectedOperator){
        case "+":
            answer = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
            break;
        case "-":
            console.log("-");
            break;
        case "*":
            console.log("*");
            break;
        case "=":
            console.log("=");
            break;
    }
    document.getElementById('display_field').innerHTML = answer;
}

function display(){

}