let para = document.querySelector(".count");
let count = 0, clear;

document.querySelector(".start").addEventListener("click",()=>{
  clear = setInterval(valuechange,1000);
})

document.querySelector(".stop").addEventListener("click",()=>{
    clearInterval(clear)
})

function valuechange(){
    count++;
    para.innerHTML = count;
}