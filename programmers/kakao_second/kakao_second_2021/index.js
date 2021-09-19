import axios from "axios";

const BASE_URL =
	"https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";

const X_Auth_Token = "59a9b0e55b3d86ed94033ccf4948eff7";
const Content_Type = "application/json";

const START = async () => {
	const data = await axios({
		method: "post",
		url: BASE_URL,

		headers: {
			"X-Auth-Token": X_Auth_Token,
			"Content-Type": Content_Type,
		},
		params: {
			problem: 1,
		},
		// data: {},
	});

	return data;
};

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

const SIMULATE = async (commands) => {
	const data = await axios({
		method: "post",
		url: `${BASE_URL}/simulate`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
		params: {
			commands,
		},
	});
	return data;
};

const Command = (bikesInfo, trucksInfo, typeofProblem) => {
	const result = [
		{truck_id: 0, command: []},
		{truck_id: 0, command: []},
	];
	return result;
};

let {auth_key, problem, time} = START();

while (time < 720) {
	const bikesInfo = getLocations(auth_key);
	const trucksInfo = getTrucks(auth_key);
	const commands = Command(bikesInfo, trucksInfo, problem);
	const result = SIMULATE(commands);
	time = result.time;
}
