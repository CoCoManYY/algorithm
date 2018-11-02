// 有N堆石子排成一排，每堆石子有一定的数量。
// 现要将N堆石子并成为一堆。
// 合并的过程只能每次将相邻的两堆石子堆成一堆，
// 每次合并花费的代价为这两堆石子的和，
// 经过N-1次合并后成为一堆。
// 求出总的代价最小值。 

function stoneConsolidation(n){
    for(let i=0;i<2*n-1;i++){
        fMax[i][i]=fMin[i][i]=0;
    }
// 从i到j利用k分割
    for(let i=2*n-1-2;i>=0;i--){
        for(let j=i+1;j<2*n-1;j++){
            for(let k=i;k<=j-1;k++){
                // console.log(s[j],s[i-1]);
                fMax[i][j]=max(fMax[i][j],fMax[i][k]+fMax[k+1][j]+s[j]-(i==0?0:s[i-1]));
                // console.log(fMax[i][j]);
                fMin[i][j]=min(fMin[i][j],fMin[i][k]+fMin[k+1][j]+s[j]-(i==0?0:s[i-1]));
            }
        }
    }
}
//工具函数
function max(x,y){
    // console.log('max',x,y);
    return x>y?x:y;
}
function min(x,y){
    return x<y?x:y;
}
function get_ans(n){
    max_ans=0;
    min_ans=Infinity;
    for(let i=0;i<n;i++){
        max_ans=max(max_ans,fMax[i][i+n-1]);
        min_ans=min(min_ans,fMin[i][i+n-1]);
    }
}
function main(){
    //测试数据
    var stones=[4,5,9,4];
    var num = stones.length;
    //全局
    s=new Array();
    fMin=new Array(2*num-1)
    fMax=new Array(2*num-1)
    for(let i=0;i<num;i++){
        s[i]=s[i+num]=stones[i];
    }
    for(let i=1;i<2*num-1;i++){//前缀优化
        s[i]+=s[i-1];
    }
    for(let i=0;i<2*num-1;i++){
        fMin[i]=new Array(2*num-1).fill(Infinity);
        fMax[i]=new Array(2*num-1).fill(-Infinity);
    }
    stoneConsolidation(num);
    get_ans(num);
    //输出
    console.log('输入',stones);
    console.log("前缀优化",s);
    console.log("最小得分",max_ans);
    console.log("最大得分",min_ans);
}

main();
