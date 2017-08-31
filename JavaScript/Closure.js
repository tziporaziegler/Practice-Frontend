// will log 5, 5, 5, 5, 5
for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, i * 1000);
}

// will log 0, 1, 2, 3, 4
for (var i = 0; i < 5; i++) {
	(function(x) {
		setTimeout(function() {
			console.log(x);
		}, x * 1000);
	})(i);
}