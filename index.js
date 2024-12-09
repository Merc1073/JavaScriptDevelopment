let arrayExample = ["one", "two", "three"];

console.log(arrayExample[0]);
console.log(arrayExample[1]);
console.log(arrayExample[2]);

arrayExample[2] = "four";
console.log(arrayExample[2]);

let numOfElements = arrayExample.length;

let index = arrayExample.indexOf("two");
console.log(index);


for(let i = 0; i < numOfElements; i++)
{
    console.log(arrayExample[i]);
}

for(let num of arrayExample)
{
    console.log(num);
}

arrayExample.sort().reverse();

for(let num of arrayExample)
    {
        console.log(num);
    }