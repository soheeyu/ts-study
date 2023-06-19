// void type
// undefined를 비롯해 값을 반환하지 않은 함수를 사용하는 경우 void를 기본적으로 사용
// 아무 값도 반환하고 싶지 않은 경우 어떤 값을 반환하도록 강요하지 않기 때문에 undefined 보다 void를 사용하는 것이 좋다

function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log('결과는:' + num);
	return;
}

printResult(add(6, 19));

// let someValue: undefined; // undefined는 타입스크립트에서 타입으로 사용할 수 있음


// function type
// let combineValues: Function; // 이 변수에는 무엇을 저장하든 함수가 되어야함!
// 매개변수의 같은 위치에서 어떤 유형 사용하려는 것인지 설명 가능
let combineValues: (a: number, b: number) => number; // number로 변환

combineValues = add;

console.log(combineValues(10, 19));


// callback (복습 필요..)
// 두 숫자를 결합한 다음 숫자를 조건에 부합해야 하는 callback으로 호출
// result가 number가 될 것 이라고 추론 가능

// 콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있다???

function addAndHandle(n1: number, n2: number, callBack: (num: number) => void) { // callback void : 여기서 반환되는 값으로는 아무 작업도 수행하지 않을거야
	const result = n1 + n2;
	callBack(result);
}

addAndHandle(19, 34, (result) => {
	console.log(result);
	return result;
}); // 19, 34, 익명함수 전달(익명 함수로 number를 받게됨)