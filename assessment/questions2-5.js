//Question 2

var x = "Robert"
console.log(1 + typeof(x))
x = .0266
console.log(2 + typeof(x))
x = false
console.log(3 + typeof(x))
x = {myname: "Test Me"}
console.log(4 + typeof(x))
x = 25166665
console.log(5 + typeof(x))
x = undefined
console.log(6 + typeof(x))
x = true
console.log(7 + typeof(x))
x = "Robert Jr."
console.log(8 + typeof(x))
x = null
console.log(9 + typeof(x))
x = {}
console.log(10 + typeof(x))
x = -32767
console.log(11 + typeof(x))



//Question 3
console.log("------------------------------------")
function showUserInfo(firstname, lastname, age){
    console.log("First: " + firstname + ", Last: " + lastname + ", Age: " + age)
}
showUserInfo("Bob", "Smith", 50)
console.log("------------------------------------")

//Question 4

function doaddition(x, y, z){
    return x + y + z
}
console.log(doaddition(2,3,4))  //sum of 3 Numbers
console.log(doaddition(2))  //other languages might give error for not enough parameters (we gave 1, but function takes 3), but in JS it just makes the not-given parameters undefined
//You cant add a Number and Undefined so the output is NaN, for Not a Number.
console.log(doaddition(2.3,3))  //same reasoning here. We gave 2 parameters, function expects 3.
console.log(doaddition("first", 2, "three"))  //we doing string concatenation here. string plus number plus string.


//Question 5

    //Closure
console.log("------------------------------------")
function appender() {
    var word = ""
    return function () {
        word += "1 "
        return word
    }
}

var append = appender();
console.log(append())
console.log(append())
console.log(append())

//the inner function remembers the value of the outer function's variables after the outer function has completed.
//Each call, it remembers the previous value of word instead of resetting it to "", so it appends to it
console.log("------------------------------------")
    //Hoisting
    //variables are hoisted to the top as undefined. By setting function equal to var, the var will print undefined but the function will error upon callbecause it is undefined
    //if you just declare the function without var keyword, you can call the function without error or undefined
    console.log(Print)
    console.log(Print("Hey"))
    console.log(Log)
    console.log("2")
    console.log(Log("Hello"))


    var Log = function(logged){
        console.log(logged)
    }
    function Print(printed){
        console.log("Printing " + printed)
    }

    //Constructor function
    function ShoppingCart(arr){
        this.products = arr    //declares a products variable under the Shopping Cart
    
        this.displayProducts = displayProducts
        this.addProduct = addProduct
    }

    function displayProducts(){
        //<body here>
    }
    function addProduct(){
        //<body here>
    }

    //now we create a new ShoppingCart with array of choice
    var cart = new ShoppingCart([1,2,3])





