// type mapField = {
// 	distanceToCenter:Function,
// 	value: number,
// 	x: number,
// 	y: number,
// }
//

// let map = {
// 	'rows':{[
// 		'x1':{
//
// 		}
// 	]}
// }

class spiralField{
		addNumber(){

		}
}

const testNumber = 27;

const printMap = (map) => {

}

const spiralMemoryGen = (number) => {
	let map = '';
}

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

const rowColCounter = (number) => {
	let cols = 1;
	let rows = 1;
	let stepLength = 1;
	let cornerTicker = false;
	let stepcounter = 0;

	for(let i = 1; i <= number; i++){
		console.log(`current : ${i}`);
		if(stepcounter === stepLength){
			if(cornerTicker === true){
				stepLength = stepLength + 1;
				//console.log(`NEW WALK LENGTH: ${stepLength}`)
				rows++;
				console.log(`--- Cols : ${cols}, Rows : ${rows} ---`);
				cornerTicker = false;
			} else {
				cols++;
				console.log(`--- Cols : ${cols}, Rows : ${rows} ---`);
				cornerTicker = true;
			}
			//console.log(`step : ${stepcounter} ... RESETTING`);
			stepcounter = 0;
		} else {
			//console.log(`step : ${stepcounter}`);
		}
		stepcounter++;
	}
	return([cols,rows]);
}

rowColCounter(testNumber);
