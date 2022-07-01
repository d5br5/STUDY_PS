// time exceed

function checkInclusion(s1: string, s2: string): boolean {
	function perm(s2: string): boolean {
		let a = s1.split("").sort();
		let b = s2.split("").sort();
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	}
	for (let i = 0; i <= s2.length - s1.length; i++) {
		if (!s1.includes(s2[i])) continue;
		if (perm(s2.slice(i, i + s1.length))) return true;
	}
	return false;
}

// 1466 1638

function checkInclusion2(s1: string, s2: string): boolean {
	let obj = {};
	for (let i = 0; i < s1.length; i++) {
		if (obj[s1[i]]) {
			obj[s1[i]]++;
		} else {
			obj[s1[i]] = 1;
		}
	}

	function perm(s2: string): boolean {
		let obj2 = { ...obj };
		for (let i = 0; i < s2.length; i++) {
			if (obj2[s2[i]]) {
				obj2[s2[i]]--;
				if (obj2[s2[i]] < 0) return false;
			} else {
				return false;
			}
		}
		let arr = Object.values(obj2);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== 0) return false;
		}
		return true;
	}

	for (let i = 0; i <= s2.length - s1.length; i++) {
		if (!s1.includes(s2[i])) continue;
		if (perm(s2.slice(i, i + s1.length))) return true;
	}

	return false;
}
