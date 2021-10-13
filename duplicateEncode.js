/* 
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("        */

function duplicateEncode(word){
    let newWord = word.toLowerCase()
    const result = {}
    let arr = []
    for(const char of newWord ){
        if(result.hasOwnProperty(char)){
            result[char]+=1
        } else {
            result[char] = 1
        }
    }
    for(const char of newWord){
        if (result[char] == 1) {
            arr.push('(')
        } else if(result[char] > 1) {
            arr.push(')')
        }
    }

   return arr.join('')
}

function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


  function duplicateEncode3(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}

console.log(duplicateEncode('Success'))