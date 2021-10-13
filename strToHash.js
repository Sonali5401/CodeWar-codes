/* 
"a=1, b=2, c=3, d=4"
{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}


*/
function strToHash(str){
    const result = {}
    if(str.length != 0){
    const arr = str.split(', ')
    console.log(arr)
    arr.forEach(ele => {
        const arr2 = ele.split('=')
        result[String(arr2[0])] = parseInt(arr2[1])
  })

}     
  return (result)
}

 console.log(strToHash("a=1, b=2, c=3, d=4"))
 console.log(strToHash('Ij=838, Qr=323, dEfG=301, rStUv=594, t=384'))
 console.log(strToHash(""))