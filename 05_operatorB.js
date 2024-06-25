var greaterNumber = function(numOne, numTwo){
var result = numOne>=numTwo ? numOne : numTwo;
console.log(`Greater number from numbers ${numOne}, ${numTwo} is: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800, 899);

console.log(`============== step 2 =============`);
function isEvenOrOddNum(argOne) {
    var result = argOne%2 == 0 ? true : false;
    return result;
}
var givenNum1 =  isEvenOrOddNum(29);
console.log(`Given number 29 is: ${givenNum1}`);
var givenNum2 = isEvenOrOddNum(44);
console.log(`Given number 44 is: ${givenNum2}`);
var givenNum3 = isEvenOrOddNum(0);
console.log(`Given number 0 is: ${givenNum3}`);
var givenNum4 = isEvenOrOddNum(101);
console.log(`Given number 101 is: ${givenNum4}`);

console.log(`=========== Step 3 ===========`);
function wordLength(argOne){
var result = argOne.length%2 == 0 ? "Even" : "Odd";
console.log(`10 digit is javascript word: ${result}`);
console.log(`9 digit is Developer word: ${result}`);
console.log(`6 digit is Google word: ${result}`);

}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");