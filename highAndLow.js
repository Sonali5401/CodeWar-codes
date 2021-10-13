/* 
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" 
*/

/*Note : By default, the sort() method sorts the values as strings in alphabetical and ascending order.
This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, 
"25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce an incorrect result when sorting numbers. */

function highAndLow(numbers){
    let arr = numbers.split(' ')
    console.log('arr :', arr)
    let sortedArr = arr.sort(function(a, b){return a-b})
    console.log('sortedArr :', sortedArr)
    let min = sortedArr[0], max = sortedArr[sortedArr.length-1]
    return `${max} ${min}`

  }

  function highAndLow2(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

  
  function highAndLow3(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }
  console.log(highAndLow("1 2 3 4 5"))
  console.log(highAndLow("1 2 -3 4 5"))
  console.log(highAndLow("1 9 3 4 -5"))
  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))