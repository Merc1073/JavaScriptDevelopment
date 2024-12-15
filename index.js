// reduce = reduces elements of an array to a single value

const items = [10, 20, 30, 40, 50];

const total = items.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next)
{
    return previous + next;
}

