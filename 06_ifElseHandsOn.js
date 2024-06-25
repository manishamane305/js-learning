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

console.log(`============ Step 3 ==========`);
var strLength = function(str){
    if(str.length >=10){
        console.log(`String contains more than 10 character`);
    } else{
        console.log(`String does not contains more than 10 character`);

    }
}
strLength("Javascript ES6");

console.log(`============ Step 4 ==========`);

var strLength = function(str){
    if(str.startsWith("Java")){
        console.log(`Given string is ${str} starts with word "Java`);
    }else{
        console.log(`Given string is ${str}  not starts with word "Java`);

    }
}
strLength("JavaScript Language");
strLength("Programming Language");