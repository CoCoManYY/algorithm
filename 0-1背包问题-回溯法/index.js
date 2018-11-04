//有n件物品和一个容量为c的背包。第i件物品的价值是v[i]，重量是w[i]。求解将哪些物品装入背包可使价值总和最大。所谓01背包，表示每一个物品只有一个，要么装入，要么不装入。
async function backTrace(t){
    if(t>n) record();
    else{
        for(let i=0;i<=1;i++){
            x[t-1]=i;
            if(constraint(t)&&bound(t)){//限制条件和上届函数
                await change(t);
                await backTrace(t+1);
                await restore(t);
            }
        }
    }   
}
function record(){//如果有了可行解判断是都最优解，如果是，则记录下来
    if(cv>bestv){
        bestv=cv;
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
    if(x[t-1]==1||x[t-1]==0&&cv+rv-v[t-1]>bestv) return true;
    else return false;
}
function change(t){
    if(x[t-1]==1) {
        cw+=w[t-1];
        cv+=v[t-1];
    }
    rw-=w[t-1];
    rv-=v[t-1]
}
function restore(t){
    if(x[t-1]==1) {
        cw-=w[t-1];
        cv-=v[t-1];
    }
    rw+=w[t-1];
    rv+=v[t-1];
}
function output(){
    console.log("最大价值",bestv);
    console.log("最佳装入方式",bestx);
}
async function main(){
    n=5;//物品数
    c=10;//背包容量
    v=[6,3,5,4,6];//物品价值
    w=[2,2,6,6,4]//物品重量
    x=new Array(n).fill(0);//装或者不装
    bestx=new Array(n);//最佳装法
    bestv=0;//最佳重量
    cw=0;
    cv=0;
    rw=0;
    rv=0;
    for(let i=0;i<n;i++){
        rw+=w[i];
        rv+=v[i];
    }
    await backTrace(1);
    output();
}
main();