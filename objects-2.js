// Create objects
let car = {
    brand : 'bmw',
    color : 'white',
    cc: 350,
    isExemined : true
};

// Update property with dot
car.cc = 5000;
console.log(car);


// Update property with square brackets ans static text for key and value
car['color'] = 'black';
console.log(car);

//update property with square brackets and variable for value
let result = false;
car ['isExemined'] = result;
console.log(car);

// Update property with square brckets and variables for key
let specialkey = 'brand';
car[specialkey] = 'Ferrari';
console.log(car);

//Combine stati text an variable

let test = {}

/* let number = 3;
test ['key' + number] = 'test' + number;
console.log(test); */


//How to create property from 3 to 10 with a Loop
/* for( var num=3; num<=10; num++){
    test ['key' + num] = 'test' + num;
}
console.log(test); */

let name = 'orange';
let weight = 100;

let fruits = {
    //name : name,
    //weight: weight
    name,
    weight
}
console.log(fruits);

let brand = 'dci';
let company = brand;

console.log(company);

//Objects
let brand0= {
    brand: 'DCI'
}

let company0 = brand0;
console.log(company0);

brand0.brand = 'Google';
console.log(company0);

//mix sample for clone
let tech = {
    brand,
    company
}

console.log(tech);

//difference between  == and  === (the first one compared value, the second one value and data type)
let x = 2;
let y = '2';

console.log(x==y); //true
console.log(x===y); //false

//compare objects
//all objects are unique
let a = {};
let b = {};
console.log(a==b); //false

//compare clonned objects
//This is just one case for 2 objects to be equel
let c = a;
console.log(a==c) //true

//Constant for Objects and other datatyper
const food =  'bread';
//food = 'soup';
console.log(food);

//constant object
const lunch ={
    fruit : 'apple'
}

//update property
lunch.fruit = 'banana';
console.log(lunch);
