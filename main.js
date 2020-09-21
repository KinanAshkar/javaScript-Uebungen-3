// -13-
function checkIt(str){
    return str.toLowerCase().includes("ahmed");
}
console.log(checkIt("good morning ahmed")); 

// -14-
/* Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
i.e. countOccurrences(“this is a string”, “i”) ➞ 3  */

function countOccurrences(str,char){
    let counter = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]== char) counter++;
    }
    return counter;
}
console.log(countOccurrences("good morning ola and how are you today?","o")); 

// 15
/* Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
isFourLetters([“John”, “James”, “Jack”, “Jeanne”]) ➞ [“John”, “Jack”] */
function isFourLetters(arr) {
 let newArr = [];
 for (let i = 0; i < arr.length; i++) {
   if (arr[i].length == 4) newArr.push(arr[i]);
 }
 return newArr;
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"])); 

// 16
function add(x, y) {
 return x + y;
}
console.log(add(3, 4));

// Es6 2015
// arrow function
const sum = (x, y) => {
 return x + y;
};
console.log(sum(4, 5));

const newArray = [12, 3, 5, 6, 878];
const readList = (arr) => {
 for (let i = 0; i < arr.length; i++) {
   if (i == 0 || (i == 2 && i < 10)) {
     console.log(`the item number ${i} has the value  ${arr[i]}`);
   }
 }
};

const names = ["Ali", "Ahmad", "Olga"];
let namesList = [3, 3];
readList(names);
readList(namesList);
readList(newArray);
readList([33, 44, 55]);

const ageCheck = (age) => {
 return age < 100;
};
console.log(ageCheck(10));
// ternary operator
console.log(100 > 20 ? "true" : "false");

// 17
/* Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]  */

const myNumber = (arr)=>{
   let resultArray = [];
   let num;
   for(let i = 0; i<arr.length; i++){
       num = arr[i] %2 == 0 ? arr[i]-1 : arr[i]+1;
       resultArray.push(num);
   }
   return resultArray;
}
console.log(myNumber([3, 5, 2, 4]));
console.log(myNumber([6, 9, 10, 20]));

// 18
/* Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
[“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]  */

const myCapitalize = (arr)=>{
    let myResult;
    let resultArray = [];
    for(let i = 0; i<arr.length; i++){
        myResult = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
        resultArray.push(myResult);
   }
    return resultArray;
}
console.log(myCapitalize(["kinan","majd","hadi","hosam"]));