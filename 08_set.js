const setRollNum = new Set();

setRollNum.add(10);

setRollNum.add(20);

setRollNum.add(30);

setRollNum.add(20);

setRollNum.add(15);

console.log(setRollNum);

 

console.log(setRollNum.size);

setRollNum.delete(30);

console.log(setRollNum);

 

console.log(setRollNum.has(30));

console.log(`Traversing set`);

for (const element of setRollNum) {

    console.log(element);

}


//can you remove duplicate element from array   Interview IMP

console.log(`To remove duplicate element from the array`);

let array = [40, 20, 30, 40, 15, 30, 20];

array = [...new Set(array)];

console.log(array);


//Second Way

// const mySet = new Set();

// for (const element of array) {

//     mySet.add(element);

// }

// console.log(mySet);

// const newArray = [];

// for (const value of mySet) {

//     newArray.push(value);

// }

// console.log(newArray);

// array = newArray;

// console.log(array);



let mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet);

mySet.add(30);
console.log(mySet);