/*
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

/* Note : typeof array ==> Object */

function filter_list(l) {
  //console.log( Number.isInteger(l[0]))
  let result = l.filter(ele => Number.isInteger(ele))
  return result
  }

  function filter_list2(l) {
    return l.filter(v => typeof v === "number")
   } 

  console.log(filter_list([1,2,'a','b']))
  console.log(filter_list([1,'a','b',0,15]))
  console.log(filter_list2([1,2,'aasf','1','123',123]))