//this can also be written like this  
//document.querySelector("button ").addEventListener("click",func);
// function func(){
//     alert("I got clicked");
// }

//selecting all the drums using for loop
document.addEventListener("keypress",function(event){
var keyboardkey=event.key;
makesound(keyboardkey);
buttonanimation(keyboardkey);
// buttondanimation(keyboardkey);

});
var drums=document.getElementsByClassName("drum").length;
for (let i=0;i<=drums;i++) {
{document.getElementsByClassName("drum")[i].addEventListener("click",function(){
  var buttonclick= this.innerHTML;
  makesound(buttonclick);
  buttonanimation(buttonclick);
//   buttondanimation(buttonclick);
  
});}
function makesound(key){
   switch(key){
      case "w":
      var tom2=new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
      case "a":
      var tom1=new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
      case "s":
      var tom3=new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
      case "d":
      var tom4=new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;
      case "j":
      var snare=new Audio('./sounds/snare.mp3');
      snare.play();
      break;
      case "k":
      var kickbass=new Audio('./sounds/kick-bass.mp3');
      kickbass.play();
      break;
      case "l":
      var crash=new Audio('./sounds/crash.mp3');
      crash.play();
      break;
      default:
         console.log(this.innerhtml);                
}

}
function buttonanimation(element){
   function buttondanimation(){
      activebutton.classList.toggle("pressed");
   }
   var activebutton=document.querySelector("."+element);//this is the most important part!!
   
   // document.querySelector("."+element).classList.toggle("pressed");
   setTimeout(buttondanimation,100)
   activebutton.classList.add("pressed");
 }
// document.addEventListener("keydown",function(event){
//    console.log(event.key);
// }
// );

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