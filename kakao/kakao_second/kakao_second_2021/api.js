import axios from "axios";

const BASE_URL = "https://huqeyhi95c.execute-api.ap-northeast-2.amazonaws.com/prod";

const X_Auth_Token = "classified";
const Content_Type = "application/json";

export const START = async (problem) => {
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

export const getLocations = async (key) => {
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

export const getTrucks = async (key) => {
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

export const simulateCommand = async (key, com) => {
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

export const getScore = async (key) => {
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

export const Command = (bikesInfo, trucksInfo, typeofProblem) => {
	const result = [
		// {truck_id: 0, command: [2, 2, 5]},
		// {truck_id: 1, command: [1, 1, 5]},
	];
	return result;
};
