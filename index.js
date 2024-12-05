const ageInput = document.getElementById("ageInput");
const mySubmit = document.getElementById("ageButton");
const resultElement = document.getElementById("resultParagraph");

let age;

mySubmit.onclick = function()
{

    age = ageInput.value;
    age = Number(age);

    if(age >= 18)
        {
            resultElement.textContent = `Welcome to the site.`;
        }
        
        else if(age < 0)
        {
            resultElement.textContent = `You haven't been born yet!`;
        }
        
        else
        {
            resultElement.textContent = `You must be 18+ to enter this site.`;
        }
}