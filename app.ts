const person: {
	// obeject type의 타입스크립트 표현 (자바스크립트 객체를 생성X)
	name: string;
	age: number;
} = {
	name: '소희',
	age: 25
};

const person2 = {
	name2: '소희22',
	age2: 23
}

console.log(person.name);
console.log(person2.name2);

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