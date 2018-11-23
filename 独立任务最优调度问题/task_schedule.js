// 独立任务最优调度： 
// 使用dp[i][j]数组表示的是第i个作业时，机器a花费不小于j时间的前提下，机器b完成作业i所需的最少时间。 
// 当机器a在时间j的时候小于a[i]时，当然只能由b机器完成， 
// 如果时间j大于a[i],那么考虑是由a还是b机器完成才好， 
// 给a处理的话，b花费时间是dp[i-1][j-a[i]], 
// 给b处理的话，b花费时间是dp[i-1][j]+b[i-1];
// 从中取小值作为dp[i][j]的值


function task_schedule(a,b,n,dp,sum){
    for (let i=1;i<=n;i++)  
    {  
        for (let j=0;j<=sum;j++)  
        if (j<a[i-1])
            dp[i][j]=dp[i-1][j]+b[i-1]; 
        else if (dp[i-1][j-a[i-1]]>dp[i-1][j]+b[i-1])  
            dp[i][j]=dp[i-1][j]+b[i-1];  
        else  
            dp[i][j]=dp[i-1][j-a[i-1]];  
    }
    console.log(dp);
    var min=Infinity;
    for(let i=0;i<=sum;i++){
        var temp=dp[n][i]>i?dp[n][i]:i;
        if(temp<min)
            min=temp;
    }
    console.log(min);//输出最小值
}

function main(){
    var num=6;
    var a=[2,5,7,10,5,2];
    var b=[3,8,4,11,3,4];
    var sum=0;
    var dp=new Array(num).fill(0);
    for(let i=0;i<num;i++){//初始化一波
        sum+=a[i];
    }
    for(let i=0;i<=num;i++){
        //初始化二维数组,维度要注意，一定要初始化为0，否则会出现undefine的错误
        dp[i]=new Array(sum+1).fill(0);
    }
    task_schedule(a,b,num,dp,sum);
}
main();