const coding = ["Js", "Python", "Swift", "Ruby", "Java"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (val1) => {
//     console.log(val1)
// })

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values)


// FILTERS

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = mynum.filter( (num) => num > 4)
const newnums = mynum.filter( (num) => {
    // num > 4 => doesnt return directly, scope khul gya
    return num > 4
})
// console.log(newnums)

// MAP
const temp = mynum.map( (num) => num + 10)
// Map Chaining
const temp2 = mynum
        .map( (num) => num * 10)
        .map( (num1) => num1+1)
        .filter( (num) => num > 40)
    
console.log(temp2)