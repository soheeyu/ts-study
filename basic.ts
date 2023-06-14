function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	//	if (typeof n1 !== 'number' || typeof n2 !== 'number') {
	//		throw new Error('틀렸어!');
	//	}
	let result = n1 + n2; // 계산 따로 변수로 담아줌
	if ( showResult ) {
		// console.log(phrase + n1 + n2); 문자열과 함께 계산되면 모두 문자열로 반환
		console.log(phrase + result);
	} else {
		// return n1 + n2;
		return result;
	}
}

let number1 = 5;
let number2 = 12.3;
let printResult = true;
let resultPhrase = '결과는...:'


add(number1, number2, printResult, resultPhrase)