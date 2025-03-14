//use the same student object we had for call and apply and try adding them in setTimout of Student Obect with function
// similar to above User.printInfo
// we need to check after 2 second timeout how it returns the value
// then fix the same by a copied variable and using bind and see the difference in light of scrope and bind (as above)


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
        }, 2000)

        setTimeout(function () {
            console.log("Inner timeout with bind: ", this.Name)
        }.bind(this), 2000)

        let _this = this;
        setTimeout(function () { 
            console.log("Inner timeout with copied var: ", _this.Name)
        }, 2000)

        this.Name = "John"

    }
}
student1.printInfo();




