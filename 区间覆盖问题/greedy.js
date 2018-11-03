// 问题:
// 设x1,x2,…,xn是实直线上的n个点。用固定长度的闭区间覆盖这n个点，至少需要多少个这样的固定长度闭区间？设计解此问题的有效算法，并证明算法的正确性。

function greedy(){
    var count =1;
    for(let i=0,temp=point[0];i<n;i++){
        if(point[i]-temp>=k){////每次覆盖尽可能多的点
            count++;
            temp=point[i];
        }
    }
    return count;
}
function main(){
    n=7;//n个整数
    k=3;//区间长度
    point=[1,2,3,4,5,-2,6];//n个点在直线上的坐标
    console.log('区间长度',k);
    console.log('输入坐标',point);
    point.sort((a,b)=>a-b);
    var result=greedy();
    console.log("最少需要",result,"个区间");
}
main();