var n1=Math.floor(Math.random()*6+1);
var n2=Math.floor(Math.random()*6+1);
changeimages(n1,n2);
function changeimages(n1,n2){
    document.images[0].src="./images/dice"+n1+".png";
    document.images[1].src="./images/dice"+n2+".png";
}
if(n1>n2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    
}
else if(n2>n1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";

}
else if(n2===n1)
{
    document.querySelector("h1").innerHTML="Draw!!";

}
