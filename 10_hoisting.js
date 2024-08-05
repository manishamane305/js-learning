// console.log(city);  // we can access using var keyword before declaration
// var city;


// console.log(age);   // in let we can not log value before declaration
// let age;

// console.log(pin);   //we can not log value before declaration
// const pin = 462789;


console.log(`=============== Function==============`);

show(); //Named Function   // is is hosted 
function show() {
    console.log("show");
    
}


//Function Expression  // it is not hosted 
display();
var display = function(){
    console.log("display");
}


