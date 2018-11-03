// 给定一个N*N 的方形网格，设其左上角为起点◎，坐标为（1，1），X 轴向右为正，Y 
// 轴向下为正，每个方格边长为1，如图所示。一辆汽车从起点◎出发驶向右下角终点▲，其 
// 坐标为（N，N）。在若干个网格交叉点处，设置了油库，可供汽车在行驶途中加油。汽车在 
// 行驶过程中应遵守如下规则： 
// (1)汽车只能沿网格边行驶，装满油后能行驶K 条网格边。出发时汽车已装满油，在起 
// 点与终点处不设油库。 
// (2)汽车经过一条网格边时，若其X 坐标或Y 坐标减小，则应付费用B，否则免付费用。 
// (3)汽车在行驶过程中遇油库则应加满油并付加油费用A。 
// (4)在需要时可在网格点处增设油库，并付增设油库费用C（不含加油费用A）。 
// (5)(1)～(4)中的各数N、K、A、B、C均为正整数，且满足约束：2<=N<=100，2<=K<=10。 
// 设计一个算法，求出汽车从起点出发到达终点的一条所付费用最少的行驶路线。
function gasStation(){
    for(let i=1;i<=n;i++){//初始化
        for(let j=1;j<=n;j++){
            f[i][j]=[Infinity,k];
        }
    }
    f[1][1][0]=0;
    f[1][1][1]=k;
    var count=1;
    var tx,ty;
    while(count){
        count=0;
        for(let i=1;i<=n;i++){
            for (let j=1;j<=n;j++){
                if(i==1&&j==1) continue;
                var minStep=Infinity;
                var minDStep;
                var step
                var dStep;
                for(let m=0;m<4;m++){//注意变量的定义，不要重复哭出声！！
                    tx=i+s[m][0];
                    ty=j+s[m][1];
                    if(tx<1||ty<1||tx>n||ty>n) continue;
                    //通项公式
                    step=f[tx][ty][0]+s[m][2];//花费价值
                    dStep=f[tx][ty][1]-1;//剩余步数
                    if(net[i][j]==1){//如果有加油站
                        step+=a;
                        dStep=k;
                    }
                    if(net[i][j]==0&&dStep==0&&(i!=n||j!=n)){//没有加油站，但是没有步数了
                        step+=a+c;
                        dStep=k;
                    }
                    if(step<minStep){//可以走，四个方向的最优解
                        minStep=step;
                        minDStep=dStep;
                    }
                }
                if(f[i][j][0]>minStep){//有更优解
                    count++;
                    f[i][j][0]=minStep;
                    f[i][j][1]=minDStep;
                }
            }
        }
    }
    return f[n][n][0];
}
function main(){
    n=9;//方形网络规模
    k=3;//装满油后能行驶K条网格边
    a=2;//汽车在行驶过程中遇到油库应加满油并付加油费用A
    b=3;//汽车经过一条网格边时，若其X 坐标或Y 坐标减小，则应付费用B
    c=6;//在需要时可在网格点处增设油库，并付增设油库费用C
    s=[[-1,0,0],[0,-1,0],[1,0,b],[0,1,b]];
    f=new Array(n+1);
    net=[[],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,1,1,0,0],
        [0,1,0,1,0,0,0,0,1,0],
        [0,0,0,0,0,0,1,0,0,1],
        [0,1,0,0,1,0,0,1,0,0],
        [0,0,1,0,0,0,0,0,1,0],
        [0,0,0,0,0,1,0,0,0,1],
        [0,1,0,0,1,0,0,0,1,0],
        [0,0,1,0,0,0,0,0,0,0]]
    for(let i=1;i<=n;i++){
        f[i]=new Array(n+1);
    }
   result=gasStation();
   console.log("方形规模为",n);
   console.log("装满油能行驶的步数",k);
   console.log("加油费",a);
   console.log("坐标减少时费用",b);
   console.log("增设油库费用",c);
   console.log("方形网络",net);
   console.log("最优行驶路线所需费用为",result);
}
main();