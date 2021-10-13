/*====================DOUBTFUL===========================
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
console.log('x' ,x)
console.log('y' ,y)
 console.log('x+y' ,x)
*/

function add(x) {
    
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
//function add1(a){ return function (b){return a+b;} }
console.log(add(1)(2)(3))