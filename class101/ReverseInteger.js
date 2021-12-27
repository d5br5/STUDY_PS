function solution(N) {
	var enable_print = N % 10;
	while (N > 0) {
		if (enable_print == 0 && N % 10 != 0) {
			enable_print = 1;
		}
		if (enable_print >= 1) {
			process.stdout.write((N % 10).toString());
		}
		N = Math.floor(N / 10);
	}
}
