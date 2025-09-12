const score = 500
//console.log(score);

const balance = new Number(100)
// console.log(balance);
 
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //100

let otherNumber = 1122.8977
//console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
//console.log(hundereds.toLocaleString('en-IN')); //10,00,000



//************************Maths**********************//
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4)); //Positive Vlaue 4
// console.log(Math.abs(4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.sqrt(625));
// console.log(Math.min(2,4,12,6));
// console.log(Math.max(34,23,5,2,3));

//  console.log(Math.random());// random value between in 0 to 1 only
//  console.log((Math.random()*10) + 1);
//  console.log(Math.floor(Math.random()*10) + 1);

 const min1 = 10
 const max2 = 20

 //console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula

 // Random number between 50 and 100
 //console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
 
// 1. 98765.4321 ko 2 decimal places tak round
let num = 98765.4321;
console.log(num.toFixed(3));

// 2. Number ko string me convert karke uski length
let num2 = 12345;
let convert = num2.toString();
console.log(convert.length); // 5

// 3. 123456789 ko en-US aur en-IN locale format
let bigNum = 123456789;
 console.log(bigNum.toLocaleString('en-IN')); // 12,34,56,789
 console.log(bigNum.toLocaleString('en-US')); // 123,456,789

// 5. 999.5 with toPrecision
let n = 999.6;
 console.log(n.toPrecision(2));
 console.log(n.toPrecision(5));

// 6. Math.ceil(4.2) aur Math.floor(4.8)
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.8)); // 4

// 7. Math.pow(2, 5)
console.log(Math.pow(2 , 5)); //32

// 8. Random number 1–100
console.log(Math.floor(Math.random ()) * 100 + 1);

// 9. Formula for min–max random number
let min = 10;
let max = 20;
console.log(Math.floor(Math.random()* (max - min + 1)) + min );


// 10. Max aur Min of 15, 45, 9
console.log(Math.min(15, 45, 9));
console.log(Math.max(15, 45, 9));

// 11. Dice (1–6)
console.log(Math.floor(Math.random() * 6)+ 1);

// 12. Square root aur Cube root
console.log(Math.sqrt(49)); //7
console.log(Math.cbrt(27)); //3









 







