// let const - block scoped variables
// not hoisting
// camelCase

// Kieu du lieu (primitive/non-primitive)(value types/ reference types)
// string, number, boolean(true/false), null, undefined, object, array, function
// primitive: string, number, boolean, null, undefined
// non-primitive: object, array, function
// class Human{
//     constructor(name, age, height, v1, v2, v3){
//         this.name = name;
//         this.age = age;
//         this.height = height;
//         this.v1 =v1;
//         this.v2 = v2;
//         this.v3 = v3;
//     }
//     introduce(){
//         console.log("Toi la " + this.name + " toi "+ this.age+ " toi cao " + this.height + "cm" + " so do 3 vong " + this.v1 +", "+ this.v2 +", "+ this.v2)
//     }

	
// }


// const dz = new Human("Nguyen", 17, 175, 90,90,90)
// function checkVar () {
// 	if(dz.age > 18){
// 		console.log("Di luon")
// 	}
// 	else{
// 		console.log("o nha");
// 	}
// }



// dz.introduce();
// checkVar();

// //tinh giai thua
// function giaiThua(n){
//     if (n <= 1){
//         return 1;
//     }
//     for (let i = n-1 ; i >= 1; i--) {
//         n *= i;
//     }
//     return console.log(n);
// }

// function cb(n,callback){
//     return callback(n);
// }

// cb(5, giaiThua);

// //safagfjgfjghk
// class animal{
//     constructor(name, species, age){
//         this.name = name;
//         this.species = species;
//         this.age = age;
//     }
//     introduce (){
//         console.log("Day la con " + this.name + "Loai " + this.species + this.age + " tuoi" );
//     }

// }
// const dongVat = new animal("Chuot", "gam nham", 19 )
// dongVat.introduce();


// const fullName = "Nguyen Duc Nguyen"

// console.log("ho", fullName.slice(0,7));
// console.log("ho", fullName.substring(0,7));
// console.log("ho", fullName.substr(0,6));
// console.log("ten", fullName.toUpperCase());
// console.log("ten", fullName.toLowerCase());
// console.log("ten", fullName.split(""));

// const namThang = ["Toan", "Duc", "Nguyen", "Tung", "Vuong"]
// const nameThang1 = new Array ("Toan", "Duc", "Nguyen", "Tung", "Vuong")

// console.log(namThang);
// console.log(nameThang1);

// namThang.forEach(function(name, index){
//     console.log(`name: ${name}, at index ${index +1 }`)
// })


// const num = [1,2,3,4,5,6,7,8,9]
// let sum = 0;
// for (let i = 0; i < num.length;i++){
//     sum += num[i];
// }
// let max = num.reduce(function(accumulator, element){
//   return (accumulator > element) ? accumulator : element
// });
// let min = num.reduce(function(accumulator, element){
// 	return (accumulator < element) ? accumulator : element
//   });

// num.sort(function(){
// 	return -1
// })
// console.log("Tong:",sum);
// console.log("max= ",max );
// console.log("min= ",min );
// console.log(num);

// const numLv = [1,1,3,4,5,5,7,8,9]
// const filternumLv = numLv.filter(function(repeat){
// 	return repeat = 
// })
// console.log("cac so bi lap: ", filternumLv)
// console.log(sum /= num.length)

// ////bai 2
// const numB = [1,2,3,4,5,6,7,8,9]
// const newNum = numB.sort(function(a,b){
// 	return a- b
// })
// //1
// console.log(newNum);
// //3
// console.log(newNum[7]);
// //4
// const newNumB = numB.slice(0,3)
// const newNumC = numB.slice(4,7);
// console.log(newNumB, newNumC);

// //2
// const numL = [1,1,2,3,4,4,5,6,7,7]
// const checkLap = numL.reduce(function(checkLap, item ){
//       return checkLap.includes(item)? checkLap: [...checkLap, item];
// }, []);
// console.log(checkLap);

// //5
// const numN = [1,2,3,4,5,7,8]

// const fname = document.getElementById("username");
// const myName = document.getElementById("myName");

// fname.onchange = function(){ 
//     myName.innerHTML= fname.value 
// }

// fname.addEventListener("change", function(){ 
//   myName.innerHTML= fname.value 
// } )

// const switchEL = document.getElementById("Switch");
// switchEL.addEventListener("click", function(){ 
//   myName.innerHTML= fname.value 
//   switchEL.style.backgroundColor = "blue"
// } )

// const menu = document.getElementById("menu");
// const ul =document.getElementById("ul1");

// menu.addEventListener("click", function(){


//   ul.classList.toggle('none')
//  2// ul.style.display = "block";
//   2// .classList.add("isShow");
// })
// console.log(menu);
//b1
// const changeColor = document.getElementById("btn");
// const backGround = document.getElementById("back-ground")
// changeColor.addEventListener("click", function(){
//   backGround.style.backgroundColor = "red"
// })
//b2
// const num =document.getElementById("num")
// let count =0; 
// changeColor.addEventListener("click", function(){
//     count= count +1
//     num.innerHTML= count
// })

const add = document.getElementById("addItemButton")
const myList = document.getElementById("myList")
let value = 5
add.addEventListener("click", function(){
    value +=1
    myList.innerHTML += '<li>'+ value +'</li>'
})


const submit = document.getElementById("submitButton")
const input = document.getElementById("myInput")

submit.addEventListener('click', function(){
    if(input.value = ' '){
        alert("ai o si ma")
    }
    else{
        alert(`Da nhan noi dung: ${input.value}`)
    }
    
})









