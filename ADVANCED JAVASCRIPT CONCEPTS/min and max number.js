// Find the minimum and maximum value in an array

// min
let min = (array, min = array[0])=>{
    for(let i=0;i<array.length;i++){
        if(min>array[i]) min = array[i]
    }
    return min;
}
const array = [1,0,3,2,6,5,8,34];
console.log(min(array)); // 0

//max
let max = (array1,max = array1[0])=>{
    for(let i=0;i<array.length;i++){
        if(max<array1[i]) max = array1[i]
    }
    return max;
}
const array1 = [11,10000,2,3,45];
console.log(max(array1)); // 10000