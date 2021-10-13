function FibonacciSeries(number){
// take input from the user
//const number = parseInt(prompt('Enter the number of terms: '));
    let n1 = 0, n2 = 1, nextTerm;
    let series = []

    console.log('Fibonacci Series:');

    for (let i = 0; i <= number; i++) {
        //console.log(n1);
        series.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return series
}

console.log(FibonacciSeries(10))

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
  //    console.log(n - 1)
    var s = fibonacci_series(n - 1);  //[0,1] when n hits 1
   // console.log(s.length)
    s.push(s[s.length - 1] + s[s.length - 2]);
   // console.log(s)
    return s;
  }
};

// console.log(fibonacci_series(10));

