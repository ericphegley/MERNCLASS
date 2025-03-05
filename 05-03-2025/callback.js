//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day

function callbackMsg(accountInfo){
    console.log(`Account info: ${accountInfo}`)
}
function Account() {
    var userName = "1234"
    var password = "5678"
    var fullname = "John Smith"
    var level = 5

    var PrintAccountDetails = function (user, pass, callback){
        if(userName == user && password == pass){
            var details = `Username ${userName} has full name ${fullname} and is level ${level}`
            callback(details)
        }
        else{
            callback("Invalid login credentials")
        }
    }

    return PrintAccountDetails
}

var accountData1 = Account()
accountData1("1234", "5678", callbackMsg)
accountData1("0000", "1234", callbackMsg)
