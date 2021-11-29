// map
const array = [3, 5, 6, 7, 2];

const newArray = array.map((element) => element * 3);

console.log(array, newArray);

// często w React!
newArray.map(x => console.log(x));


// reduce
const suma = array.reduce((wynik, element) => wynik += element, 0);
console.log('Suma: ' + suma);

const tab = array.reduce((wynik, element) => {
    wynik.push(element * 5);
    return wynik;
}, []);

console.log(tab);

//filter
const filteredArray = array.filter(x => x > 5);
//find

// spread
const spreadArray = [...array];

//concat
const concatArray = array.concat(4, 5, 6, 7);