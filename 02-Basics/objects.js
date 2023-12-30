// // singleton
// ek hi object h 
// constuctor se singleton bnta h

// Object Literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Balvinder",
    "full name": "Balvinder Singh",
    [mySym]: "mykey1",
    age: "20",
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
};

// console.log(typeof JsUser[mySym]); // Use the symbol directly, not as a string
// Object.freeze(JsUser)
// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

