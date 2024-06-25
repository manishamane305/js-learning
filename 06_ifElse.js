function isEven(num){
    console.log(`Before if block`);
    if (num%2==0) {
        console.log(`EVEN Number`);
    }
    console.log(`After if block`);
}
isEven(10);
isEven(9);
isEven(1017);

console.log(`========= if else block ========`);
var isEvenOrOdd = function(num){
    if (num%2==0) {
        //console.log("EVEN");
        return "EVEN";
    }else {
        //console.log("ODD");
        return "ODD"
    }
}
//isEvenOrOdd(3);
//isEvenOrOdd(90);
var value = isEvenOrOdd(45);
console.log(`Given number 45 is ${value}`);
var value = isEvenOrOdd(70);
console.log(`Given number 70 is ${value}`);
var value = isEvenOrOdd(67);
console.log(`Given number 67 is ${value}`);
var value = isEvenOrOdd(98);
console.log(`Given number 98 is ${value}`);

var voteEligibility = function(age){
    if (age>=18) {
        console.log(`You are eligible for vote`);
    } else{
        console.log(`You are not eligible for vote`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);
