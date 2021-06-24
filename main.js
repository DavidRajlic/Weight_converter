const grams = document.querySelector('.grams');
const kilograms = document.querySelector('.kilograms')
const ounces = document.querySelector('.ounces')
const container = document.querySelector('.container-div');
const input = document.querySelector('input');

let g = parseFloat("453.59237");
let kg = parseFloat("0.45359237");
let ounce=parseFloat("16");

input.addEventListener('input', updateValue);

function updateValue(e) {
 grams.textContent = e.target.value*g;
 kilograms.textContent = e.target.value*kg;
 ounces.textContent = e.target.value*ounce;
}

grams.innerHTML = `${grams.textContent}`;
kilograms.innerHTML = `${kilograms.textContent}`;
ounces.innerHTML = `${ounces.textContent}`;
