// let myDate = new Date()
// console.log(typeof(myDate))
// console.log(myDate.toTimeString())

let newMyDate = new Date(2023, 0, 23, 5, 3)
// let newMyDate = new Date("01-14-2023")
// console.log(newMyDate.toString())

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(newMyDate.getTime())

let newDate = new Date()
console.log(newDate.getDate())

newDate.toLocaleString('default', {
    weekday: "long",
})