function delayLog(ms){
    setTimeout(function() {
        console.log("Hello after " + ms + " ms")
    }, ms)
}


delayLog(5000)