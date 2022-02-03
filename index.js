/*Section 3 Values and variables*/

var myName = 'Abdul Daim';
var myAge = 23;
console.log(myName);
console.log(myAge);

var a=3;
var A=4;
console.log(a);
console.log(A);

var myName = "Abdul Daim";
console.log(myName);

console.log(typeof(myName));

var myAge = 20;
console.log(typeof(myAge));

var iAmAbdulDaim = true;
console.log(iAmAbdulDaim);
console.log(typeof(iAmAbdulDaim));

var test;
console.log(typeof(test));

console.log(10 + "20");
console.log(9-"5"); //bug
console.log("Java"+" Script");
console.log(" "+" ");
console.log(" "+ 0 );
console.log("A" - "B"); //NaN Not a Number
console.log(true+true); //bug
//true = 1, false = 0 => true + true = 1 + 1 = 2

var uselessVariable = null;
console.log(uselessVariable);
console.log(typeof(uselessVariable));

var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));

var myPhoneNumber = "12345";
var myName = "ABCD";
console.log(isNaN(myPhoneNumber));
console.log(myName);

if(isNaN(myName)){
    console.log("Yes myName is not a number");
}
console.log(Number.NaN===NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));
console.log(4+3);

// var x=5;
// var y=5;
//console.log("is both equal or not "+ x==y);

console.log("Remainder Operator " + 81%8);

var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);

var a = 2;
var b = 3;
console.log(a>b || b<0  || b<4);