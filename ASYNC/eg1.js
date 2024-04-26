//  What is anync ?
//  Sometimes our final code is dependent on another server and ,in the case, we don't know when the answer from the server is coming. So, we cannot write sync code here. To get rid of sync code, we write async code. In async code, we don't know when the answer from code will come. E.g. Show the photo after reteriving from facebook.

console.log('Hey1')
setTimeout(function(){
    console.log('Hey2')
},2000)

console.log("Hello1")
console.log("Hello2")
setTimeout(() => {
    console.log("Hello3")
}, 0);
console.log("Hello4")


