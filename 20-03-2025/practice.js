// Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favrourite country you wish to visit on world tour

let myMap = new Map();

myMap.set("a", "student1")
myMap.set("b", "student2")
myMap.set("c", "student3")
myMap.set("d", "student4")

console.log(myMap.get("a"))
console.log(myMap.get("b"))
console.log(myMap.get("c"))
console.log(myMap.get("d"))


console.log("--------------")


let myWeakMap = new Map();

let obj = {"name": "eric"}
var func = function(){
    console.log("hello")
}
myWeakMap.set(500, "student5")
myWeakMap.set(obj, "student6")
myWeakMap.set(func, "student7")



console.log(myWeakMap.get(500))
console.log(myWeakMap.get(obj))
console.log(myWeakMap.get(func))

console.log("--------------")
let countries = ["Canada", "Mexico", "Germany", "France", "India", "China", "Spain", "Portugal", "Australia", "Italy"]
console.log(countries)