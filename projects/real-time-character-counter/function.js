const textEl=document.getElementById("text-area");
const totalC=document.getElementById("total_counter");
const remainC=document.getElementById("remaining_counter");
textEl.addEventListener("keydown",()=>{
    
    // console.log(textEl.value)
    update();
});
function update(){
     totalC.innerText=textEl.value.length;
     remainC.innerText=textEl.getAttribute("maxlength")-textEl.value.length;

}