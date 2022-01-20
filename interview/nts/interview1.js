function solution(input) {
	const splited = input.split("_");
	let result = "";
	if (splited.length === 1) {
		// camel
		for (let i = 0; i < input.length; i++) {
			if (input[i].toUpperCase() === input[i]) {
				// upper
				result += "_" + input[i].toLowerCase();
			} else {
				//lower
				result += input[i];
			}
		}
	} else {
		// snake
		result += splited[0];
		for (let i = 1; i < splited.length; i++) {
			result += splited[i][0].toUpperCase() + splited[i].slice(1);
		}
	}
	return result;
}

console.log(solution("this_is_long_variable_name"));
console.log(solution("thisIsLongVariableName"));
