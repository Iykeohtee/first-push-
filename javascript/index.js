// console.log(54455)
// alert(5455)
// prompt(54455)

// console.log("My name is Earnest")
// console.log("10" + "2")
// console.log(10 + 2)
// console.log(true)
// Earnest
// console.log(null)

// var myName = "var: My name is Earnest and I love coding"
// console.log(myName)
// alert(myName)

// let greeting = "let: Ndewo nwanne mmadu"
// console.log(greeting)
// const greet = "const: Otutu oma"
// console.log(greet)

// let name = prompt("What is your name?")
// console.log("Hello " + name + " my personal person" + "!")

// String concatenation - combining two or more strings together to form a longer word or sentence
// We can achieve using to methods - the + method or the .concat method 

// vs code 
const firstName = "Oti"
// const secondName = "Ikechukwu"         
// const lastName = "Gideonnn"
// const fullName  = firstName.concat(secondName, thirdName)
// const num = 493327778
// const num2 = 4334323
// const empty = " "

// console.log(lastName.indexOf("n")) // used the alphabet to find the index
// console.log(lastName[3])   // used the index  to find the alphabet  


// const fullName = firstName + secondName + lastName
// console.log(fullName)   
// .concat()
// firstName.concat(secondName, lastName)   
// console.log(firstName.concat(secondName, " ", lastName," ", num, " ", num2))  

// const fisrtLetter = swcondName[4]


// String length and slicing

// string length for getting the length of a string
// console.log(firstName.length)   

// string slice for cutting out some part of the string to form a new string 
// it takes majorly two parameters : where the string should start and where the string should end
// console.log(secondName.slice(0, -5)) 
// console.log(secondName.slice(1, 4))   
// Technology - output only the nolo 
// check when slice have only one value i.e .slice(1) 
// and also check when it has a negative number i.e .slice(1, -4)

// String template literals
// A function in Javascript used for combining a string and a variable 
// Symbolized using a backtick, ``
// const promm = prompt("What is your name")
// console.log(`My name is ${promm}`);     
// const myAge = 50982
// console.log(`My age is: ${myAge}`)       

// const askUser = prompt("What is your age")
// console.log(`your age is ${askUser}`)



// Arithmetic operations 
// Addition(+)
// Subtraction(-)
// Multiplication(*)
// Division(/)
// Exponential(**)
// console.log(3**9) 
// MOdulus(%) - the raminder of a division operation
// const nuuu = 1    
// console.log(nuuu) 



// Increment(++)
// let n = 4
// console.log(n)   
// n+=3
// console.log(n)     


// Decrement(--)
// let nn = 4
// nn-=5
// console.log(nn) 


// Random Number and Math Objects 
// How to generate random numbers in Javascript 
// console.log(Math.ceil(Math.random()))     

// Math.floor(); // converts it to the nearest lowest whole number
// Math.ceil(); // converts to the nearest highest whole number  
// console.log(Math.ceil(Math.random() * 100))    



// Decision making in Javascript(if, else, else if)

// const condition = 21
// if(condition <= 4) {
//     console.log("N is not a number")  
// }
// else if(condition > 4 && condition < 14){
//     console.log("N is a number less than 14")
// }
// else if(condition > 14 && condition < 18){
//     console.log("N is a number less than 18")
// }
// else{
//     console.log("Do what ever you want to do") 
// }


// Conditonal Ternary 
// condition > 4 ? "N is a Number" : "N is not a number"   


// const aler = Math.floor(Math.random() * 1000000)
// alert(aler)     

// const promm = prompt("Input random number")

// if(promm == aler){
//     console.log("Log in successful")
// }
// else(
//     console.log("Sorry you do not have access to this website")   
// )

const a = 1
    b = 2
    c = 3

console.log((a==3 || b!==3 || c==2) ? `One is correct` : `One is wrong`)
console.log((a==1 && b==2 && c==3) ? `One is correct` : `One is wrong`)

const arr = [`Me`, `My`, `Mine`]     
console.log(arr[0])
let brr = `abcdef`

console.log(brr[(0)])
console.log(brr.charAt(3))

// const p = window.alert(Math.ceil(Math.random()*1000000))
// let q = window.prompt(`What is your passcode?`)
// console.log((`${q}` == p) ? `You've successfully logged in!` : `Incorrect passcode!`)

