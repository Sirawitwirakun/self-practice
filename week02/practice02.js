//สร้าง object แบบไม่ใช้ function
const std = {
    id:1,
    name:'somchai',
    address: {no:111,city:"Bangkok"}}
 
let {address:{city:myAddress}} = std
console.log(myAddress)
console.log('---------------------') //ทำให้ code ดูง่ายตอน run

//สร้าง object แบบใช้ function
function Student(name,id) {
    this.name = name,
    this.id = id
}
 
let std1 = new Student('Tn','049')
console.log(std1)
console.log('---------------------')

//สร้าง object แบบใช้ class
class Students {
    constructor(sid,firstname,lastname) {
        this.sid = sid
        this.firstname = firstname
        this.lastname = lastname
    }
}

let std2 = new Students('049','Sirawit','Wirakun')
console.log(std2)
console.log('---------------------')

//Shallow Equility อาจารย์บอกให้เอามาลงใน week2 ด้วยพร้อมบอกประโยชน์(เขียนใน Progesstion02)

let book1 = {
  isbn: 123456789,
  title: "JavaScript",
}

let book2 = {
  isbn: 123456789,
  title: "JavaScript",
}

function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1)  // ["isbn", "title"]
  const keys2 = Object.keys(object2)  // ["isbn", "title"]
  
  // 1. เช็คจำนวน properties
  if (keys1.length !== keys2.length) {
    return false
  }
  
  // 2. เช็คค่าแต่ละ property
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  
  return true
}

console.log(shallowEquality(book1, book2))
console.log('---------------------')