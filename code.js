// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x){
    if (typeof x === 'string'&& x)
    return ("Hello, " + x +"!");
    return ("Hello, World!")
}

function isFive(x){
    return (parseInt(x)===5)
}

function add(x,y){
    if (parseInt(x) == x && parseInt(y) == y)
        return parseInt(x)+parseInt(y);
    return "NaN";
}

function isEven(x){
    return (parseInt(x)%2===0)
}

function isVowel(x){
    if(typeof x === 'string')
    x = x.toLowerCase();
    return (x==="a"||x==="e"||x==="i"||x==="o"||x==="u");
}