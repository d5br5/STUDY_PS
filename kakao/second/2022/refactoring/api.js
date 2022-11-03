import axios from "axios";

const BASE_URL =
	"https://huqeyhi95c.execute-api.ap-northeast-2.amazonaws.com/prod";

const X_Auth_Token = "d96b1e1180831a0bb5bbb28449bc97f7";
const Content_Type = "application/json";

export const path = {
	START: "start",
	WAITING_LINE: "waiting_line",
	GAME_RESULT: "game_result",
	USER_INFO: "user_info",
	MATCH: "match",
	CHANGE_GRADE: "change_grade",
	SCORE: "score",
};

export const start = async (problem) => {
	const { data } = await axios({
		method: "post",
		url: `${BASE_URL}/start`,
		headers: {
			"X-Auth-Token": X_Auth_Token,
			"Content-Type": Content_Type,
		},
		params: { problem },
	});
	return data;
};

export const get = async (path, key) => {
	const { data } = await axios({
		method: "get",
		url: `${BASE_URL}/${path}`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
	});
	return data;
};

export const put = async (path, payload, key) => {
	const { data } = await axios({
		method: "put",
		url: `${BASE_URL}/${path}`,
		headers: {
			Authorization: key,
			"Content-Type": Content_Type,
		},
		data: {
			...payload,
		},
	});
	return data;
};
