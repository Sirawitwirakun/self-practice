//1.
function sum(...num){
    let result = 0
    for(let i = 0; i < arguments.length; i++){
        result = result + num[i]
    }
    return result
}
 
console.log(sum(1,2,3,5))

//2.
function plus(num1,num2) {
    return num1 + num2
       
}
function multiply(num1,num2) {
    let resultmultiply = plus(num1,num2) * (num1 + num2)
        return resultmultiply
}

//3.
console.log(multiply(5,4))

function calculate(x, y) {
    function add(a, b) {
        return a + b
    }
    return add(x, y) * 2
}