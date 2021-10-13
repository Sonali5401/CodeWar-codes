/*
Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none. For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, arr) {
    let result = []
    arr.forEach(function(ele){
        if(ele.split('').sort().join() == word.split('').sort().join()){
            result.push(ele)
        }    
    })
    return result
}

function anagrams2(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word === v.split('').sort().join('');});
  }

console.log(anagrams2('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams2('laser', ['lazing', 'lazy',  'lacer']))
console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))