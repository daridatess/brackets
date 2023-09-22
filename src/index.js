module.exports = function check(str, bracketsConfig) {
  const openBracket = [];
  const closeBracket = [];
  let indexOpenBreack = []

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
  }

  const checkString = str.split('')
for (let i = 0; i < checkString.length; i++) {
  if(openBracket.includes(checkString[i])) {
    if(openBracket.indexOf(checkString[i]) == closeBracket.indexOf(checkString[i])){
      if(indexOpenBreack[indexOpenBreack.length - 1] != closeBracket.indexOf(checkString[i]) ){
         indexOpenBreack.push(openBracket.indexOf(checkString[i]))
      } else {
        if(indexOpenBreack.pop() != closeBracket.indexOf(checkString[i])) {
          return false
        }
      }
    } else {
  
      indexOpenBreack.push(openBracket.indexOf(checkString[i]))
    }
  } else if (closeBracket.includes(checkString[i])) {
    if(indexOpenBreack.pop() != closeBracket.indexOf(checkString[i])) {
return false
    }
  }
}

if(indexOpenBreack.length) {
  return false
}
return true
}

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
