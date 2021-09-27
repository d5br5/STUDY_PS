import {
	START,
	getLocations,
	getTrucks,
	getScore,
	simulateCommand,
	Command,
} from "./api.js";

const key = "248baefe-8a9c-4acc-a41f-51df74c5111d";

// while (oneTime < 720) {
let {
	data: {locations},
} = await getLocations(key);
console.log(locations);

let {
	data: {trucks},
} = await getTrucks(key);
console.log(trucks);

let commands = [];
commands.push(makeCom(0, [4, 4, 4, 4, 5, 5]));
// commands = Command(locations, trucks, 1);
console.log(commands);

let {data: simulData} = await simulateCommand(key, commands);
console.log(simulData);
// oneTime = simulData.time;
// }

// const {
// 	data: {score: scoreOne},
// } = await getScore(oneKey);
// console.log(scoreOne);
