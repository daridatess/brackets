function check(str, bracketsConfig) {
  const openBracket = [];
  const closeBracket = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket = bracketsConfig[i][0];
    closeBracket = bracketsConfig[i][1];
  }
  console.log(openBracket, closeBracket);
}

console.log(check(str, config3));

const config1 = [['(', ')']];
const config2 = [
  ['(', ')'],
  ['[', ']'],
];
const config3 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
];
const config4 = [['|', '|']];
const config5 = [
  ['(', ')'],
  ['|', '|'],
];
const config6 = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
  ['7', '7'],
  ['8', '8'],
];
const config7 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['|', '|'],
];

const str = '111115611111111222288888822225577877778775555666677777777776622222';
