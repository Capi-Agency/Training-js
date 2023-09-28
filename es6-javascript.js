// Import
import {name} from './index.js'
console.log(name);

import addFunction from "./index.js";

console.log(addFunction(2,6 ));


//Arrow Function

// var multiply = (p1, p2) => {
//     const result = `Kết quả của phép cộng ${p1} và ${p2} là: ${p1 + p2}`
//     console.log(result);
// }

// multiply(2,8)


//Array Destructuring
let hobby = [
    "Sleep",
    "Study",
    "Work",
    {
        name: "Vuong",
        age: 20,
        address: "Ha Noi"
    }
]

let [a, b, c] = hobby

// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("childHobby:", childHobby);

// Object destructuring assignment
// let person = {
//     name: "Vuong",
//     age: 20,
//     address: "Ha Noi"
// }

//Rest Parameter
// let { age, ...otherDescription } = person

// console.log("age:", age);
// console.log("otherDescription:", otherDescription );


let products = [
    {
        id: 1,
        name: "Product A",
        price: 200,
        image: "https://picsum.photos/200/300.jpg",
        address: "Ha Noi, Viet Nam"
    },
    {
        id: 2,
        name: "Product B",
        price: 200,
        image: "https://picsum.photos/200/300.jpg",
        address: "Binh Duong, Viet Nam"
    },
    {
        id: 3,
        name: "Product C",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
        address: "Binh Duong, Viet Nam"
    },
    {
        id: 4,
        name: "Product D",
        price: 200,
        image: "https://picsum.photos/200/300.jpg",
        address: "Binh Duong, Viet Nam"
    }
]

let [product1, product2, ...otherProduct] = products

let { address } = product1


console.log("product1:", product1);
console.log("address of product1:", address);
console.log("product2:", product2);
console.log("otherProduct:", otherProduct);

//Rest Parameter thêm cặp key:value mới vào object
let person = {
    name: "Vuong",
    age: 20,
    address: "Ha Noi"
}

person = { ...person, study: "Design" }
console.log(person);


// Hợp nhất nhiều mảng
let abc = ["a", "b", "c"]
let def = ["d", "e", "f"]
let alphabet = [...abc, ...def]
console.log(alphabet);