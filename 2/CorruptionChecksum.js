if(typeof require !== 'undefined') XLSX = require('xlsx');
const workbook = XLSX.readFile('spreadsheet_v2.xlsx');
const myData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:1});

const corruptionChecksum = (data) => {
	let finalSum = 0;

	// my LOOP
	for(let i = 0; i < data.length; i++){
		let min = 10000;
		let max = 0;
		for(let j = 0; j < data[i].length; j++){
			const current = parseInt(data[i][j]);
 			current > max ? max = current : null;
 			current < min ? min = current : null;
			if(j === data[i].length - 1){
				finalSum = finalSum + max - min;
			}
		}
	}
	return finalSum;
}

console.log(corruptionChecksum(myData))
