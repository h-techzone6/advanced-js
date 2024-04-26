/*

Async Code from main stack will give output and code from the side stack can do processing behind the scene. Synchronize code always move to main stack.

What is Callback ?
callbacks => function()
callback is a function which executes after async code is completed.

When you write async code, you will use Promises, if you get answers , you will use "then"
To avoid using "then", you can use "async" & "await"

*/

function test(){
    fetch(`https://randomuser.me/api/`)
    .then(function (raw){
        return raw.json()
    })
    .then(function (data){
        console.log(data)
    })
}

test()

async function test1(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json()
    console.log(ans)
}

test1()