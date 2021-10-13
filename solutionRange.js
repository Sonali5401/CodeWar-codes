/* solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20" */

function solutionClever (arr) {
    const arrCopy = arr.slice();
    for(let i = 0; i <arrCopy.length; i++) {
      let j = i;
      while(arrCopy[j] - arrCopy[j + 1] === -1) {
        j++;
      }
      if(j - i > 1) {
        arrCopy.splice(i, j - i + 1, arrCopy[i] + "-" + arrCopy[j]);
      }
    }
    return arrCopy.join(",");
  }
  

  function solution(list){
    return list
      .reduce((acc, n, i, arr) => {
        if(n !== arr[i - 1] + 1) {
          acc.push([n]);
        } else {
          acc[acc.length - 1].push(n);
        }
        return acc;
      }, [])
      .map(arr => arr.length > 2 ? `${arr[0]}-${arr[arr.length-1]}` : arr)
      .join(',');
 }
 
  const res = solutionClever([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  console.log("res: ", res);