import fetch from "node-fetch";
import axios from "axios";

const BASE_URL =
	"https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";
const BASE_URL2 = "https://jsonplaceholder.typicode.com";

const testURL = "https://jsonplaceholder.typicode.com/todos/1";
const testURL2 =
	"https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2021kakao/problem1_day-1.json";

const X_Auth_Token = "59a9b0e55b3d86ed94033ccf4948eff7";
const Content_Type = "application/json";

const getjson = async () => {
	const data = await axios.get(testURL2);
	console.log(data);
};

const startAPI = async () => {
	const data = await axios({
		method: "post",
		url: BASE_URL,

		headers: {
			"X-Auth-Token": X_Auth_Token,
			"Content-Type": "application/json",
		},
		params: {
			problem: 1,
		},
		// data: {},
	});

	console.log(data);
};

// getjson();
startAPI();

// axios.request({
// 	method: "POST",
// 	url: `https://www.test.com`,
// 	headers: {"Content-Type": "application/json"},
// 	data: {password: "testpw123"},
// });
