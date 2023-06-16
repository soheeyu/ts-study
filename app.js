// combine 더하기 연산자는 숫자와 문자열 모두 포함 가능
// union type
// 서로 다른 종류의 값을 사용해야 하는 경우 사용
function combine(input1, input2, resultConversion) {
    var result; // block scope
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // input 앞에 + 기호 붙어 숫자로 변환되도록
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(10, 20, 'as-number');
console.log(combineAges);
var combineStringAges = combine('123', '45', 'as-number');
console.log(combineStringAges);
var conbineNames = combine('소희', '졸령...', 'as-text');
console.log(conbineNames);
