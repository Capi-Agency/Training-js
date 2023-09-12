// let const - block scoped variables
// not hoisting
// camelCase

// Kieu du lieu (primitive/non-primitive)(value types/ reference types)
// string, number, boolean(true/false), null, undefined, object, array, function
// primitive: string, number, boolean, null, undefined
// non-primitive: object, array, function
// let name = 'tung';
// let age = 20;
// let address = 'hanoi';
// let sex = true
// console.log()



// let diemTb = 8;
// let diemDatduoc = 5;
// let x = diemDatduoc > diemTb ? 'pass' : 'not pass';
// console.log(x);

// for (let i = 0; i < 10; i++) {
//     console.log('abb');
// }
// const array = ["movie", "book", "music", "football"]
// array.forEach(function (item, index){
// console.log("forEach item", item);
// console.log("forEach index", index);});
// console.log("============");
// for (let item in array) {
//     console.log("forIn result", item );
// }
// console.log("============");
// for (let item of array) {
//     console.log("forOf result", item );
// }

// const diemKtra = 4.2;
// if ( diemKtra >=9 && diemKtra <= 10) {
//     console.log("xuat sac");
// }
// else if ( diemKtra >= 7.5 && diemKtra <= 9) {
//     console.log("gioi");
// }
// else if ( diemKtra >= 5 && diemKtra <= 7.5) {
//     console.log("kha");
// }
// else {
//     console.log("dot");
// }

// const day = new Date().getDay();
// let result;
// switch (day) {
//     case 0:
//     result = "chủ nhật";
//     break;
//     case 1:
//     result = "thu 2" ;
//     break;
//     case 2:
//     result = "thu 3";
//     break;
//     case 3:
//     result = "thu 4";
//     break;
//     case 4:
//     result = "thu5";
//     break;
//     case 5:
//     result = "thu6";
//     break;
//     case 6:
//     result = "thu7";
//     break;
//     default :
//     result = "not"
//     break;
    
// }
// console.log(result);



const day = new Date().getDay();
let result;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("ngay lam viec");
        break;
    case 6:
    case 0:    
        console.log("ngay nghi");
        break; 
}