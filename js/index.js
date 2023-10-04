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

export { name }

const addFunction = (p1, p2) => p1 + p2;
export default addFunction;


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
    for (let j = 0; j < 5; j++) {
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
} else if (diemKT >= 0 && diemKT <= 3) {
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
// const sum = (a, b) => a + b
// console.log(sum(3, 4));

//IIFE chạy 1 lần, k thể gọi lại

// (function (a, b) {
//     console.log(a + b);
// })(1, 2);

// ((a, b) => {
//     console.log(a + b);
// })(5, 7);


//Callback fn

//Tạo 1 class Human có thuộc tính tên tuổi chiều cao số đo ba vòng
// =>tạo hàm kiểm tra tuổi nếu trên > 18 tuổi đủ tuổi đi chơi < 18 k đủ tuổi



// Tạo 1 class Human có thuộc tính tên tuổi chiều cao số đo ba vòng

/**

class Human {
    constructor() {
        this.name = 'Woman'
        this.age = 20
        this.height = 160
        this.bust = 90
        this.waist = 60
        this.hip = 90
    }
}

 */

// Tạo hàm kiểm tra tuổi nếu trên >18 tuổi đủ tuổi đi chơi <18 k đủ tuổi

/**
 
function ageCheck() {
    var girl = new Human();
    var result = girl.age > 18 ? 'Đủ tuổi' : 'Cúc';
    console.log(result);
}

// ageCheck()

 */


// Bài tập: Tính giai thừa của một số
// Viết một hàm tính giai thừa của một số nguyên dương và sử dụng callback để in kết quả.

/**
 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return console.log(n);
 }
 function abc(n,callback) {
    return callback(n);
 }
 abc(5, factorial);
 */

// Ôn Object

/**

class Animal {
    constructor(namePara, speciesPara, agePara) {
        this.name = namePara
        this.species = speciesPara
        this.age = agePara
    }
    overview() {
        console.log(`This is ${this.name}, belongs to ${this.species} and about ${this.age} years old.`);
    }
}

let Cat = new Animal('Cat', 'Mammal', 13)


let date = new Date()
let currentDate = date.getDate()
let currentHour = date.getHours()

let appoinments = {
    date: currentDate,
    time: currentHour,
    location: '35 To Vinh Dien',
    getInformation: function () {
        console.log(`The appoint start at ${this.date} of September, specific in ${this.time} AM, and the location is ${this.location}`);
    }
}

console.log(appoinments.getInformation());

if (appoinments.date == 19) {
    console.log('The appointment is on schedule');
} else {
    console.warn('Delayed');
}

 */


/**
 * bài1
Tính tổng các phần tử trong mảng: Viết một hàm nhận vào một mảng số nguyên và trả về tổng của các phần tử. 

Tìm số lớn nhất và nhỏ nhất: Viết một hàm nhận vào một mảng số nguyên và trả về số lớn nhất và nhỏ nhất.

Đảo ngược mảng: Viết một hàm nhận vào một mảng và trả về mảng đảo ngược.

Tìm các phần tử lặp lại: Viết một hàm nhận vào một mảng và trả về một mảng chứa các phần tử lặp lại.

Tính trung bình cộng: Viết một hàm nhận vào một mảng số nguyên và trả về giá trị trung bình cộng.

bài2
Sắp xếp mảng: Viết một hàm nhận vào một mảng số nguyên và trả về một mảng đã được sắp xếp từ thấp đến cao.

Loại bỏ các phần tử trùng lặp: Viết một hàm nhận vào một mảng và trả về một mảng mới chỉ chứa các phần tử duy nhất.

Tìm số lớn thứ hai: Viết một hàm nhận vào một mảng số nguyên và trả về số lớn thứ hai trong mảng.

Tách mảng thành các mảng con nhỏ: Viết một hàm nhận vào một mảng và một số nguyên n, trả về một mảng gồm n mảng con có kích thước bằng nhau.

Kiểm tra mảng có số nguyên tố hay không: Viết một hàm nhận vào một mảng số nguyên và trả về true nếu mảng chứa ít nhất một số nguyên tố, ngược lại trả về false.
 */

let arr = [2, 4, 8, 1, 6, 5, 6, 7, 3, 8, 9]
let sum = 0

// 3.1: Tính tổng các phần tử trong mảng: Viết một hàm nhận vào một mảng số nguyên và trả về tổng của các phần tử.

console.group('Bài 3');

function total(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log('Tổng các phần tử', sum);
}

total(arr)

// 3.2: Tìm số lớn nhất và nhỏ nhất: Viết một hàm nhận vào một mảng số nguyên và trả về số lớn nhất và nhỏ nhất.

function resultHighAndLow(arr) {
    let highestNumber = arr[0]
    let lowestNumber = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (highestNumber < arr[i]) {
            highestNumber = arr[i]
        }
        if (lowestNumber > arr[i]) {
            lowestNumber = arr[i]
        }
    }

    console.log('Số lớn nhất:', highestNumber);
    console.log('Số nhỏ nhất:', lowestNumber);
}

