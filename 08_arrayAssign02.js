const arraynumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]

console.log(`============= Step 1 ============`);
console.log(`Total array element is: ${arraynumbers}`);
var totalNumber = arraynumbers.length;
console.log(`Length of array elemnt is: ${totalNumber}`);

console.log(`============= Step 2 ============`);
var elementFirst = arraynumbers[0]; 
console.log(`First element is: ${elementFirst}`);
var elementLast = arraynumbers[arraynumbers.length-1];
console.log(`Last element is: ${elementLast}`);


console.log(`============= Step 3 ============`);
var lastThirdElement =  arraynumbers[arraynumbers.length - 3];
console.log(`Last 3rd element from array is: ${lastThirdElement}`);

console.log(`============= Step 4 ============`);

var evenNumbers = [];
for (var element of arraynumbers) {
  if (element % 2 === 0) {
 
    evenNumbers.push(element);
  }
}
console.log(`All even number in array is: ${evenNumbers}`);

console.log(`============= Step 5 ============`);

var evenNumbers = [];
for (var element of arraynumbers) {
  if (element % 2 !== 0) { 
    evenNumbers.push(element);
  }
}
console.log(`All odd number in array is: ${evenNumbers}`);

console.log(`============= Step 6 ============`);
let sum =0;
for (let index = 0; index < arraynumbers.length; index++) {
    const element = arraynumbers[index];
    if (index%2==0) {
       sum +=  element;
       
    }
}
console.log(`Sum all the even number in array is: ${sum}`);

console.log(`============= Step 7 ============`);
let sumOdd =0;
for (let index = 0; index < arraynumbers.length; index++) {
    const element = arraynumbers[index];
    if (index%2==1) {
        sumOdd +=  element;
       
    }
}
console.log(`Sum all the odd number in array is: ${sumOdd}`);

console.log(`============= Step 8 ============`);
let sumAll =0;
for (let index = 0; index < arraynumbers.length; index++) {
    const element = arraynumbers[index];
        sumAll +=  element;      
}
console.log(`Sum all the number in array is: ${sumAll}`);

console.log(`============= Step 9 ============`);
let multipleFive = [];
for (const element of arraynumbers) {
    if (element%5 == 0) {
        multipleFive.push(element)
    }
}
console.log(`Multiple of five number is: ${multipleFive}`);

console.log(`================= step 10 ===============`);
const numberToCheck = 115;
const isNumberIncluded = arraynumbers.includes(numberToCheck);
console.log(`Is number 115 available in array: ${isNumberIncluded ? "true" : "false"}`);
     

console.log(`================= step 11 ===============`);
const numberAvailable = 23;
const isNumberAvailable = arraynumbers.includes(numberAvailable);
console.log(`Is number 23 available in array: ${isNumberAvailable ? "true" : "false"}`);
     

console.log(`================= step 12 ===============`);
var element = arraynumbers.splice(3,0,55,66)
console.log(`Number Inserted at index 3 is: ${arraynumbers}`);


console.log(`================= step 13 ===============`);
var element = arraynumbers.splice(4,3)
console.log(`Element deleted starting from index 4: ${arraynumbers}`);