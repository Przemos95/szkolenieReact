// var, let, const
zmiennaVar = 18;
console.log(zmiennaVar);
var zmiennaVar; // windowanie do góry

zmiennaLet = 18;
console.log(zmiennaLet);
let zmiennaLet;

// zasięg zmiennych
function funVar() {
    if (1 > 3) {
        var zmiennaVar2 = 34; // zasięg funkcyjny
    }
    console.log(zmiennaVar2);
} 


function funLet() {
    if (4 >3) {
        let zmiennaLet2 = 23; // zasięg blokowy
    }
    console.log(zmiennaLet2);
}

funVar();
funLet();

var zmienneVarLet = 34;
if (4 > 3) {
    var zmienneVarLet = 25;
}

//const tak samo jak let.

// arrow functions
function f1() {
    console.log('function')
}

const f2 = (text) => {
    console.log('Hello ' + text);
}

f2('world');

const f3 = text => console.log('Hello ' + text);
const result = f3('world');
console.log(result);

const add = (a, b) => a + b;
console.log(add(5, 10));

// Map
const obj = {
    'name': 'Adam',
    'surname': 'Kowalski'
}

const Anna = { name: 'Anna' }
const height = new Map();
height.set('Adam', 180);
height.set(Anna, 175);

for (let element of height.values()) {
    console.log(element);
}

console.log(height.get(Anna));

// Set - zbiór niepowtarzalnych elementów
const zbior = new Set([23, 34, 23]);
console.log(zbior);

// Klasy -> w pliku index.js
// Promise