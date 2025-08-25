// 1. create array with many data types
const arr = ["b", 12, true, null]
console.log('------------------')
// 2. print array size
console.log(arr.length)
console.log('------------------')
// 3. print the first item
console.log(arr[0])
console.log('------------------')
// 4. print the last item
console.log(arr[arr.length-1])
console.log('------------------')
// 5. push
arr.push('tonnam049',[1,2,3])
console.log(arr)
console.log('------------------')
// 6. print every item
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('------------------')
// 7. shrink array with any operations
arr.pop()
console.log(arr)
console.log('------------------')
// 8. Array destructuring
const [,,a,,...z] = [5,10,15,20,25]
console.log(a)
console.log(...z)
console.log(typeof(a)) //number
console.log(typeof(z)) //object (array)
console.log('------------------')