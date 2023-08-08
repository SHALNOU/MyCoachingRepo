const str = "abcdefg";

console.log(str);

function deleteSymbol(str) {
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3 !== 0) {
            newString += str[i];
        }
    }

    return newString;
}

console.log(deleteSymbol(str));
