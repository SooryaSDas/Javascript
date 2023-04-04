// MAP
// A map hold key-value pairs where the key can be any data type.
// A map rememebers the original insertion order of the key.
// A map has a property to represent the size of the map.

const fruits = new Map([
    ["apple",200],
    ["orange",100],
    ["dragon fruit",500]
    ]);

console.log(fruits); // Map { 'apple' => 200, 'orange' => 100, 'dragon fruit' => 500 }

// set()
const veg = new Map();
veg.set("Brinjal",300);
veg.set("ladies finger",200);
veg.set("raw banana",50);
console.log(veg.get("Brinjal")); // 300
console.log(veg);//Map { 'Brinjal' => 300, 'ladies finger' => 200, 'raw banana' => 50 }
console.log(veg.size());