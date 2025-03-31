var obj = {name: "eric", age: 25, food: "pizza"}

for(let key in obj){
    console.log(obj[key])
}

var arr = ["eric", 25, "pizza"]
for(let key of arr){
    console.log(key)
}

function Sum(p1, p2, p3){
    console.log(p3)
    return p1+p2+p3
}

console.log(Sum())

function Multiply(p1=1, p2=2, p3=3){

    return p1*p2*p3
}

console.log(Multiply())