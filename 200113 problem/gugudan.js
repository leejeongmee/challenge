function gugudan(start, end) {
  for (let i = start; i <= end; i++) {
    //let const
    //상수는 const(ex. const PI=3.14)
    //변수는 var대신 let으로 하는 것이 더 좋음.
    //둘의 차이는 let은 지역변수안에서만 살아있고 var은 함수범위안에서 다 살아있는다.
    console.log(`${i}단`);
    //`${변수} 문자열`으로 하는 것이 더 좋음.
    //``템플릿 리터럴(변수와 문자열을 같이 사용할 수 있음.)
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(``);
  }
}
gugudan(3, 6);
