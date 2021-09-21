/******************************

//This code will change your h1 tags

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello YWeb!';

------------------------------------------------------

//This code is used to test JS Operators.

let print = document.getElementById("jsTest");

var num;
num = 4;
let update = num * 4;
print.textContent = update;

------------------------------------------------------

// Conditional Statement(This code prompt user's input)

var favIceCream = prompt("Please enter your Favourite Icecream flavor");


if(favIceCream === "vanilla" ) {
  alert('Yay, I love vanilla ice cream!');
} else {
  alert('Awwww, but vanila is my favorite...');
}

------------------------------------------------------

//FUNCTION Example. converted above two statements into a function

function myTestFunction() {
var favIceCream = prompt("Please enter your Favourite Icecream flavor");
if(favIceCream === "vanilla" ) {
  alert('Yay, I love vanilla ice cream!');
} else {
  alert('Awwww, but vanila is my favorite...');
}
}
myTestFunction();

------------------------------------------------------

//FUNCTION2

let num1 = prompt ("enter a number from between 0 and 9");
let num2 = prompt ("enter another number between 0 and 9");

function multiply(num1,num2) {
  let result = num1 * num2;
 alert("you answer is " + result);
}

multiply(num1,num2);


------------------------------------------------------
//This code reads your mind


alert("Pick any whole number between 1 and 10 then press OK");
alert("First multiply the number you picked by 2 to continue");
alert("Then Multiply your result by 5 and press OK");
alert("Now divide your answer by the original number you picked in the beginning");
alert("Finally, subtract 7 from the result");

alert("Your Final answer is 3");

------------------------------------------------------

//Event Listener on the entire page click

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

------------------------------------------------------

//EVENT HANDLER on a button click

//<button onclick="testFunction()" style="padding:50px">Try Me</button>

function testFunction() {
    alert(' You clicked the try me button!');
}

------------------------------------------------------

//UPDATING PERSONAL SITE//
//This code switches between two images.

let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myPic1.jpg') {
      myImage.setAttribute('src','images/pic2.jfif');
    } else {
      myImage.setAttribute('src','images/myPic1.jpg');
    }
}

-------------------------------------------------------

//Get the User's Name and store it in the browser’s local storage.

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let yourName = prompt('Please enter your name.');
  localStorage.setItem('name', yourName);
  myHeading.textContent = 'Hi ' + yourName + ' Welcome to my page';
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back ' + storedName + ', glad you are back';
}


myButton.onclick = function() {
  setUserName();
}

-------------------------------------------------------

//This code makes sure the user enters a real name value.

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || !isNaN(myName)) {
     setUserName();
}else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my website, ' + myName;
}
}

******************************************/


//This code makes sure the user enters a real name value.

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || !isNaN(myName)) {
     setUserName();
}else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my website, ' + myName;
}
}
