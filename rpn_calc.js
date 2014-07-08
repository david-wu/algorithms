
var rpn = function(array){
	var stack = [];
	var operators = '* + / -'.split(' ');

	while(input.length > 0){
		var val = array.shift();
		if(operators.indexOf(val) !== -1){
			var operand1 = stack.pop();
			var operand2 = stack.pop();

			var expression = operand2+val+operand1
			var answer = eval(expression);
			console.log([expression, answer])
			stack.push(answer);
		}else{
			stack.push(val)
		}
	}

	return answer;
}

var input = '1 2 + 4 * 5 + 3 -'.split(' ');
console.log(rpn(input));