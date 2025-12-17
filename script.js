console.log("Group A - Script Loaded");

//Alakítsd át a szöveget úgy, hogy minden számjegyet # jelre cserélsz.
console.log("First Mission")
const regex = /\d/g;
console.log(regex.test("abc4def5ghi6"));
console.log(regex.test("abcdefghi"));

//Gyűjtsd ki egy szövegből az összes irányítószámot (4 számjegy).
console.log("Second Mission")
const regex2 = /\b\d{4}\b/g;
console.log("Address: 1024 Budapest, 4025 Debrecen".match(regex2));

//Gyűjtsd ki az összes legalább 5 betű hosszú szót.
console.log("Third Mission")
const regex3 = /\b[a-zA-Z]{5,}\b/g;
console.log("This is a simple sentence that may be useful for this.".match(regex3));

//Cseréld le a „rossz” szót „jó”-ra, kis- és nagybetűtől függetlenül, csak teljes szó esetén.
console.log("Fourth Mission")
const regex4 = /\bbad\b/gi;
console.log("This is a bad example of a BAD situation, which is Bad.".replace(regex4, "good"));

//Ellenőrizd, hogy a szöveg felkiáltójellel végződik-e.
console.log("Fifth Mission")
const regex5 = /!$/;
console.log(regex5.test("This is a test sentence!"));
console.log(regex5.test("This is a test sentence."));

//Ellenőrizd, hogy egy változónév kebab-case formátumú-e.
console.log("Sixth Mission")
const regex6 = /^([a-z]+(-[a-z]+)*)$/;
console.log(regex6.test("user-name"));
console.log(regex6.test("userName"));
console.log(regex6.test("user_name"));
console.log(regex6.test("username"));
console.log(regex6.test("User-Name"));

//Add vissza egy e-mail cím felhasználónév részét.
console.log("Seventh Mission")
const regex7 = /^([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("user.name@example.com".match(regex7)[1]);
console.log("user.name.haha@example.com".match(regex7)[1]);

//Ellenőrizd, hogy tartalmaz-e a szöveg legalább egy nagybetűt és egy számot.
console.log("Eighth Mission")
const regex8 = /(?=.*[A-Z])(?=.*\d)/;
console.log(regex8.test("Password1"));
console.log(regex8.test("password"));
console.log(regex8.test("PASSWORD"));
console.log(regex8.test("Passw0rd"));
console.log(regex8.test("passw0rd"));

//Gyűjtsd ki az összes HTML nyitó taget (pl. <p>, <div>). Záró tagek nem kellenek.
console.log("Ninth Mission")
const regex9 = /<([a-zA-Z]+)(\s[^>]*)?>/g;
console.log("<div class='container'><p>Hello</p></div><section/>".match(regex9));

//Távolítsd el a szövegből az összes szögletes zárójelben lévő részt.
console.log("Tenth Mission")
const regex10 = /\[[^\]]*\]\s/g;
console.log("This is a [example] sentence that contains [some] brackets.".replace(regex10,""));

//Just shows the group
function groupShow() {
    alert("This is Group A");
}