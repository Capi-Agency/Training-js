// let const - block scoped variables
// not hoisting
// camelCase
// let name; // Không bắt buộc gán giá trị khởi tạo | Có thể gán lại giá trị
// const name2 = ""; //Bắt buộc gán giá trị khởi tạo | Không thể gán lại giá trị
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
// let a1 = 1;

// a++ trả về giá trị của a, sau đó gán lại cho a = a + 1
// ++a trả về trực tiếp a + 1
// console.log("a1: ", ++a1);

// ================Toán tử logic====================

// >, <, <=, >=, ==, ===
// == so sánh giá trị
// === so sánh giá trị và kiểu

// Boolean logic :  ||(OR)  &&(AND)    !(NOT)

// let a = 1 > 2 && 2 > 1;
// console.log(typeof a);
// if (1 > 2 || 2 > 1 || 3 > 4) {
// 	console.log("Hello world");
// }
// typeof a =>> kiểu dữ liệu của biến a

// toán tử 3 ngôi (ternary operators)
// Nếu điều kiện đúng, trả về giá trị thứ nhất, ngược lại trả về giá trị thứ 2

// let diemTB = 8;
// let diemDatDuoc = 5;
// let isLogin = true;

// let result = diemDatDuoc > diemTB ? "Pass roi" : "chua Pass";

// ================Vòng lặp (Loop)====================
// //For
// for (let i = 2; i < 10; i++) {
// 	for (let j = 2; j < 10; j++) {
// 		console.log(`${i}*${j}=${i * j}`);
// 	}
// }
// forEach,for of trả về từng phần tử của mảng sau mỗi vòng lặp
// for in: trả về index của phần tử
// const array = ["Duc", "Tung", "Nguyen", "Vuong", "Toan"];

// array.forEach(function (item, index) {

// });
// console.log("==========");
// for (let item in array) {

// }
// console.log("==========");
// for (let item of array) {

// }

// // if/else statement
// const diemKtra = 8;
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
// let name3 = "Tung";

// const day = new Date().getDay();
// if (day == 1 || day == 2 || day == 3) {
// 	console.log("dau tuan`");
// }

// switch (day) {
// 	case 1:
// 	case 2:
// 	case 3:
// 		console.log("ngay lv");
// 		break;
// }
// tao 1 vong lap for lap lai 10 lan, trong moi lan thi` bien status (boolean) se thay doi nguoc lai voi chinh no, console.log ra


// Buoi 2:

// ======================Object======================
// Cach khai bao object
// Cach 1: su dung  new Object()

// const employee = new Object();

// console.log("employee: ",employee);

// class Human{
// 	constructor(nameParam, heightParam, isSingleParam){
// 		this.name = nameParam;
// 		this.height = heightParam,
// 		this.isSingle = isSingleParam;
// 		this.work = function(){
// 			console.log("I'm working");
// 		}
// 	}
// 	sleep(){
// 		console.log("I'm sleeping");
// 	}
// 	introduce(){
// 		console.log("Toi la "+this.name+", toi cao "+this.height+" cm");
// 	}
// }

// const toan = new Human("Toan","300",true);

// toan.introduce();
// // Cach2: dung cu phap new Object()
// const newPlainObject = new Object();
// newPlainObject.age = 24;

// // Cach 3:
// const oldObject = {
// 	name: "toan",
// 	age: 21 
// };
  //Shallow copy: khi thay doi gia tri cua object moi thi object cu cung bi thay doi

// immutable ===> Deep copy
// c1: dung Object.assign()

// const clone1 = Object.assign({}, oldObject);
// clone1.name = "Tung";

// console.log("clone 1: ",clone1);
// console.log("old object: ", oldObject);

// c2: 

// const clone2 = JSON.parse(JSON.stringify(oldObject));
// console.log("clone 2: ", clone2);

// ======================Function======================

// function declaration | default params

// function fnName(param1 = 1, param2 = 2){
// 	return param1 + param2;
// }
// console.log(fnName());
// function fn1 () {
// 	return "Hello"
// }
// function fn2 (fnameParam, lnameParam) {
// 	return "ten toi la: "+ fnameParam + lnameParam;
// }

// function fn3 () {
	
// }
// function fn4 (fname, lname) {
// 	console.log(fname + lname);
// }

// function expression

// const fnName2 = function(){

// }

// arrow function | ECMA Script 6

// const fn3 = (param1, param2) => {

// }

// const sum = (a,b) => {
// 	return a+b
// }

// goi ham: fnName(param1, param2)

// IIFE | chi chay dung 1 lan, k the goi lai

// (function(a,b){
// 	console.log(a+b)
// })(1,2);

// ((a,b)=>{
// 	console.log(a+b)
// })(3,4);

// ******Callback fn: mot ham` truyen vao mot ham` khac nhu mot param,  

// ["Toan","Vuong","Nguyen","Tung"].forEach(function(item, index){
// 	console.log("Toi ten la: ", item);
// 	console.log("Index: ", index);
// })

// turn 1: (Toan, 0) ==> callback(Toan,0)
// function sum (a,b){
// 	return console.log(a+b);
// }
// function div (a,b){
// 	return console.log(a-b);

// }
// function abc(a,b,callback){
// 	return callback(a,b)
// }
// abc(1,2,sum);
// abc(1,2,div);



//========BTVN=========
//Tạo 1 class Human có thuộc tính tên tuổi chiều cao số đo ba vòng =>tạo hàm kiểm tra tuổi nếu trên >18 tuổi đủ tuổi đi chơi <18 k đủ tuổi
class Human{
	constructor(nameParam, heightParam, ageParam, v1Param, v2Param, v3Param ){
		this.name = nameParam;
		this.height = heightParam,
		this.age = ageParam;
        this.v1 = v1Param;
        this.v2 = v2Param;
        this.v3 = v3Param;
		 }
	introduce() {
		console.log("Toi la "+this.name+", toi cao "+this.height+"cm "+this.age+"tuoi "+this.v1+"cm "+this.v2+"cm "+this.v3+"cm ");
	}
  checkage() {
        if (this.age > 18) {
          console.log("Du tuoi");
        } else {
          console.log("Khong du tuoi");
        }
    }
}
const toan = new Human("Toan","300","20","90","50","80");
toan.introduce();
toan.checkage();

//Viết một hàm tính giai thừa của một số nguyên dương và sử dụng callback để in kết quả.






