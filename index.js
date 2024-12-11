// Rest = Bundles elements into an array for a function to work with (the opposite of what spread does.)


function openFridge(...foods)
{
    console.log(foods);
}

const food1 = "banana";
const food2 = "apple";
const food3 = "orange";
const food4 = "pineapple";

openFridge(food1, food2, food3, food4);


function getFoods(...foods)
{
    return foods;
}

const foods2 = getFoods(food1, food2, food3, food4);
console.log(foods2);



function sum(...numbers)
{
    result = 0;

    for(let number of numbers)
    {
        result += number;
    }

    return result;
}


function getAverage(...numbers)
{
    result = 0;

    for(let number of numbers)
    {
        result += number;
    }

    return result / numbers.length;
}


total = sum(1, 2, 3, 4, 5);
average = getAverage(1, 2, 3, 4, 5);

console.log(total);
console.log(average);



function combineStrings(...strings)
{
    return strings.join(" ");
}

const exampleSentence = combineStrings("this", "is", "a", "sentence!");
console.log(exampleSentence);