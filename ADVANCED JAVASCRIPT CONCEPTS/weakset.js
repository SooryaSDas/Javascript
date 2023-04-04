// WeakSet()

// creating weakset
const weakdata = new WeakSet();
console.log(weakdata);
let obj = {
    one : 1,
    two : 2
};
let obj1 = {};
weakdata.add(obj1);
console.log(weakdata);

// adding element to weakset
weakdata.add(obj);
console.log(weakdata);

weakdata.add("hello");
console.log(weakdata);// throws error
// DELETE ELEMENTS
weakdata.delete(obj);

// WEAKDATA ARE NOT ITERATABLE
for(let i of weakdata){
    console.log(i) // throw an error
}