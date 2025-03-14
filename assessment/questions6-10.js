//Question 6 call vs apply vs bind

//use call to pass a specific object to use as the "this" for a function. Pass parameters after the object you give
//   .call(<object>,<param1>,<param2>)
//use apply in the same way as call except you can pass the function's parameters in an array.
//   .apply(<object>,[<parameterArray>])
//use bind to set the 'this' for a function permanently. Also the other 2 methods call the function whereas bind returns a new function.


//Question 7

var student1 = {
    Name: "Bob", 
    Age: 20, 
    S1: "DSA", 
    S2: "MERN", 
    S3: "AWS",

    printInfo: function(){
        console.log("Outer: ", this.Name)

        setTimeout(function () {
            console.log("Inner timeout no bind: ", this.Name)
        }, 0)

        setTimeout(function () {
            console.log("Inner timeout with bind: ", this.Name)
        }.bind(this), 0)

        let _this = this;
        setTimeout(function () { 
            console.log("Inner timeout with copied var: ", _this.Name)
        }, 0)

        

    }
}
student1.printInfo();


//Question 8
//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
//Purpose is to create an object with none of the default built-in methods,

console.log("---------------")
var obj = Object.create(null)
obj.name = "John"
obj.age = 30

console.log(obj.name)
console.log(obj.age)
console.log(obj.toString)



//Question 9
//Q9. How do we merge different objects properties using Object class function
var obj1 = { name: "A", type: "1"}
var obj2 = { food: "B", car: "2"}
var obj3 = { house: "C", dog: "3"}
var merged = Object.assign({}, obj1, obj2, obj3)
console.log(merged)
console.log("---------------")


//Question 10
//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
export var dataTest = {
    name: "This is the data name",
    value: 1
}

