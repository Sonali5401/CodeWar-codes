/*
A word consisting of only lowercase English letters.
5 ≤ word.length ≤ 50
[output] an integer array.An array of length 26. 
The first element is the minimum width of the mop to erase letter 'a', the second - letter 'b' etc.

Example
For word = "abacaba", the output should be:
[7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
(26 elements altogether)
First element 7 means: from first "a" to last "a" need a width of 7.
First element 5 means: from first "b" to last "b" need a width of 5.
First element 1 means: from first "c" to last "c" need a width of 1.*/

function theJanitor(word) {
    console.log(word.length)
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let result = []

    for(let i=0; i< alphabets.length ;i++){
        let width=0
        if(word.includes(alphabets[i])){
            width = (word.lastIndexOf(alphabets[i])- word.indexOf(alphabets[i]))+1
        }
        result.push(width)
    }

   return result
    
}
console.log(theJanitor('likemm'))
//[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(theJanitor("rkuhsxtflzvytbtwxyarsglibmhfmmikyolfmopbtkzxezjahq"))
//[30, 27, 0, 0, 1, 29, 1, 46, 8, 1, 41, 27, 12, 0, 5, 1, 1, 20, 17, 35, 1, 1, 1, 39, 22, 37]

function theJanitor2(word) {
    return [...'abcdefghijklmnopqrstuvwxyz'].map(l=>{
      let a = word.indexOf(l), b = word.lastIndexOf(l);
      return a === -1 ? 0 : b - a + 1;
    });
  }