if(typeof require !== 'undefined') XLSX = require('xlsx');
const workbook = XLSX.readFile('spreadsheet_v2.xlsx');
const myData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:1});

const corruptionChecksumEven = (data) => {
	let finalSum = 0;

	// my LOOP
	for(let i = 0; i < data.length; i++){
		for(let j = 0; j < data[i].length; j++){
			const current = parseInt(data[i][j]);
			for(let u = 0; u < data[i].length; u++){
				const temp = parseInt(data[i][u]);
				if(current % temp === 0 && current !== temp){
					finalSum = finalSum + (current/temp);
				}
			}
		}
	}
	return finalSum;
}

console.log(corruptionChecksumEven(myData))
