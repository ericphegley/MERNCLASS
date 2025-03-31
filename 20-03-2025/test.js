let Sum = (p1, p2, p3, p4) => p1+p2+p3+p4

let numbers = [1,2,3,4,5,6]

console.log(Sum(...numbers))


let LargeSum = function(...numbers){
    let sum = 0
    sum = numbers.reduce((prevValue, currentVal, index, array)=>{
        console.log("curr: ", currentVal)
        console.log("prev: " +  prevValue)

        console.log("index: ", index)
        console.log("array: " +  array)
        return prevValue + currentVal;
    }, 0)

    console.log(sum)
}

LargeSum(...numbers)

LargeSum.apply(null, numbers)