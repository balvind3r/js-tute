const user = {
    username: "Balvinder",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`)
    }
}

// user.welcomeMessage()

// function teset(){
//     let uname = "me"
//     console.log(this.uname)
// }

// teset()

// Explicit Return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// IMPLICIT RETURN
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// Object return 
const addTwo = (num1, num2) => ({username: "balvinder"})


// console.log(addTwo(3, 4))


// const myArr = [2, 5, 7,3, 8 ]
