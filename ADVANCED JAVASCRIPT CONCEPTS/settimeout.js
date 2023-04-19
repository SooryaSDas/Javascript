let clear;

document.querySelector(".start").addEventListener("click",()=>{
  clear = setTimeout(clearme,3000);
});

document.querySelector(".stop").addEventListener("click",()=>{
    clearTimeout(clear);
})

function clearme(){
    alert("your 3 seconds over");
    document.querySelector(".alertpara").innerHTML = "3 seconds over";
}