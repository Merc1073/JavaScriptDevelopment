// Local + Global scope


// Here, x is a local variable, because it's inside of a function, so it's local to that function and cannot be used elsewhere
function doSomething()
{
    let x = 1;
    console.log(x);
}

function doSomethingElse()
{
    let x = 2;
    console.log(x);
}

// This is a global variable, and can be used anywhere
let x = 25;

function doSomethingElseAgain()
{
    console.log(x);
}

doSomething();
doSomethingElse();
doSomethingElseAgain();