resultHighAndLow(arr)

//3.3: Đảo ngược mảng: Viết một hàm nhận vào một mảng và trả về mảng đảo ngược.

function reverseArr(arr) {
    let result = arr.reverse() 
    console.log('Array đảo ngược', result); 
}

reverseArr(arr)

//3.4: Tìm các phần tử lặp lại: Viết một hàm nhận vào một mảng và trả về một mảng chứa các phần tử lặp lại.
let repeatedNum = []

function findRepeat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !repeatedNum.includes(arr[i])) {
                repeatedNum.push(arr[i])
            }
        }
    }
    console.log('Tìm phần tử lặp:',repeatedNum);
}

findRepeat(arr)


//3.5: Tính trung bình cộng: Viết một hàm nhận vào một mảng số nguyên và trả về giá trị trung bình cộng.

function arithmeticMean(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    let avarageResult = Math.floor(sum / arr.length)

    console.log('Trung bình cộng:', avarageResult);
}
arithmeticMean(arr)

console.groupEnd()


console.group('Bài 4')

//4.1: Sắp xếp mảng: Viết một hàm nhận vào một mảng số nguyên và trả về một mảng đã được sắp xếp từ thấp đến cao.
let arr2 = [3, 6, 5, 1, 2, 7, 9, 8, 9, 4, 5]
function increaseArr(arr) {
    let result = arr.toSorted()
    console.log('Sắp xếp mảng:', result);
}

increaseArr(arr2)


//4.2: Loại bỏ các phần tử trùng lặp: Viết một hàm nhận vào một mảng và trả về một mảng mới chỉ chứa các phần tử duy nhất.
let nonRepeatedNum = []

function removeRepeat(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isRepeated = false;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated) {
            nonRepeatedNum.push(arr[i]);
        }
    }
    console.log('Mảng không phần tử lặp:', nonRepeatedNum.toSorted())
}

removeRepeat(arr2)


//4.3: Tìm số lớn thứ hai: Viết một hàm nhận vào một mảng số nguyên và trả về số lớn thứ hai trong mảng.

function findHighAndHighest(arr2) {
    let highestNumber = arr2[0]
    let secondHighNumber = arr2[0]

    for (let i = 1; i < arr2.length; i++) {
        if (highestNumber < arr2[i]) {
            secondHighNumber = highestNumber
            highestNumber = arr2[i]
        } else if (arr2[i] > secondHighNumber && arr2[i] !== highestNumber) {
            secondHighNumber = arr2[i]
        }
    }

    console.log('Số lớn nhất:', highestNumber);
    console.log('Số lớn thứ 2:', secondHighNumber);
}

findHighAndHighest(arr2)


//4.4: Tách mảng thành các mảng con nhỏ: Viết một hàm nhận vào một mảng và một số nguyên n, trả về một mảng gồm n mảng con có kích thước bằng nhau.

function splitArr(arr2) {
    let n = 4

}

//4.5: Kiểm tra mảng có số nguyên tố hay không: Viết một hàm nhận vào một mảng số nguyên và trả về true nếu mảng chứa ít nhất một số nguyên tố, ngược lại trả về false.

function checkPrimeNumber(arr2) {
    let result = arr2.filter(function (number) {
        return number > 1
    })
    console.log(result);
}

checkPrimeNumber(arr2)

console.groupEnd()




