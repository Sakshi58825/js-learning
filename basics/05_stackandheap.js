// ************* Stack & Heap Memory ************//
  

  //****Primitive => (Stack) ***********//
  // value not changed in a orininal value in a stack//
  // its give u always copy of the memory//
let myName = "sakshi"
 let anotherName = myName
 anotherName = "sharma"
//  console.log(myName);
//  console.log(anotherName);

 //**********Non-Primitive => Heap************//
  // Its give u direct reference of the original value
  // and we can change original value 

let user1 = {
name : "sakshi",
email: "sakshi@google.com",
upi: "user@bl"
}
let user2 = user1   
user2.email = "pandit@google.com"
console.log(user1.email);
console.log(user2.email);

