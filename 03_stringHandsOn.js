var myString = " Hey you are doing good, keep it up ";
console.log(`Given string is: ${myString}`);


function stringHandsOn(){
var result = myString.length;
console.log(`Length of the string is: ${result}`);


var trimme = myString.trim(" ");
console.log(`String after using trim is: ${trimme} `);

var trimresult = trimme.length;
console.log(`Leading and trailing extra spaces count is: ${trimresult}`);

var remcount = result - trimresult;
console.log(`Total number of extra spaces count is: ${remcount}`);

var firstchar = trimme.slice(0,1)
console.log(`First character after trim is: ${firstchar}`);

var lastchar =  trimme.slice(-1)
console.log(`Last character is after trim: ${lastchar}`);

var totalwords  = trimme.split(" ");
console.log(`Count of total words available in string after step 3: ${totalwords.length}`);

var charindex = trimme.indexOf("good")
console.log(`Index of word good is: ${charindex}`);

var substringchar = trimme.substring(22)
console.log(`Substring from index 22 using substring is: ${substringchar}`);

var checkendswith = trimme.endsWith("up");
console.log(`String ends with up after step 3 is: ${checkendswith}`);
console.log(`String start with Hey after trimming is: ${trimme.startsWith("Hey")}`);
}
stringHandsOn();