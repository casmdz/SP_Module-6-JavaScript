//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
// console.log(typeof person3.shakes);


function getFoods(person) {
    for (let i = 0; i < Object.keys(person).length; i++) {
        if (typeof person[Object.keys(person)[i]][0] === "object") {
            for (let key in person[Object.keys(person)[i]][0]) {
                console.log(`${Object.keys(person)[i]} from ${key}: ${person[Object.keys(person)[i]][0][key]}`)
            }
        } else {
            console.log(`${Object.keys(person)[i]}: ${Object.values(person)[i]}`)
        }
    }
}
getFoods(person3);

// function getFoods(person){
//     for(let i = 0; i < Object.keys(person).length; i++){
//         if (Object.keys(person)[i] === 'object')
//         {
//             for(let key in person[Object.keys(person)[i]][0]) {
//                 console.log(`'FAV' ${key}: ${person[Object.keys(person)[i]][0][key]}`)
//             }
//         } else {
//         console.log(`My fav ${Object.keys(person)[i]}: ${Object.values(person)[i]}`)
//     }
// }
// }







console.log('=======Exercise #2=========');
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person2 {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    // Use an arrow to create the printInfo method
    printInfo = () => {
        return `Name: ${this.first} ${this.last} \n Age: ${this.age}`
    }


    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (this._age + 3 <= 50) {
            this._age = newAge + 3;
        } else {
            this._age = newAge;
        }
    }
};

let p2a = new Person2('Shirley', 'Temple', 30)
console.log(p2a.printInfo())
p2a.age = p2a.age;
console.log(p2a.printInfo());

let p2b = new Person2('Homer', 'Simpson', 44)
console.log(p2b.printInfo())
p2b.age = p2b.age;
console.log(p2b.printInfo());
p2b.age = p2b.age;
console.log(p2b.printInfo());



console.log('=======Exercise #3=========');
// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10) {
            reject(`${str} ... big word`)
        }
        resolve(`${str} ... small number`)
    })
};

// console.log(checkString('small'))
// console.log(checkString('thisiswaytoobigtopass'))

const gettingString = async () => {
    const res = await checkString('tiny')
    console.log(res)
};
gettingString();


checkString('somebody once told me')
.then(result => console.log(result))
.catch(error => console.log(error));

checkString('all star')
.then(result => console.log(result))
.catch(error => console.log(error));