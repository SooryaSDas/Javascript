const arr = ["one","two","three"];
console.log(arr); // [ 'one', 'two', 'three' ]

const arr1 = new Array("four","five","six");
console.log(arr1); // [ 'four', 'five', 'six' ]

const arr2 = [];
arr2[0] = "Soorya";
arr2[1] = "Sandra";
arr2[2] = "Sreeja";
arr2[3] = "Lohidas";
console.log(arr2); // [ 'Soorya', 'Sandra', 'Sreeja', 'Lohidas' ]

const arr2 = [];
arr2[0] = "Soorya";
arr2[1] = "Sandra";
arr2[2] = "Sreeja";
arr2[3] = "Lohidas";
console.log(arr2[0]); // Soorya

const arr2 = [];
arr2[0] = "Soorya";
arr2[1] = "Sandra";
arr2[2] = "Sreeja";
arr2[3] = "Lohidas";
console.log(arr2.length); //4

const arr2 = [];
arr2[0] = "Soorya";
arr2[1] = "Sandra";
arr2[2] = "Sreeja";
arr2[3] = "Lohidas";
console.log(arr2.length-1); // 3

const arr2 = [];
arr2[0] = "Soorya";
arr2[1] = "Sandra";
arr2[2] = "Sreeja";
arr2[3] = "Lohidas";
let length = arr2.length;
for(let i=0; i<length; i++){
    console.log(arr2[i]);
}
// Soorya
// Sandra
// Sreeja
// Lohidas


