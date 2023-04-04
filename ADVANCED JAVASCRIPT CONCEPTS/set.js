// SET()
    // use new set() to create set

// creating set
let set2 = new Set();
console.log(set2); // Set {}
// set duplicate values
let set1 = new Set([2,6,6,4,7,9]);
console.log(set1); // Set { 2, 6, 4, 7, 9 }
// set multiple type of value
let set3 = new Set([2,6,8.34,{3:"one",4:"four",7:"six"},"apple","kiwi"]);
console.log(set3);
// Set {
//   2,
//   6,
//   8.34,
//   { '3': 'one', '4': 'four', '7': 'six' },
//   'apple',
//   'kiwi'
// }
    // iterate set
for(let i of set3){
    console.log(i);
}
// 2
// 6
// 8.34
// { '3': 'one', '4': 'four', '7': 'six' }
// apple
// kiwi

// using has() method

let setdata = new Set([3,2,6,7,9]);
console.log(setdata.has(3)); // true
// adding new element use add() method
setdata.add(4);
console.log(setdata); // Set { 3, 2, 6, 7, 9, 4 }
setdata.delete(9); 
console.log(setdata); // Set { 3, 2, 6, 7, 4 }