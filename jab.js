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

// let fruitS = ["apple", "mango", "Bannana"];
// let firstFruit = fruitS[0];
// let lastFruit = fruitS[fruitS.length - 1];
// fruitS.push("Orange");
// console.log(firstFruit);
// console.log(lastFruit);
// console.log(fruitS.push());
//console.log(fruitS.pop());

// console.log(fruitS.shift());
// console.log(fruitS.unshift());
// console.log(fruitS);
// let fruitsString = fruitS.join(","); // convert array to string
// fruitS = fruitsString.split(","); // split string into array format
// console.log(fruitS); //output
//console.log(typeof fruitS); //data type string
// if (Array.isArray(fruitS)) {
//     console.log("fruitS is an array");
// } else {
//     console.log("fruitS is not an array");
// }
// Count vowel

// count vowel count

// let countVowel = function (str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countVowel("HENOK"));

// other way of count vowelcounter

// function countVow(str) {
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let Values of str) {
//         if (vowels.includes(Values)) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVow("henok")); //

// let oppositeNumber = function (num) {
//     if (num > 0) {
//         return num * -1;
//     } else if (num < 0) {
//         return num * -1;
//     } else {
//         return num;
//     }
// };
// console.log(oppositeNumber(0));
// other method
// let oppositeNum = (Number) => {
//     return -Number;
// };
// console.log(oppositeNum(0));

// let CheckNumber = (num) => {
//     if (num % 2 == 0) {
//         return num + " The Number is Even";
//     } else if (num % 2 == !0) {
//         return num + " The Number is odd";
//     }
// };
// console.log(CheckNumber(9));
// console.log(CheckNumber(48));

//other way using Ternary operator
// let CheckNumber = (num) => {
//     return num % 2 === 0 ? num + " Even" : num + " odd";
// };
// console.log(CheckNumber(9));
// console.log(CheckNumber(4));
// console.log(CheckNumber(8));

// geting middle character from the given string

// let getMiddleChar = function (str) {
//     let middleIndex = Math.floor(str.length / 2);
//     if (str.length % 2 == 0) {
//         return str.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//         return str.charAt(middleIndex);//str[middleIndex]
//     }
// };
// console.log(getMiddleChar("Henok"));
// console.log(getMiddleChar("Tedy"));
// console.log(getMiddleChar("Test"));
// console.log(getMiddleChar("World"));
// console.log(getMiddleChar("Middle"));
//using Ternary operator
// let getMiddleChar = function (str) {
//     let middleIndex = Math.floor(str.length / 2);
//     return str.length % 2 == 0
//         ? str.slice(middleIndex - 1, middleIndex + 1)
//         : str[middleIndex];
// };
// console.log(getMiddleChar("Mekides"));
// console.log(getMiddleChar("Dave"));
//make the first letter of the word capitalize
// function Capitalizing(word) {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }

// let firstLetterCapitalize = function (str) {
//     let words = str.split(" "); //convert string into array
//     let result = [];
//     for (let word of words) {
//         result.push(Capitalizing(word));
//     }
//     return result.join(" "); //oposite of split ,converting arry into string
// };

// console.log(firstLetterCapitalize("hello guys how are you doing so far"));
// function muble(str) {
//     let result = ""; //to store mubbled string
//     for (let i = 0; i < str.length; i++) {
//         result = result + str[i].toUpperCase(); //add the UpperCase char into result string
//         for (let j = 0; j < i; j++) {
//             result = result + str[i].toLowerCase();
//         }
//         if (i < str.length - 1) {
//             result = result + "-";
//         }
//     }
//     return result;
// }
// console.log(muble("Abcd"));

// othe way to muble fun

// function capi(letter, num) {
//     let result = "";
//     for (let i = 0; i < num; i++) {
//         result += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return result;
// }
// function accum(str) {
//     let result = [];
//     let counter = 1;
//     let letters = str.split(""); //to convert sring into array formmat
//     for (let letter of letters) {
//         result.push(capi(letter, counter));
//         counter++;
//     }
//     return result.join("-"); //to convert array format into string
// }
// console.log(accum("abcd"));

// finding max num
// function findMax(num) {
//     let max = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > max) {
//             max = num[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([77, -5, 2, 99, 44, 37]));

// function findMin(numbers) {
//     let min = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
//     return min;
// }
// console.log(findMin([77, -5, 2, 87, 44, 78]));

// function squreDigit(nums) {
//     nums = nums.toString(); //convert input number into string
//     let result = [];
//     console.log(typeof nums);
//     for (let i = 0; i < nums.length; i++) {
//         result.push(Math.pow(nums[i], 2)); //result.push(nums[i]*nums[i])
//     }
//     return result.join(""); //convert str
// }
// console.log(squreDigit(9119));
// console.log(squreDigit(223));
// console.log(squreDigit(666));

function xxoo(str) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            xCount++;
        }
        if (str[i].toLowerCase() === "o") {
            oCount++;
        }
    }
    if (xCount === 0 && oCount === 0) {
        return true;
    } else if (xCount === oCount) {
        return true;
    } else {
        return false;
    }
}
console.log(xxoo("ooxx"));
console.log(xxoo("xooxx"));
console.log(xxoo("ooxXm"));
console.log(xxoo("zpzpzpp"));
console.log(xxoo("zzoo"));
