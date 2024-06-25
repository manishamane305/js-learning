const arrayNumbers = [20, 11, 40,25, 37,49, 9, 90, 60, 2, 19] ;

const sum = arrayNumbers.reduce( (runningTotal, value)=>{

    return runningTotal + value;

},0 );

console.log(sum);

console.log(`step 2`);
const newArray = arrayNumbers.filter( (element)=>{

    return element%5==0;

});
console.log(newArray);
const sumOne = newArray.reduce( (runningTotal, value)=>{

    return runningTotal + value;

},0 );

console.log(sumOne);