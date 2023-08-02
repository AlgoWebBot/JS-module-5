
function oddEven(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

const number = 11;
const oddOReven = oddEven(number);
console.log(oddOReven);