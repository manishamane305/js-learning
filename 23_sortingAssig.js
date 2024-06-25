const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`sorting ascending order by writing custom logic `);
arrayRollNumbers.sort((n1, n2)=>{

    return n1>n2 ? 1 : -1;

});
console.log(arrayRollNumbers);

console.log(`Greatest number in array`);
arrayRollNumbers.sort((a, b) => a - b);
let greatestNumber = arrayRollNumbers [arrayRollNumbers.length-1];

console.log(greatestNumber);


console.log(`Smallest number in array`);
arrayRollNumbers.sort((a, b) => a - b);
let smallestNumber = arrayRollNumbers[0];

console.log(smallestNumber);

console.log(`Remove duplicates from array`);
let uniqueNumbers = [...new Set(arrayRollNumbers)];
console.log(uniqueNumbers);