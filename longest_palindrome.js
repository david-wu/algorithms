Lpd = function(string){
	var arr = string.split('');
	var longestPalindrome = '';
	var length = 0;

	for(var i = 0; i < arr.length; i++){
		for(var j = i+1; j < arr.length; j++){
			var candidate = arr.slice(i,j).join('');
  			if(Lpd.isPalindrome(candidate)){
				// console.log(candidate);
				if(candidate.length > length){
					length = candidate.length;
					longestPalindrome = candidate;
				}
			}
		}
	}

	return longestPalindrome;
}

Lpd.isPalindrome = function(string){
	return (string === string.split('').reverse().join(''));
}

console.log(Lpd('stringracecargerw'));
