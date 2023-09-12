// let const - block scoped variables
// not hoisting
// camelCase
let name; // Không bắt buộc gán giá trị khởi tạo | Có thể gán lại giá trị
const name2 = ""; //Bắt buộc gán giá trị khởi tạo | Không thể gán lại giá trị
// console.log(name);

// Kieu du lieu (primitive/non-primitive)(value types/ reference types)
// string, number, boolean(true/false), null, undefined, object, array, function
// primitive: string, number, boolean, null, undefined
// non-primitive: object, array, function

//======================Toán tử======================

// * / + - % += -= *= /= ++a a++ --a a--
// Phép cộng >> convert kiểu number về string sau đó sẽ nối như 2 string
// Các phép tính khác sẽ ép kiểu string về number rồi tính toán

// Các cách ép kiểu string về number: parseInt(a), parseFloat(a), Number(a)

// console.log(a / b); //2
// console.log(a * b); //8
// console.log(a + b); //6
// console.log(a - b); //2
// console.log(a % b); //0
let a1 = 1;

// a++ trả về giá trị của a, sau đó gán lại cho a = a + 1
// ++a trả về trực tiếp a + 1
console.log("a1: ", ++a1);

// ================Toán tử logic====================

// >, <, <=, >=, ==, ===
// == so sánh giá trị
// === so sánh giá trị và kiểu

// Boolean logic :  ||(OR)  &&(AND)    !(NOT)

let a = 1 > 2 && 2 > 1;
console.log(typeof a);
if (1 > 2 || 2 > 1 || 3 > 4) {
	console.log("Hello world");
}
// typeof a =>> kiểu dữ liệu của biến a

// toán tử 3 ngôi (ternary operators)
// Nếu điều kiện đúng, trả về giá trị thứ nhất, ngược lại trả về giá trị thứ 2

let diemTB = 8;
let diemDatDuoc = 5;
let isLogin = true;

let result = diemDatDuoc > diemTB ? "Pass roi" : "chua Pass";

// ================Vòng lặp (Loop)====================
// //For
// for (let i = 2; i < 10; i++) {
// 	for (let j = 2; j < 10; j++) {
// 		console.log(`${i}*${j}=${i * j}`);
// 	}
// }
// forEach,for of trả về từng phần tử của mảng sau mỗi vòng lặp
// for in: trả về index của phần tử
const array = ["Duc", "Tung", "Nguyen", "Vuong", "Toan"];

array.forEach(function (item, index) {
	console.log("forEach item", item);
	console.log("forEach index", index);
});
console.log("==========");
for (let item in array) {
	console.log("forIn result", item);
}
console.log("==========");
for (let item of array) {
	console.log("forOf result", item);
}

// if/else statement
const diemKtra = 8;
// 5, 5-7.5 kha, 7.5 - 9 gioi, 9 - 10 xuat sac;

// if (diemKtra == 1) {
// 	console.log("step 1");
// } else if (dieuKien2 && dieu 5) {
// 	console.log("step 2");
// } else if (dieuKien3) {
// 	console.log("step 3");
// } else {
// 	console.log("final step");
// }
let name3 = "Tung";

const day = new Date().getDay();
if (day == 1 || day == 2 || day == 3) {
	console.log("dau tuan`");
}

switch (day) {
	case 1:
	case 2:
	case 3:
		console.log("ngay lv");
		break;
}
