console.log("Execution Starts") //start
 
 setTimeout(function () {
     console.log("First Callback")
 
         setTimeout(function () {
             console.log("Inner Callback")
         }, 0) // after 1 secnd
 }, 3000) //after 1 secnd
 
 
 setTimeout(function () {
     console.log("Second Callback")
 }, 3000) //after 1+2 secnd
 
 
 setTimeout(function () {
     console.log("Third Callback")
 }, 3000) //after 1+2+3 secnd
 
 console.log("Execution Ends")  //last