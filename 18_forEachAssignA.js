const arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`========= Step 1 ========`);

arrayNumber.forEach((element, index) => {
console.log(`Array element with it's index is:${element} , ${index}`);
});

console.log(`========= Step 2 ========`);
arrayNumber.forEach((element) => {
if (element >= 0) {
    console.log(`Positive numbers in array is: ${element}`);
}
});

console.log(`========= Step 3 ========`);
const negativeNumbers = arrayNumber.filter(element => element < 0);

//console.log(`Negative numbers in array are: ${negativeNumbers}`);
negativeNumbers.forEach(element => {
    console.log(`Negative number in array is: ${element}`);
});

console.log(`========= Step 4 ========`);
arrayNumber.forEach((value)=>{
    if(value%2==0){
        console.log(`Even number in array is: ${value}`);
    }
});

console.log(`========= Step 5 ========`);
let sum = 0;
arrayNumber.forEach( (element) => {
    sum = sum + element;
} );
console.log(`Sum is : ${sum}`);

console.log(`========= Step 6 ========`);
arrayNumber.forEach((currentValue, index) => {
    //console.log(currentValue, index);
    if (index%2 == 0) {
        console.log(`Even index in array is ; ${index}`);
    }
});