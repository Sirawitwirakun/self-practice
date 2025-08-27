const words = ['apple','melon','banana','orange']
words.reverse()
console.log(words)
//1. annoymous arrow function
// const startAWords = words.filter( (word) => word.startsWith('a')  )
// console.log(startAWords)

//Use forEach
// let wordStartWithA = []
// words.forEach((words) => {
//     if(words.startsWith('a')){
//     wordStartWithA.push(words)
// }
// })
// console.log(wordStartWithA)

//2. annoymous function declaration
// const startAWords1 = words.filter(function (words) {
//     return words.startsWith('a')
// } )
// console.log(startAWords1)

//3. named arrow function
// const checkStartA = (words) => words.startsWith('a')
// const startAWord2 = words.filter(checkStartA)
// console.log(startAWord2)

//4. named function declaration
// function checkStartA1(words){
//     return words.startsWith('a')
// }
// const startAWord3 = words.filter(checkStartA1)
// console.log(startAWord3)

// const employees = [
//   {
//     id: 'e1001',
//     firstname: "Somchai",
//     lastname: "Jaidee",
//   },
//   {
//     id: 'e1002',
//     firstname: "Pornchai",
//     lastname: "Deejai",
//   },
//   {
//     id: 'e1005',
//     firstname: "Suda",
//     lastname: "Rakdee",
//   },
// ]

//Output [ 'SOMCHAI JAIDEE', 'PORNCHAI DEEJAI', 'SUDA RAKDEE' ]
// const fullname = employees.map((employee) => employee.firstname.toUpperCase()+' '+employee.lastname.toUpperCase())
// console.log(fullname)

//Need output Fullname with JAI 
// const fullname = employees
// .filter((employee) => employee.firstname.toUpperCase().includes('JAI') || employee.lastname.toUpperCase().includes('JAI'))
// .map((employee) => employee.firstname.toUpperCase()+' '+employee.lastname.toUpperCase())
// console.log(fullname)

// const fullname = employees
// .map((employee) => employee.firstname.toUpperCase()+' '+employee.lastname.toUpperCase())
// .filter((employee) => employee.toUpperCase().includes('JAI'))
// console.log(fullname)

//happy olaf 049
// const carts = [
//   { productId: 1002, price: 10, amount: 5 },
//   { productId: 2005, price: 100, amount: 2 },
//   { productId: 5001, price: 5, amount: 4 },
// ]
//net price = total price * VAT 7%
//const getValue = carts.reduce(callbackfunction,initialValue)
// const getValue = carts.reduce((acc,product) => acc + (product.price * product.amount) * 1.07 ,0)
// console.log(getValue)

// const num = [2,4,6]
// num.push(['Push'])//เพิ่มต่อท้าย
// num.unshift(['unshift'])//เพิ่มด้านหน้า
// num.pop()//ลบตัวท้าย
// num.shift()//ลบตัวหน้า
// console.log(num)

// const words = ['apple','orange','banana']
// //add 'cherry','berry'after 'orange'
// //words.spice(start,deleteCount,'Item')
// words.splice(2,0,'cherry','berry')
// console.log(words)
// words.splice(2,1)
// console.log(words)
// //replace 'berry' with 'mango'
// words.splice(2,1,'mango')
// console.log(words)

// const words = ['apple','orange','banana','mango','cherry']

// console.log(words.slice(1)) //[ 'orange', 'banana', 'mango', 'cherry' ]
// console.log(words.slice(0,3)) //[ 'apple', 'orange', 'banana' ]
// console.log(words.slice(2,5)) //[ 'banana', 'mango', 'cherry' ]
// console.log(words.slice(2)) //[ 'banana', 'mango', 'cherry' ]
// console.log(words.slice(-3)) //[ 'banana', 'mango', 'cherry' ]

//words.fill(values,start,end)
// words.fill(null,0)
// console.log(words)
// words.fill(undefined,1,3)
// console.log(words)
// words.fill(null,1)
// console.log(words)
 