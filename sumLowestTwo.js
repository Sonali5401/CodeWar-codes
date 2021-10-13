/* when an array is passed like [19, 5, 42, 2, 77], the output should be 7. */

function sumTwoSmallestNumbers1(numbers) {  
    let arr = numbers.sort(function(a, b){return a-b})
    return (arr[0] + arr[1])
    
}

function sumTwoSmallestNumbers2(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };

  const sumTwoSmallestNumbers3 = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

console.log(sumTwoSmallestNumbers1([19, 5, 42, 2, 77]))