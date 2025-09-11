const Username = "sakshi"
 const repoCount = 50
//console.log(name + repoCount + " value"); 

 // string interpolation
// console.log(`Hello my name is ${Username} and my repocount is ${repoCount}`);

 const gameName = new String('Badminton')
//  console.log(gameName[0]);
//  console.log(gameName.length);
//   console.log(gameName.toUpperCase());
//  console.log(gameName.toLowerCase());
//  console.log(typeof gameName); //object
//  console.log(gameName.charAt(7));
//  console.log(gameName.indexOf('t'));
//  console.log(gameName.slice(0,3));
// // console.log(gameName.slice(-8, 5));
 
//  let doTrim = "    sakshi    "
//  console.log(doTrim);
 
//  console.log(doTrim.trim());

// const url = "https://sakshi.com//sakshi20%sharma"
// console.log( url.replace('20%','_'));
//  console.log(url.includes('sakshi'));
//   console.log(url.includes('shivani'));

  let fruit = " Mango "
//   console.log(fruit.slice(0,3)); //man
//   console.log(fruit.substring(1, 3)); //an
//   console.log(fruit.substr(1,3)); //ang

  let sentence = " I Love JavaScript"
//   console.log(sentence.indexOf("Love")); //3
//   console.log(sentence.includes("Script")); //true
//   console.log(sentence.endsWith("Java"));//false
  

let msg = "I love Pets"
// console.log(msg.replace("pets", "Cows")); // I love Cows
// console.log(msg.replaceAll("o", "9")); // I l9ve Pets

let name = "  sakshi  "
// console.log(name.trim()); //"sakshi"
// console.log(name.trimStart()); //"sakshi   "
// console.log(name.trimEnd()); // "    sakshi"


let colors = "red,green,blue"
let arr= colors.split(","); 
//console.log(arr); //["red","green","blue"]

let newStr = arr.join("|");
//console.log(newStr); // red | green | blue

let lough = "ha"
//console.log(lough.repeat(3));// hahaha

let str = "She said: \"Hello!\""; // She said: "Hello!"
let path = "C:\\Users\\Sakshi";   // C:\Users\Sakshi

//*****Practice Questions ************//

// 1. Find the length of a string
let str1 = "JavaScript is fun!";
//console.log(str1.length);

 // 2. Convert a string to uppercase and lowercase
console.log( str1.toUpperCase());
console.log( str1.toLowerCase());

//Extract first 5 characters
 console.log(str1.slice(0, 5));

 // 4. Check if string contains the word "fun"
 console.log(str1.includes("fun"));

 // 5. Replace "fun" with "awesome"
 console.log(str1.replace("fun", "awesome"));

// 6. Trim spaces
let str2 = "   Hello Sakshi   ";
console.log(str2.trim());

// 7. Split a string into words
let str3 = "apple,banana,orange";
let arr1 = str3.split(",");
console.log(arr1);
// 8. Join array back into string with " | "
console.log(arr1.join(" | "));

// 9. Check if string starts with and ends with certain words
let str4 = "Bright Smile App";
console.log(str4.startsWith("Bright"));
console.log(str4.endsWith("App"));

// 10. Access characters
let str5 = "Delhi";
console.log(str5.charAt(4));
console.log(str5[0]);
console.log(str5.length-1);

// 11. Template Literals
let user = "Sakshi";
let project = "Bright Smile";
console.log(`Hii my name is ${user} and I created a project is ${project} dental App`);

//12. Repeat string
let laugh = "ha";
console.log(lough.repeat(5));








 
 

  
 
 
 