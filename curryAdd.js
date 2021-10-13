//Both not Working 

function add(x){
    let sum = x;
    return function resultFn(y){
        if(arguments.length){ 
            sum += y;
            console.log('sum after ', sum)
            return resultFn;
        }
        console.log('sum resultfn :', sum)
        return sum;
    }
//     console.log('sum Add :', sum)
//     return sum
}

function add1(x){
    let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
    return resultFn;
}

console.log(add1(11)(12)(13)(14))