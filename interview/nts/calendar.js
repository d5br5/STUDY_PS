function getWorkDay(join_date, resign_date) {
	let [join_year, join_month, join_day] = join_date.split(" ")[0].split("/");
	let join_weekday = join_date.split(" ")[1];
	let [resign_year, resign_month, resign_day] = resign_date.split("/");

	join_year = parseInt(join_year);
	join_month = parseInt(join_month);
	join_day = parseInt(join_day);
	resign_year = parseInt(resign_year);
	resign_month = parseInt(resign_month);
	resign_day = parseInt(resign_day);

	let holidayCount = 0;

	if (join_year === resign_year) {
		holidayCount = getOneYearHoliday(
			join_year,
			join_month,
			join_day,
			resign_month,
			resign_day
		);
	} else {
		holidayCount += getOneYearHoliday(join_year, join_month, join_day, 12, 31);
		holidayCount += getFullYearHoliday(join_year + 1, resign_year - 1);
		for (let i = join_year + 1; i < resign_year; i++) {
			for (let j = 0; j < holidays.length; j++) {
				let [month, day] = holidays[i].split("/");
				if (isNotWeekend(i, month, day)) holidayCount++;
			}
		}
		holidayCount += getOneYearHoliday(
			resign_year,
			1,
			1,
			resign_month,
			resign_day
		);
	}

	function getFullYearHoliday(year1, year2) {
		if (year1 > year2) return 0;
		let lastOne = getNum(year1, 1, 1);
		let lastTwo = getNum(year2, 12, 31);
	}

	function getOneYearHoliday(year, month1, day1, month2, day2) {}
}

function getNum(year, month, day) {
	let dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let count = 0;
	for (let i = 1; i < year; i++) {
		if (isLunar(i)) {
			count += 366;
		} else {
			count += 365;
		}
	}
	for (let i = 0; i < month - 1; i++) {
		count += dates[i];
	}
	if (isLunar(year) && month > 2) count++;
	return count + day;
}

function isNotWeekend(year, month, day) {
	let num = getNum(year, month, day);
	if (num % 7 === 0 || num % 7 === 1) return false;
	return true;
}

function isLunar(year) {
	if (year % 400 === 0) return true;
	if (year % 4 === 0 && year % 4 !== 0) return true;
	return false;
}

const join_date = "2019/12/31 THU";
const resign_date = "2020/11/20";
const result = getWorkDay(join_date, resign_date);
console.log(result);
