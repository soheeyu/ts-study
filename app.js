// void type
// undefined를 비롯해 값을 반환하지 않은 함수를 사용하는 경우 void를 기본적으로 사용
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('결과는:' + num);
    return;
}
printResult(add(6, 19));
// let someValue: undefined; // undefined는 타입스크립트에서 타입으로 사용할 수 있음
// function type
// let combineValues: Function; // 이 변수에는 무엇을 저장하든 함수가 되어야함!
// 매개변수의 같은 위치에서 어떤 유형 사용하려는 것인지 설명 가능
var combineValues; // number로 변환
combineValues = add;
console.log(combineValues(10, 19));
// callback
function addAndHandle(n1, n2, callBack) {
    var result = n1 + n2;
    callBack(result);
}
addAndHandle(19, 34, function (result) {
    console.log(result);
}); // 10, 20, 익명함수 전달(익명 함수로 number를 받게됨)
