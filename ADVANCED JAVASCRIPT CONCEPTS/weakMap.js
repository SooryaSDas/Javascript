// WeakMap()
    // In a weakmap every key can only be an object. 
    // weakmaps are not iteratable.
    // weakmap holds the reference to the key not the key iteself.
    // weakmap have some properties .get, .has, .delete, .set.
    // we can create weakmap with new WeakMap()

    const myweakmap = new WeakMap();
    console.log(myweakmap);
    
    let obj = {}, obj1 = {};
    myweakmap.set(obj,'Hello world');
    myweakmap.set(obj1,'Hello Weakmap');
        // get method used to getting the data
    console.log(myweakmap.get(obj)); // Hello world
    console.log(myweakmap.get(obj1)); // Hello Weakmap
        // has() for checking the weakmap is exist or not
    console.log(myweakmap.has(obj)); // true
    console.log(myweakmap.has(obj1)); // true
        // delete weakmap element
    myweakmap.delete(obj);
        // now the weakmap obj element was deleted
    console.log(myweakmap.has(obj)); // false
    
    // we can't iterate weakmap it will give typeerror
    
    const weakdemo = new WeakMap();
    let obj3 = {};
    weakdemo.set(obj3,"hello world");
    
    for(let i of weakdemo){
        console.log(i);
    }
    // TypeError: weakdemo is not iterable