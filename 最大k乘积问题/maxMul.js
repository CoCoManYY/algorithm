// ①问题描述
// 设I 是一个n 位十进制整数。如果将I 划分为k 段，则可得到k 个整数。这k 个整数的乘积称为I 的一个k 乘积。
// 对于给定的I 、n和k，试设计一个算法，编程计算I 的最大k 乘积。
// ②编程任务
// 对于给定的I 、n和k，试设计一个算法，编程计算I 的最大k 乘积。
// ③样例输入文件示例                         输出文件示例
// Intput                               output
// 2 1                                  15
// // 15
// 设m(h,k) 表示: 从第h位到第K位所组成的十进制数
// 设dp(i,j)表示前i位(1-i)分成j段所得的最大乘积,
// a数组储存给定的n个数字 ； 
// 则可得到如下经典的DP方程：
// 如果只分成一段，那么m[i][1]=w[1][i];
// 否则： 
//  前i位(1:i)数字分j组乘积的最大值等于分为j-1组的结果再乘以一个因子

// tips:预处理连续数字乘积和存放在m数组，dp[i][j]代表前i位有j个乘号。
// dp[i][j]=max(dp[i][j],dp[k][j-1]*m[k+1][i]);    1<=k<i;
function maxMul(){
    for(let i=1;i<=n;i++){//枚举前i个数字
        for(let j=0;j<i;j++){//枚举乘号个数
            if(j==0){
               dp[i][j]=m[1][i]; 
               continue;
            } 
            for(let k=1;k<i;k++){//枚举乘号位置
                dp[i][j]=max(dp[i][j],dp[k][j-1]*m[k+1][i]);
            }
        }
    }
}
//初始化函数
function init(){//需要注意数组定义的下标从1开始~
    //i到j的十进制数
    m=new Array();
    for(let i=0;i<=n;i++){
        m[i]=new Array();
    }
    for(let i=1;i<=n;i++){
        m[i][i]=a[i-1];
    }
    for(let i=1;i<=n;i++){
        for(let j=i+1;j<=n;j++){
            m[i][j]=m[i][j-1]*10+m[j][j];
        }
    }
    // 表示前i位(1-i)分成j段所得的最大乘积
    dp=new Array();
    for(let i=0;i<=n;i++){
        dp[i]=new Array();
    }
}
//工具函数
function max(x,y){
    return x>y?x:y;
}
function main(){
    //输入数字转数字数组
    //测试数据
    a=3456;
    x=3;//分几段
    console.log(a+"分成"+x+"段的最大乘积：")
    a=a.toString().split('');
    a=a.map(data=>+data);//字符串数组转整型数组
    n=a.length;
    init();
    maxMul();
    console.log(dp[n][x-1]);//因为只有n-1个乘号
}
main();