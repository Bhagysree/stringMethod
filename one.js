//string methods
//javascript string are primitive datatype
//that is used to work with texts

//there are 3 ways to use string

//1.single quotation ==> ''
//2.double quotation => ""
//3.template quoataion ==> `` (back ticks)
let a = 'hello world';
let b = "hello world";
let c = `hello world`;
//all three are same
console.log(a, b, c);
console.log(a[0]); //string
console.log(b[1]); //string
console.log(c[2]); //string

console.log(a.length); //length of string

//in javascript its case sensitive 
//a not equal to A 
//c is not equal to C 
console.log("c" == "C")
console.log("A" === "a") // in js lower case a and upper case are not equal.

//in js to add new lines in string
//use \n
console.log("i am\n bhagya\n sree")

//STRING METHOD-1.carAt()
let friend = "bhagya"
console.log(friend.charAt(3))
//charat takes indeax value and gives string element
//of that index

//2.indexOf()
let fname = "bhagya sree"
console.log(fname.indexOf("sree")) //6
console.log(fname.indexOf("e", 7)) //-1

//METHOD-3- concat

//METHOD-3- concat

let a1 = "manasa"
let a2 = "dade"
let a3 = a1.concat(a2)
console.log(a3)
console.log(a1.concat(a2))

//METHOD-4 includes
let check = "javascript is easy"
console.log(check.includes("easy"))

//METHOD-5 lastIndexOf
let n1 = "bhagya bhagya"
console.log(n1.indexOf("a")) //2
console.log(n1.lastIndexOf("a")) //12

//METHOD-6 length
let n2 = "bhagya"
console.log(n2.length) //6

//METHOD-7 repeat
let m1 = "helo world"
 console.log(m1.repeat(10))
 console.log(m1.repeat(0))

//METHOD-8 replace
let m2 = "bhagya bhagya"
console.log(m2.replace("bhagya", "sree")) //sree bhagya
console.log(m2.replace("a", "t"))
//method9: replaceAll()]
console.log(m2.replaceAll("a", "t"))

//method-10 startsWith()
console.log(m2.startsWith("b")) //true
console.log(m2.startsWith("s")) //false
console.log(m2.startsWith("bhagya")) //true

//method-11 .endsWith()
console.log(m2.endsWith("a")) //false
console.log(m2.endsWith("bhagya")) //true

//method-12 
//method-15 slice(index, length)
let m3 = "bhagya sree"
//index   0 1 2 3 4 5 6 7 8 9
//        b h a g y a   s r e e
// length 1 2 3 4 5 6 7 8 9 10
console.log(m3.slice(0, 5)) //bhagya

//method-16 split()
let m4 = "bhagya sree kaju"
console.log(m4.split(" ")) //['bhagya', 'sree', 'kaju']
console.log(m4.split("a")) //['bh', 'gy', ' sree k', 'ju']

