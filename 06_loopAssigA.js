console.log(`========= Step 1 ========`);

var str = "I am very good IT Developer";
var vowels = "aeiou";
var counter= 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if(vowels.includes(chLowerCase)){
        counter++;
    }
}
console.log(`Total number of vowels in "I am very good IT Developer" is:  ${counter}`);

console.log(`========= Step 2 ========`);
//console.log(`===== Sum of cube of numbers from 1 to 5 =======`);
function sumOfCube(){
    var sumOfCube = 0;
    for (let i = 1; i <=5; i++) {
        var cube = i * i * i;
        sumOfCube = sumOfCube + cube;  
    }
    console.log(`Cube of number from 1 o 5 is: ${sumOfCube}`);
    }
    sumOfCube();


console.log("============ STEP 3 ============");
function oddPositionChars(str){
    var concat = "";
    for(let index =1; index < str.length; index = index + 2){
        var ch = str.charAt(index);
        if(ch == " "){
            continue;
        }
        concat = concat + " "+ ch;
    }
    console.log(`Odd positioned characters of "${str}": ${concat}`);
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be UI IT Champ");
