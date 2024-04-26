/* 

Promise is a good way to handle asynchronous operations. It is used to find out if the asychronous operation is successfully completed or not.

A promise has three states.
Pending
Fullfilled
Rejected

Creating a promise

Promise() constructor is used to create a promise
Promise() constructor takes a function as an argument.
The function also accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called.

And if and error occurs, the reject() function is called.

/Using a promise
then() method
then() method is used with the callback when the promise is successfully fullfilled or resolved.

catch() method
catch() method is used with the callback when the promise is rejected or if an error occurs.

finally() method
finally() method gets executed when the promise is either resolved successfully or rejected
*/

// const ticket = new Promise(function(resolve,reject){
//   const isBoarded = false;
//   if(isBoarded){
//     resolve("You are not in the flight")
//   } else {
//     reject("Your flight is cancalled")
//   }
// })
// ticket.then((data)=>{
//   console.log('data',data)
// }).catch((data)=>{
//   console.log('error',data)
// }).finally(()=>{
//   console.log('I wil always be executed')
// })

//the above process is synchronous

// Adding data in resolve method
// const promiseOne = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({username:"TechZone",email:"tz@gmail.com"})
//   },100)
// })

// promiseOne.then(function(data){
//   console.log(data)
// })

// Another example of Promise
// user will ask for a number between 0 and 9. If the number is below 5 resolve, if not rejected

var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random() * 10)

    if(n<5){
        console.log(n)
        return res()
    }
    else{
        console.log(n)
        return rej()
    }
})

ans.then(function(){
    console.log("Below")
})
.catch(function(){
    console.log("Above")
})