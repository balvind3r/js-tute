// // const { log } = require("console");
// // const { setTimeout } = require("timers/promises");

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network calls
    
//     setTimeout(() => {
//         console.log("Async task complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise(function(resolve, reject){
    
//     // setTimeout(function(){
//     //     console.log('Async task 2');
//     //     resolve()
//     // }, 1000)
    
//     setTimeout(() => {
//         console.log("Async 2");
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log("Async 2 compete")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username: 'Balvinder', email: "test@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let err = false
        if(!err){
            resolve({username: 'Balvinder', pwd: '123'});
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// promiseFour.then().catch()
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('kuchh to hua h vai...'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let err = true
        if(!err){
            resolve({username: 'Js', pwd: '123'});
        }else{
            reject('ERROR: Js went wrong')
        }
    }, 1000);
})

async function conumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

conumePromiseFive()
// console.log(uname);

// setTimeout(() => {
//     console.log("Async task complete");
// }, 1000);

