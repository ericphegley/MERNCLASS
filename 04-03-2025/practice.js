//create and example of overloading where you can attend 3 sessions on a day and 4 sessions on another
//print name of the sessions

var Schedule = function(s1, s2, s3){
    return `Attended: ${s1}, ${s2}, ${s3}`
}

var Schedule = function(s1, s2, s3, s4){
    return `Attended: ${s1}, ${s2}, ${s3}, ${s4} `
}

console.log(Schedule("DSA", "MERN", "Spring"))


// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another


//INHERITANCE AND OVERRIDE
var Person = {
    First: "John",
    Last: "Smith",
    Role: "Teacher",

    getPersonDetails : function (){
        return `First Name is ${this.First}
                Last Name is ${this.Last}
                Role is ${this.Role}`
    }
}
var Student1 = Object.create(Person) 
Student1.First = "Eric"

console.log(Student1.getPersonDetails())
console.log(Person.getPersonDetails())

var Student2 = new Object(Person)
Student2.First = "Bob"

console.log(Student2.getPersonDetails())
console.log(Person.getPersonDetails())




//-- //OBJECT MERGING
var obj1 = { name: "A", type: "1"}
var obj2 = { food: "B", car: "2"}
var obj3 = { house: "C", dog: "3"}
var merged = Object.assign({}, obj1, obj2, obj3)
console.log(merged)
//--

//-- FUNCTION CLOSURE 
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
//--

//-- SHARE OBJECTS BETWEEN 2 FILES
export var dataTest = {
    name: "This is the data name",
    value: 1
}

//--

