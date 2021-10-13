function add(a, b) {
  let result = [];
  let maxLength = a.length > b.length ? a.length : b.length;
  console.log(maxLength)
  a = a.padStart(maxLength, 0);  //padstart will convert string a to the length of maxlength by add extra 0s
  b = b.padStart(maxLength, 0);
  console.log('a ',a)
  console.log('b ',b)
  console.log('a ' ,typeof a)
  console.log('b ' ,typeof b)

  let carry = 0;
  for (let i = maxLength-1; i>=0; i--){
    //let sumOfDigits = +a[i] + +b[i] + carry;
    //console.log(typeof a[i])  //String
    //console.log(typeof +a[i])  //Number

    let sumOfDigits = parseInt(a[i]) + parseInt(b[i]) + carry;
    //console.log(i, a[i], b[i], '+a[i] + +b[i] + carry : ', +a[i] + +b[i] + carry)

    carry = sumOfDigits >= 10 ? 1 : 0;   //(sum can be max 18 or min 0)
    
    sumOfDigits = String(sumOfDigits);

    result.unshift( sumOfDigits[sumOfDigits.length-1] );
 
  }

  if (carry == 1) result.unshift(carry);

  return result.join("");
}
console.log(add('63829983432984289347293874','90938498237058927340892374089'))
//console.log(91002328220491911630239667963)