let checkPr = {
  // 아이디
  id: {
    idcheIn: /^[a-z0-9_\-]/,
    idIn: document.getElementById('js_id'),
    idmIn: document.getElementById('js_id_m'),
  },
  // 비밀번호
  pw: {
    pwchech: /[A-Z]/,
    pwchenu: /[0-9]/,
    pwchecn: /[!@#$%^&*()+-=]/,
    pwIn: document.getElementById('js_pw'),
    pwmIn: document.getElementById('js_pw_m'),
  },
  //비밀번호 검사
  pwch: {
    pw_cheIn: document.getElementById('js_pw_che'),
    pw_che_m: document.getElementById('js_pw_che_m'),
  },
  //생년월일
  birth: {
    birth_year: document.getElementById('js_birth_year'),
    birth_month: document.getElementById('js_birth_month'),
    birth_day: document.getElementById('js_birth_day'),
    birth_m: document.getElementById('js_birth_m'),
  },
  // 이메일
  email: {
    emche: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z{2,3}]/i,
    emailIn: document.getElementById('js_email'),
    email_m: document.getElementById('js_email_m'),
  },
  // 핸드폰번호
  pnumber: {
    pnum: document.getElementById('js_pnum'),
    pnum_m: document.getElementById('js_pnum_m'),
  },
  // 관심사
  inter: {
    interIn: document.getElementById('js_inter'),
    inter_m: document.getElementById('js_inter_m'),

    reset: {
      jreset: document.getElementById('js_reset'),
    },
  },
}; //이와같은 코드가 object를 생성하기위한 객체리터럴 표현
//전체 객체의 멤버가 {} 내부에 (,)로 구분되어있음.
//외부에서 접근가능한 공개 멤버

let checkIn = {
  // 아이디 3번째슬라이드의 2번과3번
  id: () => {
    if (checkPr.id.idIn.value.length < 5 || checkPr.id.idIn.value.length > 20) {
      checkPr.id.idmIn.innerText = '아이디는 5-20자 이상입력해주세요.';
    } else if (!checkPr.id.idcheIn.test(checkPr.id.idIn.value)) {
      checkPr.id.idmIn.innerHTML =
        ' 5-20자의 영문소문자와 숫자,특수기호(_)(-)만 사용가능합니다.';
      checkPr.id.idmIn.style.color = 'red';
    } else {
      checkPr.id.idmIn.innerHTML = '사용가능한 아이디입니다.';
      checkPr.id.idmIn.style.color = 'green';
    }
  },
  // 비밀번호 3번째 슬라이드의 4번과 5번
  pw: () => {
    if (checkPr.pw.pwIn.value.length < 8 || checkPr.pw.pwIn.value.length > 16) {
      checkPr.pw.pwmIn.innerHTML = '패스워드는 8자-16자로 입력해주세요.';
      checkPr.pw.pwmIn.style.color = 'red';
    } else if (!checkPr.pw.pwchech.test(checkpr.pw.pwIn.value)) {
      checkPr.pw.pwmIn.innerHTML = '영문 대문자를 1자 이상 포함해주세요.';
      checkPr.pw.pwmIn.style.color = 'red';
    } else if (!checkPr.pw.pwchenu.test(checkpr.pw.pwIn.value)) {
      checkPr.pw.pwmIn.innerHTML = '숫자를 1자 이상 포함해주세요.';
      checkPr.pw.pwmIn.style.color = 'red';
    } else if (!checkPr.pw.pwchecn.test(checkpr.pw.pwIn.value)) {
      checkPr.pw.pwmIn.innerHTML = '특수문자를 한자이상 포함해주세요.';
      checkPr.pw.pwmIn.style.color = 'red';
    } else {
      checkPr.pw.pwmIn.innerHTML = '안전한 비밀번호 입니다.';
      checkPr.pw.pwmIn.style.color = 'green';
    }
  },
  // 비밀번호체크 3번째 슬라이드의 7번
  pwch: () => {
    if (checkPr.pw.pwIn.value === checkPr.pwch.pw_cheIn.value) {
      checkPr.pwch.pw_che_m.innerHTML = '비밀번호가 일치합니다.';
      checkPr.pw.pw_che_m.style.color = 'green';
    } else {
      checkPr.pwch.pw_che_m.innerHTML =
        '비밀번호가 일치하지않습니다. 다시 확인해주세요..';
      checkPr.pw.pw_che_m.style.color = 'red';
    }
  },
  // 생년월일(년) 4번째 슬라이드의 1번과 4번
  birth_year: () => {
    if (!checkPr.birth.birth_year.value.length === 4) {
      checkPr.birth.birth_m.innerHTML =
        '태어난 년도 4자리를 정확하게 입력해주세요.';
      checkPr.birth.birth_m.style.color = 'red';
    } else if (
      checkPr.birth_year.value < 1921 ||
      checkPr.birth_year.value > 2005
    ) {
      checkPr.birth.birth_m.innerHTML = '만 14세 이상만 가입 가능합니다.';
      checkPr.birth.birth_m.style.color = 'red';
    }
  },
  // 생년월일(일) 4번째 슬라이드의 3번과 4번
  birth_day: () => {
    if (checkPr.birth.birth_month.value == 'Jau') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '1월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Feb') {
      if (
        checkPr.birth.birth_day.value > 28 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '2월은 1일부터 28일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Mar') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '3월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Apr') {
      if (
        checkPr.birth.birth_day.value > 30 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '4월은 1일부터 30일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'May') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '5월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Jun') {
      if (
        checkPr.birth.birth_day.value > 30 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '6월은 1일부터 30일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'July') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '7월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Aug') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '8월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Sep') {
      if (
        checkPr.birth.birth_day.value > 30 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '9월은 1일부터 30일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Oct') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '10월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Nov') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '11월은 1일부터 30일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
    if (checkPr.birth.birth_month.value == 'Dec') {
      if (
        checkPr.birth.birth_day.value > 31 ||
        checkPr.birth.birth_day.value < 1
      ) {
        checkPr.birth.birth_m.innerHTML = '12월은 1일부터 31일까지입니다.';
        checkPr.birth.birth_m.style = 'red';
      }
    }
  },
  email: () => {
    if (checkvalue.email.emche.test(checkvalue.email.emailIn.value)) {
      checkvalue.email.email_m.innerText = '';
    } else {
      checkvalue.email.email_m.innerText = '이메일 주소를 다시 확인해주세요.';
      checkvalue.email.email_m.style.color = 'red';
    }
  },
  //전화번호 4번째 슬라이드의 9번
  pnumber: () => {
    if (
      !(
        checkPr.pnumber.pnum.value.length == 10 ||
        checkPr.pnumber.pnum.value.length == 11
      ) &&
      !(
        checkPr.pnumber.pnum.value[0] == 0 ||
        checkPr.pnumber.pnum.value[1] == 1 ||
        checkPr.pnumber.pnum.value[2] == 0
      )
    ) {
      checkPr.pnumber.pnum_m.innerHTML = '형식에 맞지 않는 번호입니다.';
      checkPr.pnumber.pnum_m.style.color = 'red';
    }
  },
  inter: () => {
    if (!checkPr.inter.interIn.value.length === 3) {
      checkPr.inter.inter_m.innerText = '3개이상의 관심사를 입력하세요.';
      checkPr.inter.inter_m.style.color = 'red';
    }
  },
};

function button() {
  onclick.checkPr.reset.jreset.reset();
}

button();

// let inFocus = {
//   id: () => {
//     checkPr.id.idIn.focus.color = 'green';
//   },
// };
