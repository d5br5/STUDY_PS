var x = 50;

function func() {
	let x = 10;
	(function () {
		console.log(x);
	})();
}

var print = function () {
	console.log(x);
};

func();
