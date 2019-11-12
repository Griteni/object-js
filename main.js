//create an emty objects


// let user = new Object(); //ok
// let user ={};           //better - emty objects


//Create first filled object putting the properties inside of the variable
//the name is a key using colon and BÜlent is a propertis and we have to put commas betweens.
/* let user = {
    name: 'Bülent', 
    age: '33'
} */

//let user = {name: 'Bülent', age: '33'}; //Object

//let user = ['Bülent','33']; //Array -  the keys are already predifined with the position.

//Insert new property to object
/* let userData = {
    name: 'Bülent', 
    age: '33',
    'nationality' : 'Italy'
}
console.log(userData);

userData.adress = 'Düsseldorf';
console.log(userData);

userData.lastName = 'Pippolino';
console.log(userData);

delete userData.age; //to delete some objects
console.log(userData); */

//call specific member of objects
//console.log('Name of users is ' + userData.lastName);

//This does not work
//console.log('Italy' + userData.'nationality');

//Call difference memebers of objects together
//console.log('Italy ' + userData['nationality']);


//Task

/* let food = {
    name: 'banana',
    color: 'yellow',
    calori: 276,
    isFamous: true
} */

//console.log(food); // 2 -3


//document.getElementById("newValue").innerHTML = food;
/* function newValue(){
    let ask= prompt((Object.keys(food) + '\nWhich property would like to see?')); // 3
    alert(food[ask] + '\n abb a property in the list');
    
    keyForfood = prompt ("tell me the key that you want to add");
    valForfood = prompt ("tell me the value that you want to add");

    food[keyForfood] = valForfood;
    //alert(food);
    console.log(food);
}
console.log(newValue(food)); */

//Step 6:
/* function deleteFood(){
    let ask = prompt(Object.keys(food) + '\n\ntype the key and deleate');
    delete food [ask];
    console.log (food);
}
 */

 let jokes1 = {question: 'who is didi?', answer:'Descka'};
 let jokes2 = {question: 'who is dudu?', answer:'Abdul'};
 let jokes3 = {question:'who is nana?', answer:'Hanna'};

 

 /* console.log(jokes1);
 console.log(jokes2);
 console.log(jokes3);

 let question = prompt('');
 let answer = prompt('');

 joke1['question'] = question;
 jokes2['answer'] = answer;

 console.log(jokes1);

 function createJokeObject (){
    let question = alert('who is didi');
    let answer = prompt('It is Descka'); 

    return {'question': question, 'answer':answer};
 } */


 let arr1 =[];
 arr1.push(jokes1);
arr1.push(jokes2);
arr1.push(jokes3);

console.log(arr1)

let score = 1;

for (i= 0; i<3; i++){

    let joke1 = alert(arr1[i].question);
    if (arr1[i].answer = arr1[i].answer){
        i += score;
    }
    else if (arr1[i].answer != arr1[i].answer){
        let joke2 = alert(arr1[i].question);
    }
    return score;
}