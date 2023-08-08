let sentence = "This is a Sentence";
let uppercaseCount = 0;

for (let i = 0; i < sentence.length; i++) {
	if (sentence[i] >= 'A' && sentence[i] <= 'Z') {
		uppercaseCount++;
	}
}

if (uppercaseCount <= 2) {
	console.log("Предложение содержит не более 2 заглавных букв.");
} else {
	console.log("Предложение содержит более 2 заглавных букв или не содержит их вовсе.");
}


