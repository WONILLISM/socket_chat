// .prettierrc.js
module.exports = {
  singleQuote: true,
  // 문자열은 홑따옴표 formatting
  semi: true,
  // 코드 마지막 세미콜론 formatting
  useTabs: false,
  // tab 사용 금지
  tabWidth: 2,
  // 들여쓰기 너비 2
  trailingComma: 'all',
  // 객체나 배열 키 값 뒤에 항상 콤마를 붙히도록
  printWidth: 80,
  // 코드 한줄 maximum 80칸
  arrowParens: 'avoid',
  // 화살표 함수가 하나의 매개변수를 받을 때 괄호 생략
  endOfLine: 'auto',
  // windows에 또는 'Delete cr' 에러 해결
};
