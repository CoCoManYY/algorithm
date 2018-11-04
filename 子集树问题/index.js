// 试设计一个用回溯法搜索子集空间树的函数。该函数的参数包括结点可行性判定函数和上界函数等必要的函数，并将此函数用于解装载问题。 
// 装载问题描述如下:有一批共 n 个集装箱要装上艘载重量为 c 的轮船，其中集装箱 i 的重量为 wi 。找出一种最优装载方案，将轮船尽可能装满，即在装载体积不受限制的情况下，将尽可能重的集装箱装上轮船。
// 第一行有 2 个正整数 n 和 c。n 是集装箱数，c 是轮船的 载重量。接下来的 1 行中有 n 个正整数，表示集装箱的重量。
async function backTrace(t){
    if(t>n) record();
    else{
        for(let i=0;i<=1;i++){
            x[t-1]=i;
            if(constraint(t)&&bound(t)){//限制条件和上届函数
                change(t);
                await backTrace(t+1);
                restore(t);
            }
        }
    }   
}
function record(){//如果有了可行解判断是都最优解，如果是，则记录下来
    if(cw>bestw){
        bestw=cw;
        for(let i=0;i<n;i++){
            bestx[i]=x[i];
        }
    }
}
function constraint(t){//限制条件
    if(x[t-1]==0||x[t-1]==1&&cw+w[t-1]<=c) return true;
    else
    return false;
}
function bound(t){//上界函数
    if(x[t-1]==1||x[t-1]==0&&cw+r-w[t-1]>bestw) return true;
    else return false;
}
function change(t){
    if(x[t-1]==1) cw+=w[t-1];
    r-=w[t-1];
}
function restore(t){
    if(x[t-1]==1) cw-=w[t-1];
    r+=w[t-1];
}
function output(){
    console.log("最佳载重",bestw);
    console.log("最佳装载方式",bestx);
}
async function main(){
    n=5;//集装箱数
    c=10;//轮船的载重量
    w=[7,2,6,5,4];//集装箱的重量。
    x=new Array(n);//装或者不装
    bestx=new Array(n);//最佳装法
    bestw=0;//最佳重量
    cw=0;
    r=0;
    for(let i=0;i<n;i++){
        r+=w[i];
    }
    await backTrace(1);
    output();
}
main();