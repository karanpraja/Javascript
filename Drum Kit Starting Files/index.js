//this can also be written like this  
//document.querySelector("button ").addEventListener("click",func);
// function func(){
//     alert("I got clicked");
// }

//selecting all the drums using for loop
var drums=document.getElementsByClassName("drum").length;
for (let i=0;i<=drums;i++) {
{document.getElementsByClassName("drum")[i].addEventListener("click",function(){
   console.log(this.innerHTML.style.color="white");
   //this is use to track the button  and .innerHTML is used to give output of text
});}
// var audio=new Audio('./sounds/tom-2.mp3');
   // audio.play();
// else if(i==1)
// {document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//    var audio=new Audio('./sounds/tom-1.mp3');
//    audio.play();
// });}
// else if(i==2)
// {document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//    var audio=new Audio('./sounds/tom-3.mp3');
//    audio.play();
// });}
// else if(i==3)
// {document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//    var audio=new Audio('./sounds/tom-4.mp3');
//    audio.play();
// });}
// else if(i==4)
// {document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//    var audio=new Audio('./sounds/snare.mp3');
//    audio.play();
// });}
// else if(i==5)
// {document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//    var audio=new Audio('./sounds/kick-bass.mp3');
//    audio.play();
// });}
// else if(i==6)
// {document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//    var audio=new Audio('./sounds/crash.mp3');
//    audio.play();
// });} 


}