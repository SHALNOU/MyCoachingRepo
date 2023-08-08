const number = 123456;

function numSumPara(num) {
    const newArray = [];
    const array = num.toString().split("");
    for (let i = 0; i < array.length; i += 2) {
        const forElem = array[i];
        const letElem = array[i + 1];
        const result = Number(`${forElem}${letElem}`);
        newArray.push(result);
    }
    const reduceArray = newArray.reduce((acc, el) => acc + el, 0);

    return reduceArray;
}

console.log(numSumPara(number));
