// just display using consol
// function gradeCalculator(grade) {
//     if (grade >= 90) {
//         console.log("A");
//     } else if (grade >= 80) {
//         console.log("B");
//     } else if (grade >= 70) {
//         console.log("c");
//     } else if (grade >= 50) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
// }
// gradeCalculator(89);
// using return key word
// function gradeCalculator(grade) {
//     if (grade >= 90) {
//         return "A";
//     } else if (grade >= 80) {
//         return "B";
//     } else if (grade >= 70) {
//         return "c";
//     } else if (grade >= 50) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// result = gradeCalculator(94);
// console.log(result);

//about object
// const pearson = {
//     Eyes: 2,
//     legs: 2,
//     Language: "Amharic",
//     speake: function () {
//         return "Selam All";
//     },
// };

//Dot Noatation
// console.log(pearson.Eyes);
// console.log(pearson.legs);
// console.log(pearson.Language);
// console.log(pearson.speake());

// bracket operator

// console.log(pearson["Eyes"]);
// console.log(pearson["legs"]);
// console.log(pearson["Language"]);
//builtin property and Method
// let Fname = "DawiD";
// Fname.length;
// console.log(Fname);
// console.log(Fname.length);
// console.log(Fname.indexOf("D"));
// console.log(Fname.lastIndexOf("D"));
// console.log(Fname.slice(0, 3));
// console.log(Fname.toUpperCase());
// //conver number to string
// let num = 15;
// console.log(num.toString());
// console.log(typeof 15);
//How to convert string into array
// console.log(Fname.split(""));

// let arr = [];
// arr.push("Zelalem");
// arr.push("Abebe");
// arr.push("Mekides");
// arr.push("Lemilem");

// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);
// let arrSorted = [...arr].sort();
// console.log(arrSorted);

//count vowels
// function VowelCounter(str) {
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i]) === true) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(VowelCounter("Dog"));

//the same resulat we can get like the above function
// function VowelCounter(str) {
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(VowelCounter("Henok"));
//the same as for loop
// let vovels = "aeiou";
// for (let elmt of vovels) {
//     console.log(elmt);
// }

//Annonimous Function
// const addTwoNumber = function (num1, num2) {
//     return num1 + num2;
// };
// console.log(addTwoNumber(45, 55));
// console.log(addTwoNumber(20, 50));
// console.log(addTwoNumber(45, 55));

// arrow function

// const MultiplayNum = (num1, num2) => num1 * num2;
// console.log(MultiplayNum(12, 12));

// using for--of loop how to display index and value
// const myArr = [1, 2, 3, 4, 5, 6, 7];
// for (const [index, value] of myArr.entries()) {
//     console.log(`index:${index},value:${value}`);
// }

// const listOfStudent = ["Abebe", "kebede", "Moges", "Dawit", "Helen"];
// for (const value of listOfStudent) {
//     console.log(value);
// }

//creating object

// const person = {
//     name: "Mesfin",
//     age: 45,
//     hobbies: ["reading", "coding"],
//     Profesion: "software Architect",
//     address: {
//         city: "Addis_Ababa",
//         sub_city: "Arada",
//         HousNo: 1234,
//     },
// };
// // accessing the data two way dot notation and bracket
// console.log(person.name, person.Profesion, person.address.city);
// console.log(person["age"]);
// person.MartialStatus = "Married";
// console.log(person.MartialStatus);
