// 问题描述
// 设 S 是正整数集合。 S 是一个无和集，当且仅当 蕴含 。 
// 对于任意正整数k，如果可将划分为n个无和子集 ，称正整数 k 是 n 可分的。记 。 
// 试设计一个算法，对任意给定的 n ，计算 的值。
// 对任意给定的 n ，编程计算 的值。
// 数据输入： 
// 第一行有 1 个正整数 n。
// 结果输出: 
// 将计算出的 F (n ) 的值以及{1,2,...F(n)}的一个 n 划分输出到文件 output.txt。文件的
// 第一行是  F(n)的值。接下来的n行，每行是一个无和子集 Si。
async function dfs(t){
    if(t>maxValue){
        for(let i=0;i<num;i++){
            for(let j=0;j<=f[i][0];j++){
                a[i][j]=f[i][j];
            }
        }
        maxValue=t;
    }
    for(let i=0;i<num;i++){
        f[i][f[i][0]+1]=t;
        if(judge(t,i)){
            f[i][0]+=1;
            await dfs(t+1);
            f[i][0]-=1;
        }
    }
}
function judge(t,k){
    for(let i=0;i<=f[k][0];i++){
        for(let j=i+1;j<f[k][0];j++){
            if(f[k][i]+f[k][j]==t) return 0;
        }
    }
    return 1;
}
async function main(){
    N=100;
    num=2;
    maxValue=0;
    f=new Array();
    a=new Array();
    for(let i=0;i<N;i++){
        f[i]=new Array(N).fill(0);
        a[i]=new Array(N).fill(0);
    }
    await dfs(1);
}
main();