// const gif = prompt(`What is your name?`)
// console.log(`${gif}`)

// let month1 = window.prompt("What is")

const grr = ["Philip", "John", "Daniel"]
grr[1] = "Ben"
console.log(grr)

let f = 123
let s = 11
console.log(typeof s)

let chai = 1
console.log(chai)

let chim = {
    make: "Cyber truck",
    model: "2020 model"
}
console.log(chim)

const earnest = {
    name: "Earnest Jarlath",
    age: 32,
    address: "Imo State",
    adult: true
}
console.log(earnest.name)
console.log(earnest.age)
console.log(earnest.address)

console.log(
    (earnest.adult)? "Earnest is an adult" : "Earnest is not an adult"
)
earnest.name = "Steven"
console.log(earnest.name)
console.log(earnest)

const cars = {
    car1 : {
        make: "Cyber truck",
        model: "2020 model",
        speed: "290km/h"
    },
    car2 : {
        make: "Audi V5",
        model: "2024 model",
        speed: "390km/h"
    },
    car3 : {
        make: "Venza truck",
        model: "2010 model",
        speed: "250km/h"
    },
    car4 : {
        make: "Bugati",
        model: "2017 model",
        speed: "280km/h"
    }
}
console.log(cars)

console.log(cars.car1.make)
console.log(cars.car2.make)
console.log(cars.car3.make)
console.log(cars.car4.make)

// let becky = 

let beb = [
    car1 = {
        make: "Cyber truck",
        model: "2020 model",
        speed: "290km/h"
    },
    car2 = {
        make: "Audi V5",
        model: "2024 model",
        speed: "390km/h"
    }
]
console.log(beb[0].make)

for (let e = 0; e < 5; e++){
    console.log("e")
}

// let i = 2
// while (1 < 20){
//     console.log(i);
//     i++;
// }

function addNumber() {
    console.log(3 + 5)
}

const endgame = document.getElementById("endGame")
const endgame2 = document.getElementById("endGame2")
const endgame3 = document.getElementById("endGame3")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

function addNumbers(a, b){
    endgame.textContent = a
    endgame2.textContent = b
    endgame3.textContent = a + b
    console.log(a + b)
}

function subtractNumbers(a, b){
    console.log(a - b)   
}

btn1.addEventListener("click", function(){
    addNumbers(2, 4)
})

function createNumber(cal) {
    console.log("Hello") 
    return cal();
}

function anotherFunction () {    
    console.log("We are learming")
}

createNumber(anotherFunction)   

// function returnKey() {
//     return "Hello"
// }

// endgame.textContent = returnKey();
// console.log(returnKey())


// Variable scope in Javascript 
const variablee = "hello"

function greetName() {  
let time = 12
if(time<=12){
    var timee2 = 23
    console.log(timee2)
}else{
    console.log(timee2 + 1)  
    console.log("No greet")
}

console.log(timee2)
}

greetName();

// console.log(greetName())
// alert(greetName())
// btn2.textContent = greetName();



// Arrow function 
const fnxName = () => console.log("Arrow function")

fnxName();
// Implicit return in Arrow functions


const classes = [ 
     {name: "Joy", desc: "She is.."},
     {name: "Joy", desc: "She is.."},
     {name: "Joy", desc: "She is.."},
     {name: "Joy", desc: "She is.."},
     {name: "Joy", desc: "She is.."},
     {name: "Joy", desc: "She is.."},
    ]


// Recursive functions in Javascript: a function that calls itself 

// function classs(a){   
    
    // Base condition/state
    // if(a <= 0){
    //     console.log("Done")
    //     return; 
    // }
    //recursive condition/state
//     console.log(a)
//     classs(a - 2)    
// }
// classs(7);

// using recursive function to calculate the sum an array
const someArray = [ 2, 4, 5, 6, 9]

function sumOfArray(n){
   if(n.length === 0){
    console.log("Hurray!!")   
    return 0;
   }
     
 
   console.log(n)
   return n[0] + sumOfArray(n.slice(1))     
    
}

console.log(sumOfArray(someArray))      

// Methods in Javascript: functions that exist inside of an object and are properties of that object. They are used to perform actions specific to that object

const price = { 
    name: "Helo",
    
    sayHello: function hello(){ 
        console.log("Say Hello")     
    }

}
price.sayHello();



