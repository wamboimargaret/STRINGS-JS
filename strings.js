
var c = "extravaganza"
var lastfour = c.slice(-4);
console.log(lastfour);



const x = "The quick fox jumped over the lazy dog";
var hot = x.slice(0,4)+"eat"+ x.slice(4);
console.log(hot);


const fox = "The quick brown fox jumps over the lazy dog";
const count = (fox.match(/the/g) || []).length;
console.log(count);
const count1 = (fox.match(/brown/g) || []).length;

const string1 = "The pupils are reading in the library";
let find= string1.search("are");
console.log(find);
const string2 = "The child was sitting on the table before it fell";
let look = string2.search("sitting");
console.log(look);


const word = "wonderful";
let result = word.toUpperCase("wonderful");
console.log(result);

const word2 = "amazing";
const word3 = "UndERneath"
let convert = word2.toLowerCase("amazing");
let convert1 = word3.toLowerCase("UndERneath");
console.log(convert);
console.log(convert1);

let word4 = "A wonderful world";
word4=word4.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(word4);



