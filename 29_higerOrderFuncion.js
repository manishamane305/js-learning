function greet(callbacks){
    console.log(`Good Morning `);
    callbacks();
    return function(){
        console.log(`See you soon...`);
    }
}
let sayBye = function(){
    console.log(`Bye.. `);
}
greet(sayBye)();




// replace

function greet(callbacks){
    console.log(`Good Morning `);
    callbacks();
    let innerFunction = function(){
        console.log(`See you soon...`);
    }
    return innerFunction;
}
let sayHii = function(){
    console.log(`Bye.. `);
}
greet(sayHii)();