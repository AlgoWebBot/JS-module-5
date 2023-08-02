// increasing order
// function factoreal(number) {
//     var sum = 1;
//     for (var i = 1; i <= number; i++) {
//         sum *= i;
//         console.log(i, sum);
//     }
// }

// const number = 10;
// const factor = factoreal(number);


// decresing order
function factoreal(number) {
    var sum = 1;
    for (var i = number; i >= 1; i--) {
        sum *= i;
        console.log(i, sum);
    }
}

const number = 10;
const factor = factoreal(number);

