class Person {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        Person.peopleCount++;
    }
    
    age() {
        return (new Date()).getFullYear() - this.yearOfBirth;
    };
    
    static peopleCount = 0; // pole/funkcja statyczna - odwołują się do
    // klasy, nie do konkretnego obiektu: [nazwa klasy].[nazwa pola/funkcji]
    static howManyPeople = () => {
        console.log(this.surname); // nie uda się, metoda statyczna 
        // nie ma dostępu do właściwości konkretnego obiektu
        console.log(Person.peopleCount);
    };
    
}

const c1 = new Person('Jan', 'Kowalski', 1990);
console.log(c1.age());
Person.howManyPeople();

class Employee extends Person {
    constructor(name, surname, yearOfBirth, position) {
        super(name, surname, yearOfBirth); // bardzo ważne
        this.position = position;
    }
}

const e1 = new Employee('Adam', 'Nowak', 1990, 'Sales person');
const e2 = new Employee('IT Manager');

//
class Property {
    constructor(address, price, space) {
        this.address = address;
        this.price = price;
        this.space = space;
    }

    calcPricePerM2 = () => this.price / this.space
};

class House extends Property {
    constructor(address, price, space, levels) {
        super(address, price, space);
        this.levels = levels;
    }
}

const h1 = new House('Długa 4', 10000, 50, 2);
Object.freeze(h1);
h1.price = 35;
console.log(h1.calcPricePerM2())