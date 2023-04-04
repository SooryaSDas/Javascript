//for of
const arr = ["one","two","three","four","five"];
let text = "";
for(let i of arr){
    text += i;
}
console.log(text ); // onetwothreefourfive

// looping over to the string
let lang = "JAVASCRIPT";
let dt = "";
for(let i of lang){
    dt += i;
}
console.log(dt); // JAVASCRIPT