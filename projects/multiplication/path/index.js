const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
var display=document.getElementById("heading");
display.innerText=`What is ${num1} multiply by ${num2}?`;
let score=JSON.parse(localStorage.getItem("score"));/*do not use const*//*we used jason to convert it into number*/
if(score<0)
{
    score=0;
}
var scoreEl=document.getElementById("score");
scoreEl.innerText=`score:${score}`;

const correctAns=num1*num2;
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input")
formEl.addEventListener("submit",()=>{
const ansEl= +inputEl.value;/*to convert it into a number*/
if(ansEl===correctAns)
{
    score++;
    updateLocalStorage();
}
else{
    score--;
    updateLocalStorage();
}
});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));//on left box it will show score and right side variavle score value
}
