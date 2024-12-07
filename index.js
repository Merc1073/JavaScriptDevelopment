// Learning Functions

function repetitiveCode()
{
    console.log("This");
    console.log("is");
    console.log("a");
    console.log("very");
    console.log("long");
    console.log("sentence!");
}

repetitiveCode();
repetitiveCode();
repetitiveCode();





// Passing parameters/arguments
function addTwoNums(a, b)
{
    return a + b;
}

let result = addTwoNums(4, 7);

console.log(result);





// Check if number is even or odd
function evenOrOdd(num)
{
    if(num % 2 == 0)
    {
        console.log(`${num} is even.`)
    }

    else
    {
        console.log(`${num} is odd.`)
    }
}


evenOrOdd(68);