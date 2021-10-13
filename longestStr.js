/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/


function longest(s1, s2) {
   let str = s1.concat(s2).split('').sort()
   const result = str.filter(function(ele,pos,self){
       return self.indexOf(ele) == pos
   })
   return result.join('')
}
const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"

console.log(longest(a,b))