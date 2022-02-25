//Task 2: Simple Programs todo for Operators
//Square of a number
var a=Math.pow(6,2);
console.log(a);

//Swapping 2 numbers
var a=2;
var b=4;
[a,b]=[b,a];
console.log(a);
console.log(b);

//Addition of 3 numbers
var a=5;
var b=10;
var c=15;
console.log(a+b+c);

//Celsius to Fahrenheit conversion
var c=50;
const f=(c*1.8)+32;
console.log(f);

//Meter to miles
let meter=1020
let miles=meter*0.00062137
console.log(miles)

//Pounds to kg
const kg=2.2046;
var pounds=100;
console.log(pounds/kg);

//Calculate Batting Average
let runs = 10000;
let matches = 250;
let notout = 50;
let avg = runs/ (matches - notout);
console.log(avg)

//Calculate five test scores and print their average
let a=50
let b=80
let c=10
let d=95
let e=70
let average=(a+b+c+d+e)/5
  console.log(average)

//Power of any number x ^ y
let x1=2
let y1=5
let power=x1 ** y1
console.log(power)

//Calculate Simple Interest
let a=2500
let b=5
let c=10
let SI = (a*b*c)/100
console.log(SI)

//Calculate area of an equilateral triangle
let a=8
let area = ( 1.73 * a *a) / 4
console.log(area)

//Volume Of Sphere
let radius = 7;
let volume = (4/3)* Math.PI * Math.pow(radius, 3);
console.log(volume)

//Volume Of Prism
let a=4
let b=8
let volume= a * b
console.log(volume)
