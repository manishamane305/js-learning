const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`===== Step 1 =====`);

const newArray = arrayNumbers.filter( (element)=>{

    return element > 50;

});

console.log(newArray);

console.log(`===== Step 2 =====`);

const newArrayOne = arrayNumbers.filter( (element)=>{

    return element%2==0;

});

console.log(newArrayOne);

console.log(`===== Step 3 =====`);

const newArrayTwo = arrayNumbers.filter( (element)=>{

    return element%2==1;

});

console.log(newArrayTwo);

console.log(`===== Step 4 =====`);

const newArrayThree = arrayNumbers.filter( (element)=>{

    return element%5==0;

});

console.log(newArrayThree);

console.log(`===== Step 5 =====`);
const filteredNumbers = arrayNumbers.filter(element => {
    return element > 20 && element < 50;
});

console.log(filteredNumbers);




