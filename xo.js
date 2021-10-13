/* Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    let arr = str.split('')
    let countX = 0, countO = 0
    arr.forEach(function(ele){
        if(ele =='x' || ele == 'X'){
            countX+=1
        } else if(ele =='o' || ele == 'O') {
            countO+=1
        } 
    })

    return (countX === countO)

}

function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

const XO3 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO4(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
  }

console.log(XO2("ooxXm"))  //true
console.log(XO3("zpzpzpp")) //true
console.log(XO2("zzoo")) //false
console.log(XO3("xooxx")) //false