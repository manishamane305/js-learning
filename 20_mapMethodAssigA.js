const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`==== Step 1 ====`);
const newArray = arrayNumbers.map((element) => {
    return element + 10;
});
console.log(newArray);

console.log(`==== Step 2 ====`);
const newArrayOne = arrayNumbers.map((element) => {
    return Math.pow(element, 3);
});
console.log(newArrayOne);

console.log(`==== Step 3 ====`);
const newArrayTwo = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(newArrayTwo);

