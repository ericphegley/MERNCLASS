//1. variable declaration
var x = 5   //entire function can use this
let y = 2   //only block {} which y was declared in can use this

//2. functions can take parameters in to evaluate or perform function on

function add(x, y){
    console.log(x + y)
}
    //call function later, as of now we have only declared it
add(x, y)   //this is using the x and y we declared in lines 1 and 2, and the function add is printing their sum

//3. data types examples
var a = "yes"  //string
var b = 5 // Number
var c = true  //boolean (true or false)
var d = null   //no value
var e = [1, 2, "yes", false] //array (collection of values of any data type)

//4. objects are a  little differnet because they have fields with key-value entries
var f = {name: "letter", num: 5, cool: false}


//5. mathematical operators
    //already used one above, +
console.log(5 + 2)   //addition
console.log(5 - 2)   //subtraction
console.log(5 * 2)   //multiplication
console.log(5 / 2)   //division


//6. comparison operators and if statements
if(5 > 2){ //GT, also have >= greater than or equal to
    console.log(5 + "Greater than" + 2)
}
if(1 < 2){ //LT, also have <= less than or equal to
    console.log(1 + "Less than" + 2)
}
if(true && true){ //AND
    console.log("True and true")
}
if(true || false){ //OR
    console.log("True or false")
}
if(!false){ //NOT
    console.log("Not false = true")
}
//single = assigns variables
//double == compares value of variables
//triple === compares value AND data type of variables
//can use != to combine NOT and EQUALS, NOT EQUALS

