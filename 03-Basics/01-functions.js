// console.log("H")
// console.log("I")
// console.log("!")

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("!")
}

// sayMyName()

function add(a, b){
    return a+b
}

const res = add(3, 5);
// console.log(res)

function loginUserMessage(username){
    if(!username){
        console.log("Please kucghh do")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    uname: "Balvinder",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.uname} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     uname: "a",
//     price: 300
// })

const newArr = [200, 300, 400]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(newArr))

