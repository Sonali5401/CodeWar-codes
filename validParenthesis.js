/* "()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
function validParentheses(parens){
    let result = false
    let arr = parens.split('')
    let arr2 = [],count1 = 0,count2 = 0
    arr.forEach(function(ele){
    
        if(ele === '('){
            count1+=1
            arr2.push(ele)
        } else if( ele === ')'){
            count2+=1
            arr2.pop(ele)
        }
    })

     if(arr2.length === 0 && (count1 === count2) ){
         result = true
     }
     return result
  }

  function validParentheses2(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

  function validParentheses3(parens){
    var stack = [],
      i;
    
    for (i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        stack.push(parens[i]);
      }
      else if('(' !== stack.pop()) {
        return false;
      }
    }
    
    return stack.length === 0;
  }

  //console.log(validParentheses('())'))
  console.log(validParentheses2(')()('))
  //console.log(validParentheses('())'))
  //console.log(validParentheses('(())((()())())'))