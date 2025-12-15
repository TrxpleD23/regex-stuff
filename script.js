// regex stuff : \w+(?=\d)

//Tasks
//1.Mission
/*const regex1 = /^\d+$/

console.log(regex1.test('15723415734'))
console.log(regex1.test('61283ahvfagh6123'))

//2.Mission
/*const regex2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
console.log(regex2.test("test@gmail.com"))
console.log(regex2.test("test@gmail@com"))
console.log(regex2.test("horvathdavid2534@gmail.com"))
console.log(regex2.test("IloveLatinasSonic1212141312@freemail.hu"))
*/

/*const regex2 = /^[\w-\.]+@[a-z0-9]+\.[a-z]+$/
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

//8.Mission
const regex8 = /[+-]?\d+(?:\.\d+)?/g
text ='I know that pi is 3.14159'


console.log(text.match(regex8))

//9.Mission
const regex9 = /#[a-zA-Z0-9_]+/g

post = "#test #hello_world pipikaka broski"

console.log(post.match(regex9))

//10.Mission
const regex10 = /\s+/g

test = "    test     text    haha                  ni"

console.log(test.replace(regex10, ' ').trim())

console.log("First mission started")
const regex = /^[^@]+@(.+)/
const email = "user@email.example.hu"
console.log(email.match(regex))

console.log("Second mission started")
const regex2 = /(?:\+36\s\d{2}\s\d{3}\s\d{4}|06-\d{2}-\d{3}-\d{4})/g
const text = `
Hívj ezen: +36 30 123 4567 vagy itt: 06-70-123-4567.
De lehet a másikon is: +36 20 987 6543.
`;
console.log(text.match(regex2))

console.log("Third mission started")
const regex3 = /\?$/
console.log(regex3.test("Hogy vagy?"))
console.log(regex3.test("Hogy vagys"))

console.log("Fourth mission started")
const regex4 = /<[^>]*>/g
const text2 = "<p>Hello <b>world</b></p>"
console.log(text2.replace(regex4, ""))

console.log("Fifth mission")
const regex5 = /\d+/g
const text3 = "Van 3 almám és 12 körtém"

console.log(text3.match(regex5))

console.log("Sixth mission started")
const regex6 = /^[a-z]+(?:[A-Z][a-z0-9]*)*$/
console.log(regex6.test("userName"))
console.log(regex6.test("user_name"))
console.log(regex6.test("UserName"))

console.log("Seventh mission started")
console.log("make this fucking big lalala".replace(/\b[a-z]/g, (match) => match.toUpperCase()))

console.log("Eight mission started")
const regex7 = /(.)\1+/g
console.log(regex7.test("hello"))
console.log(regex7.test("abc"))

console.log("Ninth mission started")
const regex8 = /tiltott/gi
const text4 = "This is tiltott haha loser"
console.log(text4.replace(regex8, "*******"))*/

console.log("First mission start")
const regex = /^([a-zA-Z][a-zA-Z\d+\-.]*):\/\//
console.log("https://example.com".match(regex))

console.log("Second mission start")
const regex2 = /(?:\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})/
console.log(regex2.test("2025-12-31"))
console.log(regex2.test("31/12/2025"))

console.log("Third mission start")
const regex3 = /^[A-Z]/g
console.log(regex3.test("Hello világ"))
console.log(regex3.test("hello világ"))

console.log("Fourth mission start")
const regex4 = /\s+/g
const text = "Ez    egy         mondat"

console.log(text.replace(regex4, ' '))

console.log("Fifth mission start")
const regex5 = /\b[A-Z][a-z]+/g
const text2 = "Budapest a Duna partján van"
console.log(text2.match(regex5))

console.log("Sixth mission start")
const regex6 = /^[a-z]+(_[a-z]+)*$/
console.log(regex6.test("user_name"))
console.log(regex6.test("UserName"))

console.log("Seventh mission start")
const text3 = "2025-07-16";
console.log(text3.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$3.$2.$1"))

console.log("Eight mission start")
const regex7 = /#[0-9a-fA-F]{6}/
console.log(regex7.test("A háttér #12a4ff színű"))
console.log(regex7.test("No color code"))

console.log("Ninth mission start")
const regex8 = /\bnem\b/g
const text4 = "Ez nem jó mert blegh nem"
const text5 = "This doesn't have the word"
console.log(text4.replace(regex8, "igen"))
console.log(text5.replace(regex8, "igen"))

console.log("Tenth mission start")
const regex9 = /\s\(.*?\)/g
const text6 = "This is a sentence (random stuff) and one."
console.log(text6.replace(regex9, ""))