// ForEach method: a javascript function that iterates over an array and execute a provided function on each of the element. It doesn't modify the array 

// array.forEach(fucntion(element, index, array) {
//    code to run on each element 
// })


// fruits.forEach(function(elem, dex, ray){  
    //     console.log(`${elem} is at index of ${dex} in the ${ray} array`)    
    // console.log(dex)
    // console.log(ray)     
    // mango is at the index of 0 inside the .... arry
    // })
    
    // const numbers = [1, 2, 3, 4, 5];
    
    // numbers.forEach(function(number) {
        //     console.log(number);
        // });
        
        const products = [
            { name: "Laptop", price: 1000 },
            { name: "Phone", price: 600 },
            { name: "Tablet", price: 400 }
        ];
        
        // laptop price is 1000 but the discounted price is 1000 * 0.5
        
        products.forEach(function(eachItem){
            eachItem.disCountedPrice = eachItem.price * 0.5
            console.log(`the price for ${eachItem.name} is ${eachItem.price} but the discounted price is ${eachItem.disCountedPrice}`)
        })      
        
        
        
        // map function
        
        // map method: a javascript function that iterates over an array and execute a provided function on each of the element. It doesn't modify the array 
        
        const fruits = [ "mango", "Orange", "Pineapple", "indomie", "Watermelonm", ]


   const frut =  fruits.map(function(element, dex, ray){   
        return element;  
    })
    
    console.log(frut);
    console.log(fruits)
        

        
        
        
        
        const people = [ 
            {name: "Joy", desc: "She is this"},
            {name: "Jo", desc: "She is that"},
            {name: "Peace", desc: "She is.."},
            {name: "Max", desc: "She is.."},
            {name: "Joy", desc: "She is okay"},
            {name: "Joy", desc: "She is not okay"},
        ]
        people.map((element, index, array) => {
            console.log(element.name)
        })
        
// find function
// an array function that checks for first element that satisfies a condition

// const fin = num.find(function(element, index, array){
    //     return element > 5
    // })
    // console.log(fin)  
    
    // filter function 
    // an array function that checks for all the element that satisfies a condition
    
    // const ask = prompt("Search for name")
    // const fil = people.filter(function(elem){
        //     if(ask === elem.name){
            //         // return elem.desc 
            //         console.log(elem.desc)
            //     }
            // })
            // console.log(fil) 
            
            // Array destructuring
            const vehicles = ['mustang', 'f-150', 'expedition'];

            // Old way
            // console.log(vehicles[0])
            // console.log(vehicles[1])
            // console.log(vehicles[2])
            // end of old way

            // Destructuring
            const [ aa , bb, cc ] = vehicles  
            console.log(aa)   
            console.log(cc)
            
            // object destructuring
            const pep = {
                name: "Joy", 
                desc: "She is not okay"
            }
            const { name, desc } = pep
            console.log(name)  
            console.log(desc)  
            
            const user = {
                id: 1,
                profile: {
                  username: "johndoe",
                  location: "New York"
                }
              };   
            
            // Spread in objects, array literal and function calls
            // const num = [ 2, 6, 5, 3, 7, 10]    
            // const num2 = [ 4, 5, 12, 45]    
            // console.log(...num, ...num2)   

// Rest Params
// function para(...re){
//     console.log(...re)
// }
// para(2, 5, 6, 5, 84, 38)



// Destructuring params : parameters

// without desteucturing
function greet(user){
    console.log(`Hello ${user.name} your age is ${user.age}`)
}
const use = greet({ name: "Vivian", age: 20 })
console.log(use) 

// with destructuring
// function greet2({ name, age }){
//     return `Hello ${name} your age is ${age}`
// }

// const use2 = greet2({ name: "Vicky", age: 30})     
// console.log(use2)


// Dafault params 
function greet2(nam ="Vicky", age = 30){
    return `Hello ${nam} your age is ${age}`
}

console.log(greet2())      

// Reduce function: a javascript method that iterates through each element in an array and applies a callback function, accumulating  a single output, mostly used for summing array, flattening array etc.
// 
const red = [ 2, 4, 5, 7]

const red2 = red.reduce(function( acc, currenValue, index, array){  
    return acc * currenValue  
}, 5)     

console.log(red2)



// To initialize an empty repository in your project i.e to start tracking your code use "git init"
// git add index.html
// git commit -m "commit message"