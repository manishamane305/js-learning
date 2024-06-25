console.log(`===== Sum the numbers from 1 to 5 =======`);
var sum = 0;
for (let i = 1; i <=5; i++) {
    sum = sum + i;  
}
console.log(sum);

console.log(`===== Sum the even numbers from 0 to 50 =======`);
var sumEven = 0;
for (let i = 0; i <=50; i=i+2) {
    sumEven = sumEven + i;  
}
console.log(sumEven);


function sumOfCube(){
console.log(`===== Sum of cube of numbers from 1 to 5 =======`);
var sumOfCube = 0;
for (let i = 1; i <=5; i++) {
    var cube = i * i * i;
    sumOfCube = sumOfCube + cube;  
}
console.log(sumOfCube);
}
sumOfCube();


