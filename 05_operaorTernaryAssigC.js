console.log(`========= Step 1 =========`);

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21)
    ? `Hey ${boyName} you are eligible for marriage`
    : `${boyName} you are not eligible for marriage`;
    return result;

}
var message = maleMarriageEligibility("Male", 25, "Billgates");
console.log(message);
var message = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(message);

console.log(`========= Step 2 =========`);

function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender=="Female" && age>=18)
    ? `Hey ${girlName} you are eligible for marriage`
    : `${girlName} you are not eligible for marriage`;
    return result;

}
var message = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(message);
var message = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(message);