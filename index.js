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

// if/else statement
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
// // tao 1 vong lap for lap lai 10 lan, trong moi lan thi` bien status (boolean) se thay doi nguoc lai voi chinh no, console.log ra

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
// Cach2: dung cu phap new Object()
// const newPlainObject = new Object();
// newPlainObject.age = 24;

// Cach 3:
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

// // c2:

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

// === On tap Object va function ===
// const today = new Date();
// const currentDate = today.getDate();
// const currentHour = today.getHours();

// const appointment = {
// 	date: 19,
// 	time: 9,
// 	location: "35 TVD",
// 	showDetail: function(){
// 		console.log(`Cuoc hop dien ra luc ${this.time}, ngay ${this.date}, dia diem: ${this.location} `);
// 	},
// 	check: function(){
// 		if(currentDate < this.date || (currentDate == this.date && currentHour < this.time)){
// 			console.log('Cuoc hop chua dien ra');
// 		}else if(currentDate > this.date || (currentDate == this.date && currentHour > this.time)){
// 			console.log('Cuoc hop da dien ra');
// 		}else{
// 			console.log('Cuoc hop dang dien ra');
// 		}
// 	}
// }
// appointment.showDetail();

// Buoi 3:

// ======================String======================

// const a = "abcd  13232";
// const b = new String("abcd 12121");

// Phuong thuc cua String

/////// slice(startIndex, endIndex) | substring(startIndex, endIndex)
///////////////// Cắt ///////////////////////////
// console.log("a.slice():", a.slice(0, 3));
// console.log("a.substring():", a.substring(0, 3));
//////  substr(startIndex, length)
// console.log("a.substr():", a.substr(0, 4));

///////////////// Thay thế ///////////////////////////
/////// replace(searchVal, replaceVal) thay thế giá trị searchVal đầu tiên nó tìm thấy

////// replaceAll(search, replace) thay thế tất cả giá trị searchVal nó tìm thấy

//////////////// Biến đổi style của text ////////////////

/////// toUpperCase() >< toLowerCase()
//  const fullName = "Nguyen Van A";
//  console.log("name: ", fullName.toLowerCase())

///////////////// Nối ///////////////////////////

// const firstName = "  Nguyen   ";
// const lastName = "  Duc   ";

// const fullName = firstName.concat(" ",lastName, " sieu cap vjppro");

///////////////// Xoá khoảng trắng ///////////////////////////

/////// trim(), trimStart(), trimEnd()
// console.log("trimmed fullName: ",fullName.trim());

////////////////// Chia tách /////////////////////
////// split(splitter, limit) | splitter: các kí tự dùng để chia tách, limit: giới hạn độ dài của mảng kết quả trả về

// const subjects = "HTML, CSS, Javascript, PHP";

// const subjectArray = subjects.split('');

// console.log("subject array: ", subjectArray);

// ====================== Array ======================
// ///// index của mảng bắt đầu từ 0 đến vị trí thứ length - 1
// const exampleArray1 = [1, "a", {}];
// const exampleArray2 = new Array(1, "a", {});

// console.table(exampleArray1);
// console.log("example array 2: ", exampleArray2);

// ====================== Array methods ======================
////// array[index]: truy cập phần tử có index trong array
////// array.length
////// array.toString() && array.join() | khi mà array này bao gồm các string number

// console.log("array.join(): ",example.join());

///// array.pop() | lấy phần tử cuối cùng ra khỏi 1 array và trả về "phần tử" đấy

// console.log("array.pop(): ",example.pop());
// console.log("popped array: ", example);

///// array.push() | thêm một phần từ vào cuối mảng và trả về "độ dài mới của mảng"

// console.log("array.push(): ",example.push("PHP"));

///// array.shift() >< array.unshift()
// console.log("array.shift(): ",example.shift());
// console.log("shifted array: ", example);

/////// delete | không khuyến khích

// delete example[2];
// console.log("array: ", example);

///////////////// Nối ///////////////////////////
/////// array.concat()

///////////////// Cắt ///////////////////////////
////// array.splice(startIndex, deletedLength, items[]), trả về các phần tử đã xóa
// const example = ["HTML", "CSS", "JS", "PHP", "Golang", "C++", "Java"];

////// array.slice(startIndex, endIndex) | trả về mảng mới được cắt từ mảng cũ bắt đầu từ vị trí startIndex, kết thúc ở vị trí endIndex

// const newArray = example.slice(1);

// console.log('====================================');
// console.log("array: ", example);
// console.log("new array: ", newArray);
// console.log('====================================');

///////////// Sắp xếp //////////
// array.sort(callbackFn(a,b){
// return a - b; ==> trả về array giá trị tăng dần
// })
// array.sort(callbackFn(a,b){
// return b - a; ==> trả về array giá trị giảm dần
// })

// const points = [3,1,5,4,3,6,8,9];

// const newPoints = points.sort(function(a,b){
// 	return b - a;
// })
// console.log('====================================');
// console.log("points: ", points);
// console.log("sorted points: ", newPoints);
// console.log('====================================');

/////////// Array iteration || phương thức lquan đến vòng lặp /////////////

////// array.forEach(callbackFn(element, index){ code xu li ele, index })

