//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// const create_question1 = (k, v) => {
//     const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${k}"> ${v} </a>`;
//     document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
// }

// const load_data = async() => {
//     const rangers = await question1();

//     rangers.forEach(element => create_list(element.k, element.v))
// }

// const clear_data = () => {
//     document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
// }


function findFoods() {
    //Your code goes here
    //My code
    for (const [k, v] of Object.entries(person3)){
        console.log(`Favorite Food of type ${k} is  ${v}.`);
    }
    
}

// console.log(person3.ice_cream[0]);
// console.log(findFoods.person3.shakes[0].culvers[1]);
console.log(findFoods())

function findFoods2() {
    //Your code goes here
    //My code
    for (const [k, v] of Object.entries(person3)){
        console.log(k, v);
    }
    // for (let food in this.container) {
    //     callback(food, this.container[food]);
    //    }
    
}

console.log(findFoods2())



// Option 3
    

    
var foods = Object.keys(person3).map(
    (key) => { return [key, person3[key]] });

// Step - 2
// Sort the array based on the second element (i.e. the value)
foods.sort(
    (first, second) => { return first[1] - second[1] }
);

// Step - 3
// Obtain the list of keys in sorted order of the values.
var keys = foods.map(
    (e) => { return `${e[0]}: ${e[1]}` });
    


console.log(keys);
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


//Object prototype defining Person



function Person(fName, lName, newAge){
    
    this.firstName = fName;
    this.lastName = lName;
    this.age = newAge;


    this.printInfo = () =>{
        console.log(`The person's name is: ${this.firstName} ${this.lastName}. They are ${this.age} years old.`)
        
    
    
    this.add_age = () => {
        let newAge = this.age;
        const newAgeInc = newAge++;
        while (newAge <= 50){
        console.log(`${fName}'s new age is:  ${newAge}`)
        newAge += 1
        } 
    }
    }   
}

const person1 = new Person("Sally", "Singleton", 43);
const person2 = new Person("Donnie", "Donnieson", 35);


console.log(person1.printInfo());
console.log(person2.printInfo());
person1.add_age();
person2.add_age();


    // Create our Person Prototype



//     // Use an arrow to create the printInfo method
//     console.log(name);let printInfo = () => console.log(name);

//     // Create another arrow function for the addAge method that takes a single parameter
//     // Adding to the age 

//     let addAge = (age) => console.log(age + 1);

// }
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let stringLength = "This is the sentence."
// let stringLength = "Lil sent."
const funcPromise = ()=> {
    return new Promise((resolve, reject) => {
    if (stringLength.length > 10){
        resolve(`The long sentence: ${stringLength} => Big Word`); 
    } else {
        reject(`The short sentence: ${stringLength} => Small Number`); 
    }
     
})

}

console.log(funcPromise())
