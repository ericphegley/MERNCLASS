// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil


//You preserve immutability by using methods that do not alter heroes directly. Like filter.
const heroes = [
   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
   { name: 'Batman',         family: 'DC Comics', isEvil: false },
   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//a
let nonEvils = heroes.filter((hero) => hero.isEvil == false)
console.log(nonEvils)
//b
let uniques = new Set(heroes.map((hero) => hero.family))
console.log(uniques)
//c
heroes.map((hero)=>{
        console.log("sir " + hero.name)
})
//d
let marvelGoods = heroes.filter((hero) => hero.family == "Marvel" && !hero.isEvil)
console.log(marvelGoods)
console.log("2-------------------------------------------------------------------------------------2")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one

function multiplyNums(...arr){
    let product = 0
    product = arr.reduce((prevVal, currVal) => {return prevVal * currVal}, 1)
    return product
}
function createArrayAndMultiply(n){
    let result = [];
    for(let i = 1; i<=n; i++){
        result.push(i);
    }

    return multiplyNums.apply(null, result)
}

console.log(createArrayAndMultiply(10))

console.log("3-------------------------------------------------------------------------------------3")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//3. Print the last name through destructuring and add a contact number:9119119110 as well
 const person = {
     userDetails :{
         first: "FirstName",
         last: "LastName"
     }
 }

 let{userDetails : {last, contact=9119119110}} = person

console.log(last)
console.log(contact)

console.log("4-------------------------------------------------------------------------------------4")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//4. Give me an example of const data manipulation
 const person2 = {
    first: "FirstName",
    last: "LastName"

}

person2.first = "eric"
console.log(person2)

console.log("5-------------------------------------------------------------------------------------5")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//5. What is the difference between for-of and for-in show with examples

//in is for keys
const person3 = { name: "Eric", age : 25, city: "Tokyo" }
for(let key in person){
    console.log(key)
}
console.log("of now")
/*cant iterate over person because of is for values.
for(let key of person){
    console.log(key)
}
*/
const nums = [1,2,3,4]
for(let val of nums){
    console.log(val)
}

console.log("6-------------------------------------------------------------------------------------6")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//6. Give me an example of bind and write its usage, comparison with arrow function

//bind gives this to an object, arrow func gets this from surrounding scope
const person4 = {
    first: "FirstName",
    last: "LastName",
    userDetes: function (){
        console.log(`first: ${this.first} last: ${this.last}`)
    }
}

const testPerson4 = person4.userDetes;
testPerson4()
const testPerson4withBind = person4.userDetes.bind(person4);
testPerson4withBind()

//arrow func
var student1 = {
    Name: "Bob", 
    noArrowTest: function(){
        setTimeout(function () {
            console.log("Inner timeout no arrow ", this.Name)
        }, 0)
    },
    arrowTest: function (){
        setTimeout(() => { 
            console.log("Inner timeout with arrow ", this.Name)
        }, 0)
    }
}

student1.noArrowTest()
student1.arrowTest()


console.log("8-------------------------------------------------------------------------------------8")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//8. create an example showing usage of short hand and default param.
let food = "banana"
let drink = "water"
let shirt = "tshirt"
let items = {
    food,
    drink,
    shirt
}

function showItems({ food = "apple", drink = "milk", shirt = "dress "} = {}){
    console.log(`${food} ${drink} ${shirt}`)
}
showItems()
showItems({ food: "orange"})

console.log("9-------------------------------------------------------------------------------------9")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//9. Create two objects with some properties and merge them using Object method and ES6 way
var obj1 = { name: "A", type: "1"}
var obj2 = { drink: "water", color: "red"}
var merged = Object.assign({}, obj1, obj2)
console.log(merged)
var es6Merged = {...obj1, ...obj2}
console.log(es6Merged)

console.log("10-------------------------------------------------------------------------------------10")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let myMap = new Map();

myMap.set("name", "John");
myMap.set(50, "Fifty");
myMap.set(true, "True Value");
myMap.set({}, "Empty Object");
myMap.set(Symbol("sym"), "Symbol Key");

console.log(myMap.get(50))
console.log(myMap)
myMap.delete(true)
console.log(myMap)
myMap.clear()
console.log(myMap)

let mySet = new Set();
mySet.add("ferrari")
mySet.add("mercedes")
mySet.add("honda")
mySet.add("toyota")

console.log(mySet.size)
mySet.delete("honda")
console.log(mySet)
console.log(mySet.has("ford"))
mySet.clear()
console.log(mySet)

console.log("11-------------------------------------------------------------------------------------11")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let promiseObj = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({
            status : "Success",
            code: 200,
            message: "Success!",
            es6Features: {
                destructuring: true,
                shorthand: true,
                merging: true,
                imports: true,
                arrowFuncs: true,
                defaultParams: true,
            }
        })
    }, 2000)

    setTimeout(()=>{
        reject({
            status : "Rejected",
            code: 500,
            message: "Failure"
        })
    }, 3000)
})

promiseObj.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

console.log("12-------------------------------------------------------------------------------------12")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
function multiplyNums(...arr){
    let product = 0
    product = arr.reduce((prevVal, currVal) => {return prevVal * currVal}, 1)
    return product
}
function createArrayAndMultiply(n){
    let result = [];
    for(let i = 1; i<=n; i++){
        result.push(i);
    }

    return multiplyNums(...result)
}

console.log(createArrayAndMultiply(10))

console.log("13-------------------------------------------------------------------------------------13")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//13. Use the question #11 to build promises using async and await - with multithread
function getPromiseObj() {
    return promiseObj
}
async function asyncTest() {
    console.log("first:")
    await getPromiseObj().then((data) => console.log(data))
    console.log("second:")
    await getPromiseObj().then((data) => console.log(data))
}

asyncTest()

console.log("14-------------------------------------------------------------------------------------14")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//14. Create an example of generator function of your choice

function *operations(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));

    yield console.log("Subtraction : " + (num1-num2));
    
    yield console.log("Multiply : " + (num1*num2));
    
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}

let calObj = operations(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())

console.log("15-------------------------------------------------------------------------------------15")
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//15. Explain your knowledge on function and object protoype what is the purpose of the same - example
//prototype is a property of every object and also an object. Instances of objects can inherit methods from the prototype. You can add methods to the prototype and newly
//instantiated objects can now inherit it.

function Shape(name){
    this.name = name
}

Shape.prototype.describe = function() {
    console.log("This is a " + this.name)
}

let shape1 = new Shape("square")
shape1.describe()
let shape2 = new Shape("triangle")
shape2.describe()