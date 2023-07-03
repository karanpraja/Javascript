//closure:function along with its lexical environment;
function hello1(){
    console.log("hare rama");
    message="hare krishna"
    function hello2(){
        console.log(message);
        function hello3(){
            console.log(message)
        }
        message="hare hare";
        hello3();
    }
    message="krishna krishna";
    hello2();
}
hello1();