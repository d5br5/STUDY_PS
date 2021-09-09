function solution(new_id) {
	let allowed = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"0",
		"-",
		"_",
		".",
	];
	let first = new_id.toLowerCase();
	let second = first
		.split("")
		.filter((a) => allowed.includes(a))
		.join("");
	let third = second[0];
	for (let i = 1; i < second.length; i++) {
		if (second[i] === "." && second[i - 1] === ".") continue;
		third += second[i];
	}
	let fourth = third;
	if (fourth[0] === ".") fourth = fourth.slice(1);
	if (fourth[fourth.length - 1] === ".")
		fourth = fourth.slice(0, fourth.length - 1);

	let fifth = fourth;
	if (fifth === "") fifth = "a";

	let sixth = fifth;
	if (sixth.length >= 16) sixth = sixth.slice(0, 15);
	if (sixth[14] === ".") sixth = sixth.slice(0, 14);

	if (sixth.length === 1) return sixth + sixth + sixth;
	if (sixth.length === 2) return sixth + sixth[1];
	return sixth;
}
