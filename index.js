// let const - block scoped variables
// not hoisting
// camelCase

// Kieu du lieu (primitive/non-primitive)(value types/ reference types)
// string, number, boolean(true/false), null, undefined, object, array, function
// primitive: string, number, boolean, null, undefined
// non-primitive: object, array, function
class Human{
    constructor(name, age, height, v1, v2, v3){
        this.name = name;
        this.age = age;
        this.height = height;
        this.v1 =v1;
        this.v2 = v2;
        this.v3 = v3;
    }
    introduce(){
        console.log("Toi la " + this.name + " toi "+ this.age+ " toi cao " + this.height + "cm" + " so do 3 vong " + this.v1 +", "+ this.v2 +", "+ this.v2)
    }

	
}


const dz = new Human("Nguyen", 17, 175, 90,90,90)
function checkVar () {
	if(dz.age > 18){
		console.log("Di luon")
	}
	else{
		console.log("o nha");
	}
}


checkVar();
dz.introduce();