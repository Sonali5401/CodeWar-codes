function narcissistic(value) {
  // digits = value.length ==> length property does not work on numbers but on strings and array
  let num = value, num1 = value, result = false
  let sumofPower,digits

  for(digits = 0 ;  num ; num = Math.floor(num/10))
  {
    digits++
  }
  console.log('digits: ',digits)

  for(sumofPower = 0 ;  num1 ; num1 = Math.floor(num1/10))
  {

    let temp = 0
    temp = num1%10
    sumofPower += Math.pow(temp,digits)
  }
  console.log(sumofPower)
  if(sumofPower === value){
    result = true
  }
  return result

}

function narcissistic2(value){
  let str = value.toString()
  let arr = str.split('')
  let digits = arr.length
  let sum=0


  arr.forEach(ele =>sum += Math.pow(ele,digits))
  return sum === value
}


function narcissistic3( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

 narcissistic4 = num => num.toString().split("").reduce(function(prev,el) { return prev + Math.pow(el, String(num).length)},0)  == num;
  console.log(narcissistic2(153))

  /*
  num = 153
  temp = num%10 => 3 => sum += Math.pow(temp,digits)
  num = num/10 = 15
  temp = num%10 => 5 => sum += Math.pow(temp,digits)
*/
