const testNumber = 28;
let emptyMap = '';

const printMapToConsole = (map) => {
}

const generateMap = (rows, cols) => {

}

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

const rowColCounter = (number) => {
	// --- begins at 1 and therefore starts with one row/col ---
	let cols = 1;
	let rows = 1;
	let stepLength = 1;
	let cornerTicker = false;
	let stepcounter = 0;

	for(let i = 1; i <= number; i++){
		console.log(`current : ${i}`);
		if(stepcounter === stepLength){
			if(cornerTicker === true){
				stepLength++;
				rows++;
				console.log(`--- Cols : ${cols}, Rows : ${rows} ---`);
				cornerTicker = false;
			} else {
				cols++;
				console.log(`--- Cols : ${cols}, Rows : ${rows} ---`);
				cornerTicker = true;
			}
			stepcounter = 0;
		}
		stepcounter++;
	}
	console.log(`--- RETURNING ${cols} Cols and ${rows} Rows ---`);
	return([cols,rows]);
}

rowColCounter(testNumber);
