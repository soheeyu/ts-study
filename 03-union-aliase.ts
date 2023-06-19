// combine 더하기 연산자는 숫자와 문자열 모두 포함 가능

// union type
// 서로 다른 종류의 값을 사용해야 하는 경우 사용

// literal type
// string, number 두 가지, 문자열이나 숫자에 정확한 값을 지정할 수 있음

// alias type
// 타입에 직접 이름을 부여 할 수 있음 

type Combinale = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
	input1: Combinale, // number | string
	input2: Combinale, // number | string
	// union + literal
	// 두 문자열만 특정해서 허용하겠다
	resultConversion: ConversionDescriptor //'as-number' | 'as-text'
	) {
	let result; // block scope
	if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') { // 두 값을 결합하기 전에 변환
		result = +input1 + +input2; // input 앞에 + 기호 붙어 숫자로 변환되도록
	} else { 
		result = input1.toString() + input2.toString();
	} 
	return result;

	// 먼저 있는 조건 타입 확인 후 계산
	// if (resultConversion === 'as-number') {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
	
}

const combineAges = combine(10, 20, 'as-number');
console.log(combineAges);

const combineStringAges = combine('123', '45', 'as-number'); 
console.log(combineStringAges);

const conbineNames = combine('소희','졸령...', 'as-text');
console.log(conbineNames);


// alias type을 통해 타입을 직접 생성할 수 있음. union type 뿐 아니라 객체 타입에도 별칭을 붙일 수 있다
// 불필요한 반복을 줄이고 타입을 중심으로 관리할 수 있음
type User = { name: string; age: number };
const user1: User = { name: 'Max', age: 30 }; 

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
} 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}