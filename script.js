const form = document.querySelector('form');
const apparait = document.querySelector('.apparait');
const disparait = document.querySelector('.disparait');
let divCalc = document.querySelector('.calcula');
let pCalc = document.querySelector('.textCalc');

form.addEventListener('submit', calcul);

function calcul(event){
    event.preventDefault();
    let operator = event.target.operator.value;
    let number1 = event.target.number1.value;
    let number2 = event.target.number2.value;

    if(operator == '+'){
        alert(`${number1} + ${number2} = ${+number1 + +number2}`)
    }
    else if(operator == '-'){
        alert(`${number1} - ${number2} = ${+number1 - +number2}`)
    }
    else if(operator == '*'){
        alert(`${number1} * ${number2} = ${+number1 * +number2}`)
    }
    else if(operator == '/'){
        alert(`${number1} / ${number2} = ${+number1 / +number2}`)
    }
}

apparait.addEventListener('click', show);

function show(event){
    divCalc.style.visibility = 'visible'
}

disparait.addEventListener('click', hide);

function hide(event){
    divCalc.style.visibility = 'hidden'
}

let operator = document.querySelector('#operator');
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

number1.addEventListener ('mouseenter', () => {
    pCalc.textContent = 'Saisir un chiffre';
})

number1.addEventListener ('mouseleave', () => {
    pCalc.textContent = '';
})

number2.addEventListener ('mouseenter', () => {
    pCalc.textContent = 'Saisir un chiffre';
})

number2.addEventListener ('mouseleave', () => {
    pCalc.textContent = '';
})

operator.addEventListener ('mouseenter', () => {
    pCalc.textContent = "Choisissez l'opérateur : + , - , * , /";
})

operator.addEventListener ('mouseleave', () => {
    pCalc.textContent = '';
})