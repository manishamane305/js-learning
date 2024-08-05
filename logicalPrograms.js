console.log(`==== WAP to find the length or total number of characters of the given strings ===== `);

console.log(`=============== Step 1 ============`);

let words = "Hello, World!";
console.log(`Length of string "${words}" is: ${words.length}`);
 

console.log(`=============== Step 2 ============`);

let reverse = "JavaScript is the language of Internet";
console.log(`Length of string "${reverse}" is: ${reverse.length}`);

console.log(`===== WAP to log the last character of the given string suing length property =====`);

console.log(`------------------- Step 1 -------------------`);
let lastChar = "Hey, my friend, Programming Language";
let charAtLast = lastChar[lastChar.length-1];
console.log(`Last Character in given string "${lastChar}" is: ${charAtLast} `);

console.log(`------------------- Step 2 -------------------`);
let lastCharOne = "I am learning logical programs";
let charAtEnd = lastCharOne[lastCharOne.length-1];
console.log(`Last character in given string "${lastCharOne}" is: ${charAtEnd}`);

console.log(`------------------- Step 3 -------------------`);

let lastCharTwo = "Angular";
let lastIndex = lastCharTwo[lastCharTwo.length-1];
console.log(`Last character in given string "${lastCharTwo}" is: ${lastIndex}`);

console.log(`==== WAP to print or log the first character of the given strings ==== `);
console.log(`--------- Step 1 -------`);
var firstChar = "React";
var charFirst = firstChar[0];
console.log(`First character in given string "React" is: ${charFirst}`);

console.log(`--------- Step 2 -------`);
var firstChar = "Elon Musk";
var charFirst = firstChar[0];
console.log(`First character in given string "Elon Musk" is: ${charFirst}`);

console.log(`--------- Step 3 -------`);
var firstChar = "Apple founder is Stew Job";
var charFirst= firstChar[0];
console.log(`First Character in given string "Apple founder is Stew Job" is: ${charFirst}`);

console.log(`================= WAF CapitalizeWord() =================`);
function CapitalizeWord(argOne){
   var divideWord = argOne.split(" ");
   let newString = " ";
   for (const element of divideWord) {
    const newWord = element.charAt(0).toUpperCase() + element.slice(1);
    newString = newString  + newWord + " ";
   }
   console.log(`Given String is: ${argOne} 
Capitalize String is: ${newString}`);
    
   }
CapitalizeWord("language of internet");

CapitalizeWord("Elon musk - The tycoon of decade");

CapitalizeWord("My Life My Rule");

CapitalizeWord("logical programming question SET");

console.log(` ==== WAP to check given string contains word 'UI' or not ====`);

 var word = function(argOne){
if (argOne.startsWith("UI")) {
    console.log(`Given string is ${argOne} is starts with word "UI"`);
    
} else {
    console.log(`Given string is ${argOne} is not starts with word "UI"`);
    
}
};
word("React - UI Developer");
word("UI Developer");
word("Front end and backend technologies");
word("MEAN or MERN -UI Developer");

console.log(`==== split a string into an array of substring with comma separator ====`);
let array = "apple, orange, banana";
let arrayTwo = "Stew, Bill, Jenny";
let arrayThree = "Rupees, Dollar, Krone, Pound, Dinar";
let str = array.split(', ');
let strTwo = arrayTwo.split(', ');
let strThree = arrayThree.split(', ');
console.log(str);
console.log(strTwo);
console.log(strThree);


function text(arg){
    var split = arg.split(", ");
    console.log(split);

}
text("apple, banana, orange, grapes");




