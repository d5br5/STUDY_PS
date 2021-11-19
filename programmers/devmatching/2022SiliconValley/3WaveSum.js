function solution(wave1, wave2) {
	const greatest = (a, b) => {
		if (b === 0) return a;
		return greatest(b, a % b);
	};
	const least = (a, b) => (a * b) / greatest(a, b);

	let max = least(wave1.length, wave2.length);
	let time1 = max / wave1.length;
	let time2 = max / wave2.length;
	let full1 = [...wave1];
	let full2 = [...wave2];
	for (let i = 1; i < time1; i++) {
		full1.push(...wave1);
	}
	for (let i = 1; i < time2; i++) {
		full2.push(...wave2);
	}

	let sums = sumwave(full1, full2);
	let min = rms(sums[0]);

	if (min === 0) return 0;

	for (let i = 1; i < sums.length; i++) {
		let sum = rms(sums[i]);
		if (sum === 0) return 0;
		if (isZero(sums[i])) return 0;
		if (sum < min) min = sum;
	}

	return min;

	function sumwave(w1, w2) {
		let result = [];
		let len = w1.length;
		let nw2 = [...w2, ...w2];

		for (let i = 0; i < len; i++) {
			let nw = [];
			for (let j = 0; j < len; j++) {
				nw.push(w1[j] + nw2[j + i]);
			}
			result.push(partition(nw));
		}
		return result;
	}

	function partition(wave) {
		let maxPart = [...wave];
		for (let i = 2; i < wave.length; i++) {
			// i는 덩어리 길이
			if (wave.length % i !== 0) continue;
			let count = wave.length / i; // count : 덩어리 개수
			let firstPart = wave.slice(0, i); // 첫 덩어리
			let matched = true;
			for (let j = 1; j < count; j++) {
				// 모든 덩어리에 대해
				let nowPart = wave.slice(i * j, i * j + i);
				for (let k = 0; k < firstPart.length; k++) {
					// 덩어리 내 각 자리에 대해
					if (firstPart[k] !== nowPart[k]) {
						matched = false;
						break;
					}
				}
				if (!matched) break;
			}
			if (matched) {
				maxPart = firstPart;
				break;
			}
		}
		return maxPart;
	}

	function isZero(wave) {
		for (let i = 1; i < wave.length; i++) {
			if (wave[i] !== wave[i - 1]) return false;
		}
		return true;
	}

	function rms(wave) {
		let sum = 0;
		for (let i = 0; i < wave.length; i++) {
			sum += wave[i] * wave[i];
		}
		return sum;
	}
}
