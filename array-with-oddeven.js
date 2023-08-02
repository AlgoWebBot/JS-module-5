
function oddEvenSum(arr) {
    var evensum = 0;
    var oddsum = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            evensum += arr[i];
        } else {
            oddsum += arr[i];
        }
    }
    console.log(evensum, oddsum);
}

const array = [5, 2, 1, 3, 6, 8, 7, 9];
const sum = oddEvenSum(array);