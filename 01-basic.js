//  한 줄 주석
/* 여러줄 주석 */

//  내장 객체 console : 콘솔에 출력하는 객체
console.info("정보 메세지 출력");
console.debug("디버그 메세지 출력");
console.warn("경고 메세지 출력");
console.error("에러 메세지 출력");

console.log("가장 일반적인 로그메세지 출력");

//  내용을 연속으로 출력할 때는 ,로 구분
console.log("String", 2021);

//  객체의 속성, 메소드에 접근할 때는 .으로 접근
console.log(Math.PI);   //  속성 접근
console.log(Math.max(1, 3, 2, 5, 4));   //  메소드 접근

console.log("-----------------");

//  var, let, const
var testVar = 2021;     //  var : ES6 이전 방식 -> WEB에서는 아직 사용한다

//  ES6 이후
let testLet = "let";        //  let : 재할당 가능 변수
const testConst = "const";  //  const : 재할당 불가능 변수 - 상수처럼 이용
                            //  선언과 동시에 값을 할당해야 한다

console.log(testVar, testLet, testConst);

testVar = "var changed";
testLet = "let changed";
//  testConst = "const changed";     -> Error : const 는 재할당 불가능
//  ES6가 지원되는 환경에서는 먼저 const로 할 수 있는지 먼저 생각
//      ->  값이 바뀌는 것이 자연스럽다고 생각되면 let 사용

console.log(testVar, testLet, testConst);

//  자바스크립트는 동적 타이핑 언어
//  변수 선언 시에는 데이터 타입이 정해지지 않고
//  데이터가 할당될 때 타입이 결정된다
let v = "This is String";
//  데이터 타입 확인 -> typeof
//  인터프리터 방식은 실행시에만 오류 확인 -> 주의
console.log(v, "->", typeof v);
v = 2021;
console.log(v, "->", typeof v);