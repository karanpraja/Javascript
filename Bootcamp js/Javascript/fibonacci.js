function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
          var ans=[];
        if (n==1)
            {
            ans=[0];
                return ans;
            }
        else if (n==2)
        {
            ans=[0,1];
            return ans;
        }else if(n>2){
        var count=2;
            ans=[0,1];
        while(count<n)
            {
    var sum=ans[count-2]+ans[count-1];
                ans.push(sum);
                count++
            }
            return ans;
        }