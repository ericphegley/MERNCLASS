


let studentLogin = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({
            status : "Success",
            code: 200,
            message: "Success!",
            student: {
                id: 111,
                name: "John Doe",
                course: "Computer Science"
            }
        })
    }, 3000)

    setTimeout(()=>{
        reject({
            status : "Rejected",
            code: 500,
            message: "Failure"
        })
    }, 4000)
})

studentLogin.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})



//create promise of four concurrent sessions of a day and try to resolve and reject them



let session1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            status : "Resolved",
            code: 200,
            message: "X1"
        })
    }, 2000)
})
let session2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            status : "Resolved",
            code: 200,
            message: "X2"
        })
    }, 3000)
})
let session3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            status : "Resolved",
            code: 200,
            message: "X3"
        })
    }, 4000)
})
let session4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            status : "Resolved",
            code: 200,
            message: "X4"
        })
    }, 1000)
})

Promise.all([session1, session2, session3, session4]).then((data)=>{
    console.log(data);
})

Promise.allSettled([session1, session2, session3, session4]).then((data)=>{
    console.log(data);
})