// FOR IN
// OBJECT
const person = {fname : "soorya",lname : "s das"};
let text = "";
for(let i in person){
    text += person[i];
}
console.log(text); // sooryas das
// ARRAY
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt); // 45491625