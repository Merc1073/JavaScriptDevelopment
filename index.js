const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert(`Please enter a valid number.`);
    }

    else if(guess > maxNum)
    {
        window.alert(`Number cannot exceed maximum number of ${maxNum}.`)
    }

    else if(guess < minNum)
    {
        window.alert(`Number cannot go below minimum number of ${minNum}.`)
    }

    else
    {
        attempts++;
        if(guess < answer)
        {
            window.alert(`Too low!`)
        }

        else if(guess > answer)
        {
            window.alert(`Too high!`)
        }

        else
        {
            window.alert(`Correct! The answer is ${answer}. Total attempts: ${attempts}.`)
            running = false;
        }
    }

}

console.log(answer);