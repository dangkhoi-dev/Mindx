// //1. Template String Literals

// let hello = "Words"

// console.log(`Hello Worldc ${hello}`)

// //2. Function

// const a = 3
// const b = 4
// const sum = (a,b) => {
//     return a+b
// }

// function divide(a, b) {
//     return a/b
// }

// console.log(sum(a,b))
// console.log(divide(a,b))

// // 4. Destructuring operator (...)

// const person1 = {
//     name: 'Peter',
//     Age: 16,
//     _class: "Mindx",
//     Role: "Student"
// }

// const person2 = {...person1}
// person2.School = "MindX"
// // console.log(person2)
// // console.log(person1)

// const {name, Age, _class} = person1
// console.log(name, Age, _class)

// // 3. Module

import {productInfo, greet, sum, sumUpTo, square, isEven, firstElement, stringLength, toUpperCase, max, formatCurrency, repeatString} from "./utils.js";

// console.log(productInfo("Sách", 20000))
// console.log(greet("Khôi"))
// console.log(sum(7, 2, 15, 4, 9, 23, 1,2,5,3,5,1,2,3,5,6,7,8))
// console.log(sumUpTo(5))
// console.log(toUpperCase("javascript"))
// console.log(stringLength("Hello World"))
// console.log(max(10,5,20,8,12,13,123))
console.log(repeatString("Hello", 3))

// Exercise 9
// const user = { name: "Nam", age: 30 };
// const {name, age} = user
// console.log(`Name: ${name}, Age: ${age}`)
