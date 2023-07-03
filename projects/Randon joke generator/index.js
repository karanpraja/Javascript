const jokeContainer=document.getElementById("joke");
const btnEl=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any"

let getjoke=()=>{
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        if(item.joke===undefined)
        jokeContainer.textContent=`...loading!! click again!!`;
        else
        {
        jokeContainer.textContent=`${item.joke}`;
        }
    jokeContainer.classList.add("fade");

    });//in case of item u can use anything joke is a variable in api to access it and item is just a random name u can use data also i mean anything
}
btnEl.addEventListener("click",getjoke);
getjoke()


