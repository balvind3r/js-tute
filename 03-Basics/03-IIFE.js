// IIFE => Immediately invoked Function Expressions (IFFE)
// TO remove pollution from global scope
(function chai(){
    console.log('DB Connected')
})();

// // Error
// ( () => {
//     console.log(`DB 2`)
// })()

// semicolon imp h to end IFFE
( (name) => {
    console.log(`DB 2 ${name}`)
})("Balvinder")