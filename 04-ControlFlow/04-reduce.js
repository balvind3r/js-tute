const mynum = [1, 2, 3]

const init = 0;

// const myTotal = mynum.reduce(function(acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`)
//     return acc + curr
// }, 3)

const myTotal = mynum.reduce( (acc, curr) => acc+curr, 3)

console.log(myTotal)