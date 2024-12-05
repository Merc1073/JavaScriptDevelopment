const button = document.getElementById("rollButton");
let randomNumber = document.getElementById("randomNumberLabel");

randomNumber.textContent = 5;

button.onclick = function()
{
    randomNumber.textContent = Math.floor(Math.random() * 6) + 1;
}