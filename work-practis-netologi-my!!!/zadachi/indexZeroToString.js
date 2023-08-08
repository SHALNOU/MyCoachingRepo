const stringArray = "023m0df0dfg0";

function content(str) {
    let array = str.split("");
    let newArray = array.filter((arr) => arr === "0");
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
