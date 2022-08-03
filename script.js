// Additional opportunities

//Interaction with the user

// document.querySelector("#alert").addEventListener("click", function () {
//   alert("Вы успешно кликнули по кнопке!"); // global function alert
// });

// document.querySelector("#confirm").addEventListener("click", function () {
//   let decision = confirm("Вы уверены в том что хотите нажать на кнопку?"); // global function confirm

//   if (decision === true) {
//     alert("Вы успешно кликнули по кнопке!");
//   }
// });

// document.querySelector("#prompt").addEventListener("click", function () {
//   let age = prompt("Введите свой возраст", 18); // global function prompt, the second value is default

//   if (age >= 18) {
//     alert("Вы можете пройти");
//   } else {
//     alert("Вы еще слишком молоды");
//   }
// });

// Methods of arrays

// let str = "1,2,3,4,5,6,7,8";

// let array = str.split(","); // creates array from strings, and separates elements by using value from ('')

// console.log(array);

// console.log(array.join(";")); // creates str from array, and separates elements by using value from ('')

// console.log(array.reverse()); // changes array's subsequence

// array.splice(0, 0, "11"); // delets adds and changes elements from array

// let newArray = array.concat([1, 2]); // joins elements from arrays to one array by using clonning

// console.log(newArray);

// let objArr = [
//   { name: "Max", age: 27 },
//   { name: "Elena", age: 18 },
//   { name: "Victor", age: 20 },
// ];

// let foundPerson = objArr.find(function (person) {
//   // works like cycle
//   return person.age === 18;
// });

// console.log(foundPerson);

// let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
//   return i % 2 !== 0;
// });

// let numArray = array.map(function (i) {
//   return i * 2;
// });

// console.log(numArray);

// JSON

// let person = {
//   name: "Max",
//   age: 26,
//   car: {
//     model: "Ford",
//   },
//   job: "Frontend",
//   friends: ["Elena", "Igor"],
// };

// let str = JSON.stringify(person);

// console.log(str);
// console.log(JSON.parse(str));

// Data and Time with Date

// let date = new Date();

// console.log(date);

// Storaging data in local storage

// document.querySelector("button").addEventListener("click", function (event) {
//   let value = document.querySelector("input").value;

//   let obj = {
//     text: value,
//   };
//   localStorage.setItem("headerText", JSON.stringify(obj)); // adds new value in local storage
// });

// document.addEventListener("DOMContentLoaded", function (event) {
//   let obj = {};

//   try {
//     obj = JSON.parse(localStorage.getItem("headerText")); // gets value from local storage by using key
//   } catch (e) {}

//   if (obj && obj.text && obj.text.trim()) {
//     // deletes all extra whitespaces
//     document.querySelector("h1").textContent = obj.text;
//   }
// });
