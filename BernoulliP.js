function Bernoulli(p, n, k){
	if(!(0 < p && p < 1) && !(1 <= k && k <= n))
		return false;
	return PmttACbnt(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function PmttACbnt(n, m){
	if(!(n >=m))
		return false;
	return Factorial(n) / (Factorial(n - m) * Factorial(m));
}

function Factorial(n){
	if(!(n >= 1))
		return false;
	var result = 1;
	while(n)
		result *= n--;
	return result;

}
