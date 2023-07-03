const hourEl=document.getElementById("hour");
const minEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEL=document.getElementById("ampm")
function update(){
    let h=new Date().getHours();//do not forget to use brackets never forget!1
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM"
    hourEl.innerText=h;
    minEl.innerText=m;
    secondEl.innerText=s;
    ampmEL.innerText=ampm;
    if(h>12)
    {
        h=h-12
       ampm="PM"
    }

    setTimeout(()=>{
        update();
    },1000)

}
update();




















// const hourEl=document.getElementById("hour");
// const minuteEl=document.getElementById("minutes");
// const secondEl=document.getElementById("seconds");
// const ampmEl=document.getElementById("ampm");
// function updateClass(){
// let h= new Date().getHours();
// let m= new Date().getMinutes();
// let s= new Date().getSeconds();
// let ampm="AM";
// if(h>12)
// {
//     h=h-12
//     ampm="PM"
// }
// hourEl.innerText=h;
// minuteEl.innerText=m;
// secondEl.innerText=s;
// ampmEl.innerText=ampm;
// setTimeout(()=>{
//     updateClass();
// },1000)
// }
// updateClass();