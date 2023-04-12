// reverse the  number

function reverse_num(n){
    n = n + "";
    let num = n.split("").reverse().join();
    return num;
}
console.log(reverse_num(12345));

// reversing a number without inbuilt function
function reverse_number(num){
    let n = num.toString();
    const number = [];
    let str = "";
    for(let i = n.length-1,j=0;i>=0;i--,j++){
        number[j] = n[i];
        str = str+number[j];
    }
    return parseInt(str);
}
console.log(reverse_number(12345));