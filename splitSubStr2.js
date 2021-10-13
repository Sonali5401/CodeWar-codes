/* Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character
of the final pair with an underscore ('_').

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str){
    if(str.length%2 != 0){
        str+='_'                                       // Appending Character to a string
    }
    let arrSize = Math.ceil(str.length / 2)
    const result = new Array(arrSize)
    for (let i = 0, o = 0; i < arrSize; ++i, o += 2) {
        result[i] = str.substr(o, 2)                                  //substr(index,length)
     }

   return result
}

function solution2(str){
    let res = [];
    for (var i = 0; i < str.length; i +=2) res.push(`${str[i] + (str[i+1] || '_')}`)
     return res;
  }

console.log(solution2('abcde'))