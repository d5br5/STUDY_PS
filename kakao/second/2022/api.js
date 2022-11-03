import axios from "axios";

const BASE_URL =
	"https://huqeyhi95c.execute-api.ap-northeast-2.amazonaws.com/prod";

const X_Auth_Token = "8d9e04880b49dc045094a021b4c752b9";
const Content_Type = "application/json";

export const START = async (problem) => {
	const {data} = await axios({
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
	return data;
};

export const getWaiting = async (key) => {
	const {data} = await axios({
		method: "get",
		url: `${BASE_URL}/waiting_line`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

export const getResult = async (key) => {
	const {data} = await axios({
		method: "get",
		url: `${BASE_URL}/game_result`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

export const getUserInfo = async (key) => {
	const {data} = await axios({
		method: "get",
		url: `${BASE_URL}/user_info`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

export const doMatch = async (key, pairArr) => {
	const {data} = await axios({
		method: "put",
		url: `${BASE_URL}/match`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
		data: {
			pairs: pairArr,
		},
	});
	return data;
};

export const changeGrade = async (key, coms) => {
	const data = await axios({
		method: "put",
		url: `${BASE_URL}/change_grade`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
		data: {
			commands: coms,
		},
	});
	return data;
};

export const getScore = async (key) => {
	const {data} = await axios({
		method: "get",
		url: `${BASE_URL}/score`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};
