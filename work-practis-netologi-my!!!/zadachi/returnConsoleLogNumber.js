function consoleNumbersWithEvenSecondToLastDigit() {
	for (let i = 10; i <= 1000; i++) {
		const secondToLastDigit = Math.floor(i / 10) % 10;
		if (secondToLastDigit % 2 === 0) {
			console.log(i);
		}
	}
}

consoleNumbersWithEvenSecondToLastDigit();
