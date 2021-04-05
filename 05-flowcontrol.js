//  C, Java와 거의 비슷한 조건 분기, 반복문을 활용

//  연습문제 1
//      : for 문과 while 문을 이용, 구구단 출력

//  =================================== for
// for(let i = 2; i <= 9; i++){
//     for(let k = 1; k <= 9; k++){
//         console.log(i, "*", k, "=", i*k);
//     }
//     console.log("\n");
// }

//  =================================== while
// let a = 2;
// while(a <= 9){
//     let b = 1;
//     while(b <= 9){
//         console.log(a, "*", b, "=", a*b);
//         b++;
//     }
//     a++;
//     console.log("\n");
// }


//  연습문제 2:
//      : for 문과 while 문을 이용, 아래와 같이 출력
/*
        *****
        ****
        ***
        **
        *
*/
//  =================================== for
// for(let i = 5; i >= 1; i--){
//     let star = "";
//     for(let k = 1; k <= i; k++){
//         star += "*";
//     }
//     console.log(star);
// }

//  =================================== while
// let a = 5;
// while(a > 0){
//     let star = "";
//     let k = 1;
//     while(k <= a){
//         star += "*";
//         k++;
//     }
//     console.log(star);
//     a--;
// }