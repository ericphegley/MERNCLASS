//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

let vaccines = ["COVID", "Influenza", "Sickness X", "Sickness Y"]

console.log(...vaccines)

let Doctor = {
    Name: "John",
    Age: 40,
    Experience: 9,
    Degree: "Masters",
}


console.log({...Doctor})

let Vaccine = {
    Name: "Influenza",
    NumDoses: 3,
    Price: 10,
}

let merged = {...Doctor, ...Vaccine}
console.log(merged)

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

function createArray(start, end){
    let result = [];
    for(let i = start; i<=end; i++){
        result.push(i);
    }
    return result;
}

const arr = createArray(100, 150);

function largesum(...arr){
    let sum = 0
    sum = arr.reduce((prevVal, currVal) => {return prevVal + currVal}, 0)
    return sum
}

console.log(largesum(...arr))
// Task - create a class named as account accepting 3 ormore params  like - name, acct type etc and
// has three methods to show balance, user details and account offers

//try wiriting your favourite quotes on life lessons or from tech experts
// in expression you need to write the expert name or reference

class Account {
    constructor(name, acctype, age, balance){
        this.name = name
        this.acctype = acctype
        this.age = age
        this.balance = balance
    }

    ShowBalance = ()=>console.log(this.balance)
    ShowDetails = ()=>console.log(this.name + " " + this.acctype + " " + this.age + " " + this.balance)
}

let accountObj = new Account("bank", "checking", 5, 5000)
console.log(accountObj.ShowDetails())