// const callbackFn = function(point, index){
// 	console.log(`point: ${point}, at index ${index}`);
// }

// points.forEach(callbackFn)

////// array.map(callbackFn)

// const triplePoints = points.map(function(point, index){
// 	return point * 3
// })

////// array.filter(callbackFn) ===> Trả về 1 MẢNG mới mà thỏa mãn các điều kiện trong callbackFn y/cầu

// const filteredPoints = points.filter(function(point){
// 	return point >= 5;
// })

////// array.reduce(callbackFn, initVal)
// const callbackFn2 = function(prevPoint, currentPoint){
// 	return prevPoint + currentPoint;
// }
// const reducedPoints = points.reduce(callbackFn2,0);

// 1st turn
// prevPoint = initVal ===> prevPoint += currentPoint ===> 9

// 2nd
//

// console.log('====================================');
// console.table(points);
// console.table(reducedPoints);
// console.log('====================================');

/////// array.find(callbackFn) ===> Trả về 1 PHẦN TỬ đầu tiên mà thỏa mãn các điều kiện trong callbackFn y/cầu

// const foundPoint = points.find(function(point){
// 	return point == 3;
// })
// console.table("found: ",foundPoint);

/////// array.indexOf(searchVal) ==> sẽ trả về -1 nếu phần tử không thuộc mảng, ngược lại, trả về index của phần tử trong mảng

// const index = points.indexOf(10);
// console.log("index: ", index);

////// array.findIndex(callbackFn)
// function splitArray(arr, n) {
// 	const result = [];
// 	const chunkSize = Math.ceil(arr.length / n);

// 	for (let i = 0; i < arr.length; i += chunkSize) {
// 		const chunk = arr.slice(i, i + chunkSize);
// 		result.push(chunk);
// 	}

// 	return result;
// }
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numberOfArrays = 3;

// const result = splitArray(originalArray, numberOfArrays);
// console.log(Math.ceil(2.2));
// b2.5

// const checkPrime = function (num) {
// 	if (num < 2) {
// 		return false;
// 	}
// 	for (let i = 2; i <= Math.sqrt(num); i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 		return true;
// 	}
// };
// const result = originalArray.every(checkPrime);
// console.log(result);
// const title = document.querySelector(".title");
// const hideEl = document.querySelector("#hide");
// const showEl = document.querySelector("#show");
// const toggleEl = document.querySelector("#toggle");
// const emailEl = document.querySelector("#email");
// const parentBox = document.querySelector("#box");

// createElement && append/ remove vao 1 parent node

// const childDiv = document.createElement("div");
// childDiv.innerText = "this is a new div";

// const attribute = emailEl.getAttribute("value");

// hideEl.addEventListener("click", function () {
// 	parentBox.removeChild(childDiv);
// });
// showEl.addEventListener("click", function () {
// 	parentBox.append(childDiv);
// });
// toggleEl.addEventListener("click", function () {
// 	title.classList.toggle("isHidden");
// 	console.log("classList: ", title.classList);
// });

// ====================== Buổi 5 ======================
// Hiển thỉ list sản phẩm ra table
let dataFake = [
	{
		id: 1,
		name: "product A",
		price: 200,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
		image: "https://picsum.photos/200/300.jpg",
	},
	{
		id: 2,
		name: "product B",
		price: 200,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
		image: "https://picsum.photos/200/300.jpg",
	},
	{
		id: 3,
		name: "product C",
		price: 200,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
		image: "https://picsum.photos/200/300.jpg",
	},
	{
		id: 4,
		name: "product D",
		price: 200,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
		image: "https://picsum.photos/200/300.jpg",
	},
	{
		id: 5,
		name: "product E",
		price: 200,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
		image: "https://picsum.photos/200/300.jpg",
	},
	{
		id: 6,
		name: "product F",
		price: 200,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
		image: "https://picsum.photos/200/300.jpg",
	},
];
// trong table có 2 nút xóa và update ấn xóa thì xóa phần tử đó ra khỏi mảng ấn vào cập nhật thì thêm chữ update vào sau phroduct
// và 1 nút create ấn vào sẽ thêm 1 phần tử vào mảng với tên sản phẩn mới

function render (data){
	const html =document.getElementById('tbody');
	html.innerHTML=""
	data.forEach((data,index)=>{
		html.innerHTML+= `
			<tr>       
			<td>${index+1}</td>
			<td>${data.name}</td>
			<td><img src=${data.image}/></td>
			<td>${data.description}</td>
			<td>
				<button onClick='updateProduct(${data.id})'>Update</button>
				<button onClick='deleteProduct(${data.id})'>Delete</button>
			</td>
			  </tr>
			`
		})
}
render(dataFake)
const deleteProduct= (id)=>{
	dataFake=dataFake.filter((data)=>data.id!=id)
	render(dataFake)
}
const updateProduct= (id)=>{
	dataFake.find((data)=>data.id==id).name="Product updated"
	render(dataFake)
}
const createProduct= ()=>{
	const newProduct = {
		id:Math.random(),
		name:"Product created",
		price:Math.random(),
		image:"https://picsum.photos/200/300.jpg",
		description:"oke"
	}
	dataFake.push(newProduct)
	render(dataFake)
}

