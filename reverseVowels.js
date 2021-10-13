function reverseVowel(str){
    str = str.split('')
    let arr = [],newStr = []

    arr = str.filter((ele) => ele.match(/[aeiou]/ig))  //['a','a','e']

    str.forEach(function(ele,index){
        if(ele.match(/[aeiou]/ig)){
            newStr.push(arr.pop())
        }else {
            newStr.push(ele)
        }
        
    });

return newStr.join('')

}
console.log(reverseVowel('dctacademy')) //dctecadamy
console.log(reverseVowel('abecidofu'))
console.log(reverseVowel('sonali'))
