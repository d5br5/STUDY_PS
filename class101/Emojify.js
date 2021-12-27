export default function emojify(message, emoji) {
	const INVALID = "invalid string";
	console.log(message);
	try {
		let convertedStr = String(message);
		let splitedStr = convertedStr.split(" ");
		if (splitedStr.length === 1) return INVALID;
		return splitedStr.join(emoji);
	} catch (e) {
		return INVALID;
	}
}
