const secbtn=document.querySelectorAll('.control');
function changebtn(){
    for(i=0;i<secbtn.length;i++)
    {
        secbtn[i].addEventListener('click',function(){
let currentbtn=document.querySelectorAll('.active-button');
currentbtn[0].className=currentbtn[0].className.replace('active-button','');
this.className += 'active-button';
        })
    }
}
changebtn();