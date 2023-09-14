// let const - block scoped variables
// not hoisting
// camelCase

// Kieu du lieu (primitive/non-primitive)(value types/ reference types)
// string, number, boolean(true/false), null, undefined, object, array, function
// primitive: string, number, boolean, null, undefined
// non-primitive: object, array, function

let name = 'Vuong'
let age = 20
let male = true

// console.log(`My name is ${name}, my age is ${age}, and ${male} my gender is Male`)

//Toán tử

const a = 4
const b = 2

// console.log(a / b)
// console.log(a * b)
// console.log(a + b)
// console.log(a - b)
// console.log(a % b)

const c = '2' //string

// console.log(c - a)
// console.log(c + a)
// console.log(c % a)

// ++ --
let aCong = 4
// console.log(aCong += 2); //6
// console.log(aCong -= 2); //4
// console.log(aCong++); //4
// console.log(aCong--); //5

//Ép kiểu

const d = parseInt('5')
const e = Number('8')

//Toán tử logic > < <= >= == ===

// console.log(b == c) //so sánh giá trị
// console.log(b === c) //so sánh giá trị và kiểu dữ liệu

const aStr = 'abjhjkjkkjhj'
const bStr = 'abjhjk'
// console.log(aStr > bStr)


//Boolean || && !
let aBoo = false
// console.log(!aBoo) //true

let bBoo = 1 > 2 && 2 > 1;
// console.log(bBoo) //false

if (1 > 2 || 2 > 1 || 3 > 4) {
    // console.log('True rồi');
}

//typeof trả về kiểu dữ liệu
// console.log(typeof aBoo);

//Toán tử 3 ngôi - Ternary Operator
//Đúng trả về giá trị sau ? / Sai trả về giá trị sau :

let aTer = 2 > 1 ? 'Đúng rồi đấy' : 'Sai rồi'
// console.log(aTer);


let diemTB = 8;
let diemDatDuoc = 5;

let result = diemTB > diemDatDuoc ? "Truot roi" : "OK"
// console.log(result);

//Vòng lặp for
for (let i = 0; i < 10; i++) {
    // console.log('i: ', i);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++){
        // console.log(`Anh yeu em ${i} lần, với ${j} em`)
    }
}


//forEach và for of trả về từng phần tử của mảng
//for in trả về index của phần tử

const array = ['Duc', 'Vuong', 'Tung', 'Toan', 'Nguyen']

array.forEach(item => {
    // console.log('forEach result', item);
});

for (const item of array) {
    // console.log('forOf result', item);
}

for (const item in array) {
    // console.log('forIn result', item);
}

const hobby = ['reading', 'walking', 'running', 'sleep']
hobby.forEach(function (hobby, index) {
    // console.log(`So thich cua Vuong la ${hobby} với ưu tiên ${index}`);
})

//if/else

let diemKT = 7

if (typeof diemKT != "number") {
    // console.log('Diem khong hop le');
} else if (diemKT>=0 && diemKT<=3) {
    // console.log('Thi lai');
} else if (diemKT > 3 && diemKT <= 7) {
    // console.log('Kha');
} else if (diemKT > 7 && diemKT <= 10) {
    // console.log('Qua mon');
}

let nameA = 'Vuong'
// switch (nameA) {
//     case 'Vuong':
//         console.log('Day la Vuong');
//         break;
//     case 'Duc':
//         console.log('Day la DUc');
//         break;
//     default:
//         console.log('Khong phai ai ca');
//         break;
// }

let day = new Date().getDay();
// switch (day) {
//     case 0:
//         console.log('Chu nhat');
//         break;
//     case 1:
//         console.log('Thu 2');
//         break;
//     case 2:
//         console.log('Thu 3');
//         break;
//     case 3:
//         console.log('Thu 4');
//         break;
//     case 4:
//         console.log('Thu 5');
//         break;
//     case 5:
//         console.log('Thu 6');
//         break;
//     case 6:
//         console.log('Thu 7');
//         break;
//     default:
//         break;
// }
// switch (day) {
//     case 0:
//         console.log('Nghi lam');
//         break;
//     case 1:
//         console.log('lam 2');
//         break;
//     case 2:
//         console.log('lam 3');
//         break;
//     case 3:
//         console.log('lam 4');
//         break;
//     case 4:
//         console.log('lam 5');
//         break;
//     case 5:
//         console.log('lam 6');
//         break;
//     case 6:
//         console.log('Nghi lam');
//         break;
// }


// === Buổi 2: Class ===


// == Định nghĩa: 1 tập hợp các phần tử có cùng thuộc tính

/** Khởi tạo Class = contructor
 class Human {
     constructor() { //Hàm khởi tạo
         this.name = 'Kien'; //this trỏ vào Human
         this.height = 170;
         this.single = false;
         this.work = function () {
             console.log('Im working');
         }
     }
     sleep() {
         console.log('Im sleeping');
     }
     introduce() {
         console.log('Toi la' + this.name + 'Toi cao' + this.height + 'cm');
     }
 } 

 console.log(Human.introduce);

 */



/** 
 class Human {
     constructor(genderParam, animalParam, smartParam, ageParam, pronouceParam) { //Có các tham số
         this.gender = genderParam;
         this.isAnimal = animalParam;
         this.isSmart = smartParam;
         this.age = ageParam;
         this.pronouce = pronouceParam
     }
     introduce() {
         console.log(`Has gender:${this.gender}, isAnimal is ${this.isAnimal}, has avarage age is ${this.age}`);
     }
 }
 
 const me = new Human('Male', true, false, 20, 'he/him');
 
 me.introduce() //Log ra 
 */

/**
 const ori = {
     name: 'Vuong',
     age: 20
 }
 
 
 const cloneOri = JSON.parse(JSON.stringify(ori))
 console.log("cloneOri: ", cloneOri);
 */

// ===function===

/** 
 * Function Declaration

 function myFunction() {
 } 

 * Function expression

 const myFunction2 = myFunction3(){
 
 }
 */


// function sum(a, b) { //default a = 1, b = 2 khi k truyền đối số vào a, b
//     var result = a + b;
//     return result
// }
// console.log(sum(1,2));

//Arrow function
const sum = (a, b) => a + b 
// console.log(sum(3, 4));

//IIFE chạy 1 lần, k thể gọi lại

(function (a, b) {
    console.log(a + b);
})(1, 2);

((a, b) => {
    console.log(a + b);
})(5, 7);


//Callback fn



