/* 
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function add(a, b) {
    // console.log('a', a)
    // console.log('b', b)
    // console.log('num a : ', BigInt(a))
    // console.log('num b : ', BigInt(b))
    return (Number(a) + Number(b)).toString();
    //return (BigInt(a) + BigInt(b)).toString(); // Fix me!
   // return (Number.MAX_SAFE_INTEGER(a)+ Number.MAX_SAFE_INTEGER(b)).toString()
  }

  //console.log(add(10,11))
  console.log(add('63829983432984289347293874','90938498237058927340892374089'))

  console.log(typeof BigInt)

// const bigInt = BigInt(Number.MAX_SAFE_INTEGER);  
// console.log(bigInt);
// const biggerInt = bigInt + BigInt(1);  
// console.log(biggerInt);
// const evenBiggerInt = bigInt + BigInt(2);  
// console.log(evenBiggerInt);
// const multi = bigInt * BigInt(2);  
// console.log(multi);
// const subtr = bigInt - BigInt(10);  
// console.log(subtr);
// const remainder = bigInt % BigInt(1);  
// console.log(remainder);
// const bigN = bigInt ** BigInt(54);  
// console.log(bigN);
// const veryNegativeNum = bigN * -BigInt(1)  
// console.log(veryNegativeNum);
