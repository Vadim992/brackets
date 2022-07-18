module.exports = function check(str, bracketsConfig) {
  const brackets = [ '1','3','5','(', '[', '{'];
  const bracketsPair = {
    [')'] : '(',
    [']'] : '[',
    ['}'] : '{',
    ['|'] : '|',
    ['2'] : '1',
    ['4'] : '3',
    ['6'] : '5',
    ['7'] : '7',
    ['8'] : '8'
  };
  const mas = [].concat(...arguments);
  let stack = [];
  

   

  let j = 0;
  let k = 0;
 for (let arg of mas ) {
  for (let i = 0; i < arg.length; i++){
    let current = arg[i];

    if ((current === '|' || current === '7') && j % 2 === 0) {
      j++;
      stack.push(current);
      continue;
    } else {
      if ( current === '8' && k % 2 === 0) {
        k++;
        stack.push(current);
        continue;
      }
    }

    
     if  (brackets.includes(current) && current !== '|' ) {
       stack.push(current);
     } else {

       

      if (stack.length === 0) return false;

      if (current === '|' || current === '7') j++;
      if (current === '8') k++;

      let currentLast = stack[stack.length - 1];
      if (bracketsPair[current] === currentLast) {
          stack.pop();
      } else  {
      return false
      }

     }

  }
  if (stack.length !== 0) return false;
}
  return stack.length === 0  ;
}
