import fetch from "node-fetch";
import axios from "axios";

const BASE_URL =
	"https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";

const X_Auth_Token = "4483aab58ced82f3bbd44f3436399c6b";
const Content_Type = "application/json";

const START = async (problem) => {
	const data = await axios({
		method: "post",
		url: `${BASE_URL}/start`,

		headers: {
			"X-Auth-Token": X_Auth_Token,
			"Content-Type": Content_Type,
		},
		params: {
			problem,
		},
	});
	return data.data;
};

// const fetchStart = async () => {
// 	return await fetch(`${BASE_URL}/start`, {
// 		method: "post",
// 		headers: {
// 			"X-Auth-Token": X_Auth_Token,
// 			"Content-Type": Content_Type,
// 		},
// 		body: JSON.stringify({problem: 1}),
// 	});
// };

const getLocations = async (key) => {
	const data = await axios({
		method: "get",
		url: `${BASE_URL}/locations`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

const getTrucks = async (key) => {
	const data = await axios({
		method: "get",
		url: `${BASE_URL}/trucks`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

const simulateCommand = async (key, com) => {
	const data = await axios({
		method: "put",
		url: `${BASE_URL}/simulate`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
		data: {
			commands: com,
		},
	});
	return data;
};

const getScore = async (key) => {
	const data = await axios({
		method: "get",
		url: `${BASE_URL}/score`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

const Command = (bikesInfo, trucksInfo, typeofProblem) => {
	const result = [
		// {truck_id: 0, command: [2, 2, 5]},
		// {truck_id: 1, command: [1, 1, 5]},
	];
	return result;
};

// const data = await fetchStart();
// const transData = await data.json();

// console.log(transData);

let {auth_key: oneKey, time: oneTime} = await START(1);

// console.log(oneKey, oneTime);

while (oneTime < 720) {
	let {
		data: {locations},
	} = await getLocations(oneKey);
	// console.log(locations);

	let {
		data: {trucks},
	} = await getTrucks(oneKey);
	// console.log(trucks);

	let commands = Command(locations, trucks, 1);
	// console.log(commands);

	let {data: simulData} = await simulateCommand(oneKey, commands);
	// console.log(simulData);
	oneTime = simulData.time;
}

const {
	data: {score: scoreOne},
} = await getScore(oneKey);

// console.log(scoreOne);

//

let {auth_key: twoKey, time: twoTime} = await START(2);
// console.log(twoKey, twoTime);

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
