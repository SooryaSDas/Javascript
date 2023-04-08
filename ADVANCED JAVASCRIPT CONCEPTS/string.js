// string

let text1 = "onebytwo";
console.log(text1.length); // 8

let fruits = "apple,orange,kiwi,watermelon";
let slicedata = fruits.slice(6,17);
console.log(slicedata); // orange,kiwi
// JavaScript counts positions from zero.
console.log(fruits.slice(13)); //  kiwi,watermelon
console.log(fruits.slice(-22)); // orange,kiwi,watermelon
console.log(fruits.slice(-15,-1)); // kiwi,watermelo

// substr()
console.log(fruits.substr(6,11)); // orange,kiwi

// if we omit second parameter it will slice out of the rest of things
console.log(fruits.substr(6)); // orange,kiwi,watermelon
// replace
let str = "This is the javascript string methods";
console.log(str.replace("the","our"));  // This is our javascript string methods

// replaceAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("cats","dogs");
console.log(text); // I love dogs. Cats are very easy to love. Cats are very popular.

let one = "THIS IS A SENTENCE";
console.log(one.toLowerCase()); // this is a sentence

let two = "this is a sentence";
console.log(two.toUpperCase()); // THIS IS A SENTENCE

let tst1 = "hello";
let tst2 = "world";
console.log(tst1.concat(tst2)); // helloworld