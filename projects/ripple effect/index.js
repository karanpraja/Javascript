const btnEl=document.querySelector(".button");
btnEl.addEventListener("mouseover",(event)=>{
    // console.log()
    var x=(event.pageX-btnEl.offsetLeft);
    var y=(event.pageY-btnEl.offsetright);
    btnEl.style.setProperty("--xPos",x+"px");
    btnEl.style.setProperty("--yPos",y+"px");

})