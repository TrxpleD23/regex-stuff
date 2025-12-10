// regex stuff : \w+(?=\d)

//Tasks
//1.Mission
const regex1 = /^\d+$/

console.log(regex1.test('15723415734'))
console.log(regex1.test('61283ahvfagh6123'))

//2.Mission
/*const regex2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
console.log(regex2.test("test@gmail.com"))
console.log(regex2.test("test@gmail@com"))
console.log(regex2.test("horvathdavid2534@gmail.com"))
console.log(regex2.test("IloveLatinasSonic1212141312@freemail.hu"))
*/

const regex2 = /^[\w-\.]+@[a-z0-9]+\.[a-z]+$/
console.log(regex2.test("someone@test.hu"))
console.log(regex2.test("thison_eisnotgood@gmail.com"))

//3.Mission
const regex3 = /^\d{4}-\d{2}-\d{2}$/

console.log(regex3.test('2025-12-10'))
console.log(regex3.test('2340-242-10'))
console.log(regex3.test('1230-51-51'))

//4.Mission
const regex4 = /^(\+36|06)\d{8,9}$/

console.log(regex4.test('+36303252562'))
console.log(regex4.test('06961321411'))
console.log(regex4.test('+56213241411'))
console.log(regex4.test('12385776892'))

//5.Mission
const regex5 = /^https?:\/\/([^\/]+)/

console.log('https://sub.example.com/path'.match(regex5)[1])

//6.Mission
const regex6 = /^(\w+)\s+(\w+)$/
name = "Johannes Maker"
console.log(name)

console.log(name.replace(regex6, "$2 $1"))

//7.Mission
const regex7 = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/

console.log(regex7.test("ilovemidgets23412"))
console.log(regex7.test("ilove3"))