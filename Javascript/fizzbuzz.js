var output=[];
var count=1;
function fizzbuzz(){//use return statement in this to avoid errors
    output.push(count);
    count++;
    var i=(output.length)-1;
    var x="fizz";
    var y="buzz";
    //I have added sth new
    
    if(output[i]%3===0)
    {
      if(output[i]%5==0)
      {
          return (x+y);
       }
        return x;
    }
    if(output[i]%5===0)
    {
   return y;
    }
    console.log(output);
}