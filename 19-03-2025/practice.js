//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

let { FirstName, TotalMarks, Subject: { Physics, Chemistry, Language }, LastName = "Smith", Ecology = 90 } = Student;

console.log(FirstName);  // Stacy
console.log(TotalMarks);  // 75%
console.log(Physics);     // 80
console.log(Chemistry);   // 89
console.log(Language);    // 92
console.log(LastName);    // Smith
console.log(Ecology);     // 90
console.log("--------------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 

let aspirations = ["Learn more", "Get a job", "Make money", "Buy house", "Start family", "Be happy"];

let [goal2024, goal2025, goal2026, ...futureGoals] = aspirations;

console.log(goal2024);   // Learn more
console.log(goal2025);   // Get a job
console.log(goal2026);   // Make money
console.log(futureGoals); // rest
console.log("--------------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

function multiply(a = 0, b = 0, c = 0) {
    return a*b*c;
}

console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 3));    // 0 (since c defaults to 0)
console.log(multiply());        // 0

console.log("--------------------------------------------------------------")
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1, 2, 3, 4, 5];
arr[6] = "newval"; // Adding at the 6th index

console.log("Using for-of loop:");
for (let value of arr) {
    console.log(value);
}

console.log("Using for-in loop:");
for (let index in arr) {
    console.log(index, ":", arr[index]);
}
console.log("--------------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//create an example of const where we can update on property of the object, where it says const is mutable

const person = {
    name: "John",
    age: 25
};

person.age = 30;  // Allowed
// person = { name: "Doe" };  // Error

console.log(person); // { name: "John", age: 30 }
console.log("--------------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

console.log("Using var:");
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 2000);  // Prints 5 five times
}

console.log("Using let:");
for (let j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 2000);  // Prints 0,1,2,3,4
}