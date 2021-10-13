function sumMissingNum(arr){
    let sum=0
    
    const minNum = Math.min(...arr)  //Math.min.apply({{},arr})
    const maxNum = Math.max(...arr)

    for(let i = minNum ; i <= maxNum ; i++){
        if(!arr.includes(i)){
            sum+=i
        } 
    }
    return (sum)
}

console.log(sumMissingNum([1,3,5,7,10]))//29
console.log(sumMissingNum([10,20,30,40,50,60])) //1575