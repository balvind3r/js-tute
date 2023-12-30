// const tinderUser = new Object() => Singleton Object
const tinderUser = {} // Non singleton Object

tinderUser.id = "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Balvinder",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) // (target, sources)
// console.log(obj3)

// const obj3 = {...obj1, ...obj2};
// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Balvinder"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
console.log(Instructor)


// {
//     name: "Balvinder",
//     coursename: "Js",
//     price: "0"
// }