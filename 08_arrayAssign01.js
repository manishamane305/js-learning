const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
console.log(fruits_seasonal);

//console.log(fruits_seasonal.length);
const elementFirst = fruits_seasonal[0];
console.log(`First element is: ${elementFirst}`);

const elementLast = fruits_seasonal[4];
console.log(`Last element is: ${elementLast}`);

fruits_seasonal.unshift("Papaya");

console.log(`Element added before banana is: ${fruits_seasonal}`);

fruits_seasonal.push("Pineapple");

console.log(`Element added at last position is: ${fruits_seasonal}`);


console.log(`=========== Step 3 =============`);
var array = ["Banana", "Orange", "Apple", "Mango", "Water melon"];

const deleteElements = array.splice(3, 1);

console.log(`Remove element "Mango" from array: ${array}`);

console.log(`================= step 4 ============`);
const addElement = array.splice(3, 0, "Dragon Fruit");
console.log(`Insert element "Dragon Fruit": ${array}`);

console.log(`================= step 5 ============`);
const replace = array.splice(1, 1, "Kivi");
console.log(`Replace element "Orange" with "Kivi": ${array}`);

console.log(`================= step 6 ============`);
const  logElement = array.splice(0, 1);
console.log(`Log elements from starting index 1 to 4": ${array}`);

console.log(`================= step 7 ============`);
const  lastElement = array.slice(array.length-2);
console.log(`Last Three element in array": ${array}`);
