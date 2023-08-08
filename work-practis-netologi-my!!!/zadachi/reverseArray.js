const newArray = [123, 456, 789];

function reverseArray(arr) {
    let result = [];

    for (let number of arr) {
        let reverse = Number(number.toString().split("").reverse().join(""));

        result.push(reverse);
    }

    return result;
}

console.log(reverseArray(newArray));
