// This call to the function is equivalent to 10! and will return 3,628,800
(function f(n) {
	return ((n > 1) ? n * f(n - 1) : n)
})(10)