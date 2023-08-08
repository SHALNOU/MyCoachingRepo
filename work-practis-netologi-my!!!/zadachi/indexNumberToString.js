const stringArray = "023m0d252f0d8ie5634fg0";

function content(str) {
    let array = str.split("");
    let newArray = array.filter((arr) => !isNaN(arr));
    let twoArr = [];

    console.log(newArray);

    for (let i = 0; i < array.length; i++) {
        let curent = array[i];

        if (curent === "0") {
            twoArr.push(curent);
        }
    }

    return console.log(twoArr);
}

content(stringArray);
