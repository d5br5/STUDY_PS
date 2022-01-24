let {auth_key: twoKey, time: twoTime} = await START(2);

// console.log(twoKey, `twoTime);

while (twoTime < 720) {
	let {
		data: {locations},
	} = await getLocations(twoKey);
	// console.log(locations);

	let {
		data: {trucks},
	} = await getTrucks(twoKey);
	// console.log(trucks);

	let commands = Command(locations, trucks, 2);
	// console.log(commands);

	let {data: simulData} = await simulateCommand(twoKey, commands);
	// console.log(simulData);
	twoTime = simulData.time;
}

const {
	data: {score: scoreTwo},
} = await getScore(twoKey);

// console.log(scoreTwo);
