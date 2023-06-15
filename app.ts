// obeject type
// 항상 키와 값(key-value pair)으로 값을 넣어야함
// let user = {}; 
// 객체 값 접근 user.key

// array type
// 배열은 순서가 있는 값으로 그 순서는 인덱스로 구성 (번호는 0부터 매김)
// let arr = [];
// 배열 값 접근 arr[index];


// * 타입스크립트에만 존재하는 타입
// tuple type
// 배열은 맞지만 개수가 고정된 배열
let user1: [number, string, string]; // 타입 순서 정하기
user1 = [1, 'setType77@example.com', '1q2w3e4r']; // 순서에 맞지 않으면 에러
// 하지만 push를 사용하면 배열의 길이가 늘어날 수 있긴함..

// enum type
// 나열 
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN, READ_ONLY, AUTHOR }; // 0, 1, 2 라는 숫자가 할당됌


const person: {
	// obeject type의 타입스크립트 표현 (자바스크립트에서는 생성X)
	name: string;
	age: number;
} = {
	name: '소희',
	age: 25,

};

const person2 = {
	name2: '소희22',
	age2: 23,
	hobbies : ['독서','영화'],
	role: [2, '학생'],
	// 항상 2개의 요소만 지닌다
	// 첫번째 요소는 숫자, 두번째 요소 문자열 

	role2: Role.ADMIN,
};

let hobbiesArr: any[]; // 타입이 혼합된 배열
hobbiesArr = ['독서', 1];

for (const hobby of person2.hobbies) {
	console.log(hobby);
	// console.log(hobby.map()); // !! ERROR !! map은 배열에서 사용할 수 있지만 문자열에서는 사용 못함
}

console.log(person.name);
console.log(person2.name2);

if ( person2.role2 === Role.ADMIN ) {
	console.log( '어드민');
}


// 중첩된 obeject
const product = {
  id: 'abc1', // id: string; 
  price: 12.99, // price: number;
  tags: ['great-offer', 'hot-and-new'], // tags: string[];
  details: {
    title: 'Red Carpet', // title: string;
    description: 'A great carpet - almost brand-new!' // description: string;
  }
}
