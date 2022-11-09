const API_END_POINT = "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/";

export const request = async (nodeId = "") => {
	const option = {
		method: "get",
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const response = await fetch(`${API_END_POINT}${nodeId}`, option);
		if (!response.ok) throw new Error("server 상태 이상");
		return await response.json();
	} catch (e) {
		throw new Error(`something goes wrong. ${e.message}`);
	}
};
