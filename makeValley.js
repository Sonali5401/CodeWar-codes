
/*
[66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
[100, 72, 68, 66,  55, 46, 38, 12, 12, -82]
[100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]

[67, 93, 100, -16, 65, 97, 92]
[100, 97,  93, 92, 67, 65, -16]
[100, 93, 67, *-16*, 65, 92, 97]

*/

/*

a = [67, 93, 100, -16, 65, 97, 92] =>[100,97,93,92,67,65,-16]
make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
*/

function makeValley(arr){
    arr.sort(function(a, b){return b-a})
    let arr1 = [],arr2 = []
    for(let i =0 ; i<arr.length ; i++){
        if(i%2 == 0){
            arr1.push(arr[i])
        } else{
            arr2.push(arr[i])
        }
    }
    arr2.reverse()
    return arr1.concat(arr2)

}
console.log(makeValley([67, 93, 100, -16, 65, 97, 92])) // [100, 93, 67, *-16*, 65, 92, 97]
console.log(makeValley([79, 35, 54, 19, 35, 25])) //[79, 35, 25, *19*, 35, 54]
console.log(makeValley([66, 55, 100, 68, 46, -82, 12, 72, 12, 38])) //[100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
