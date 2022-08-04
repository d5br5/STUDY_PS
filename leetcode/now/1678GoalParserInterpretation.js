/** 9182 5273
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
	let str = "";
	for (let i = 0; i < command.length; i++) {
		let now = command[i];
		if (now === "G") str += "G";
		if (now === "(") {
			if (command[i + 1] === ")") {
				str += "o";
				i += 1;
			} else {
				str += "al";
				i += 3;
			}
		}
	}
	return str;
};
