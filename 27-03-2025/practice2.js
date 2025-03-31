function printUserInfo(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Failed")
        }, 2000)
        setTimeout(()=>{
            resolve({
                name: "John",
                address: "123 Number St",
                accountNumber: "12345678"
            })
        }, 3000)
    })
}

async function fetchUserInfo(){
    await printUserInfo().then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
    console.log("Here")

}


fetchUserInfo()
console.log("There")


let myMap = new Map();

myMap.set("name", "John Doe");
myMap.set(1, "One");
myMap.set(true, "True Value");
myMap.set({}, "Empty Object");
myMap.set(Symbol("sym"), "Symbol Key");

console.log(myMap.get(1))
console.log(myMap)
myMap.delete(true)
console.log(myMap)
myMap.clear()
console.log(myMap)

let mySet = new Set();
mySet.add("apple")
mySet.add("banana")
mySet.add("orange")
mySet.add("banana")

console.log(mySet.size)
mySet.delete("orange")
console.log(mySet)
console.log(mySet.has("banana"))
mySet.clear()
console.log(mySet)


