const email = "this"

if(!email){
    console.log("Mil Gya");
}else{
    console.log("Nhi");
}

// // Falsy
// false, 0, -0, (BigInt) 0n, "", null, undefined, NaN

// // Truthy
// baaki saari => "0", "false", " ", [], {}, function(){}

if (email.length === 0){
    console.log("Array Empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object Empty");
}

// Nullish Coalescing Oerator (??): null, undefined

let val1;
// val1 = 5 ?? 10
val1 = undefined ?? 10
// console.log(val1);

// terniary Operator ?
// Condition ? true : false

const icePrice = 10;
icePrice > 10 ? console.log("true") : console.log("false");