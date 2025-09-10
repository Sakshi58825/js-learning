// alert(3+3) we are using nodejs, not browser

         //Primitive DataTypes
console.log(typeof undefined); //undefined
console.log((typeof null)); //object
 let age = 24; // number datatypes
 let name = "sakshi" // string
let isFollow = true;// Boolean
let x; // undefined
let y = null// object
let z = BigInt("123"); //BigINT
let a = Symbol("hello") // symbol

        
         //Non Primitive DataTypes
// 1) Object:- it is a collection of data

 const student = {
    name: "sakshi",
    age : 24,
    class: 12,
    cgpa: 8.3,
    isPass: true
 }
    student["age"]= student["age"]+1;
 console.log(student);
 console.log(typeof(student));  //Object
 console.log(student["isPass"]);
 console.log(student.name);

                // Let‘s Practice
// Qs1. Create a const object called “product” to store information shown in the picture.

const product = {
    productName : "pen",
    rating: 5,
    price: 260,
    discount: 5
}
 product["productName"] = "Ball pen";
console.log(product);
console.log(product["rating"]);
console.log(product.price);
console.log(typeof(product));




 
