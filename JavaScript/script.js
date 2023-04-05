/* ALERTS JS

alert("Hello world!") | alert(5 + 2); // prefered
window.alert("Hello world!") 


// JS VARIABLES

var myName = "Eva"
var yourName = prompt("What is your name?");
alert("My name is " + myName + ", welcome to my course " + yourName + "!")
______________________________________________________

var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("Your level is currently: " + gameLevel);
______________________________________________________

function test() {
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}
______________________________________________________

// naming allowed
var myName = "Eva";
var myvar = "abc";
var my123 = 123;
var myname = "Eva"
var my_name = "Eva"
var abc123$_ 


// STRING CONCATENATION 

var message = "Hello";
var name = "Eva";
alert(message + " there, " + name + "!");
______________________________________________________

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (5 - tweetCount) + " characters remaining."); 


// SLICING AND EXTRACTING PARTS OF A STRING_slice(x, y) 

alert(prompt("Compose your tweet:").slice(0.3));

var name = "Eveline";
name.slice(2.0); //eline 


// CHANGING CASING IN TEXT 

var name = "Eveline"
name = name.toUpperCase(); // EVELINE
name = name.toLowerCase(); // eveline
______________________________________________________

var name = prompt("What is your name?");
var firstChar = name.slice(0.1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
var capitaliseName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitaliseName); // Eveline


// BASIC ARITHMETIC AND THE MODULO OPERATOR IN JS 

6 % 4 // 2
6 / 4 // 1.5 etc
______________________________________________________

// Dog age to human age formula
// humanAge = (dogAge - 2) x 4 + 21

var dogAge = prompt("How old is you dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.") 


// INCREMENT AND DECREMENT EXPRESSIONS 

var num = 12;
num /= 3;
______________________________________________________
var a = 16 % 4 // What does a equal? a = 0;
______________________________________________________
var x = 3;
var y = x++;
y += 1; // What does y equal? y = 4; 


// CREATING AND CALLING FUNCTIONS 

// alert_user that can see
// console.log_only for developers

function aFunction () {
    var a = 12;
    var b = 7;
    return a - b;
} // 5
______________________________________________________

function aFunction(a, b){
return a * b;
}
aFunction(3,4); // 12
______________________________________________________

function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveUp");
}
getMilk();
______________________________________________________

// Standford.edu_The Karel robot for exercises

function main() {
    goInCircle();
}

function goInCircle() {
    move();
    turnLeft();
    move();
    turnLeft();
    move();
} 


// PARAMETERS AND ARGUMENTS 

function lifeInWeeks(age) {

    var yearsRemaining = 90 - age; // 78
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

lifeInWeeks(12);


// OUTPUTS & RETURN VALUES 

// Create a BMI calculator using JavaScript functions.(BMI=weight.kg/height2.m2)

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height); // Math.pow(base, exponent)_The Math.pow() static method returns the value of a base raised to a power
    return Math.round(bmi);
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi); */

__________________________________________________________________________________________________________________________________________________________________