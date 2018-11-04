// 给定 n 个大小不等的圆 c1,c2,...,cnc1,c2,...,cn ，
// 现要将这 n 个圆排进一个矩形框中，且要求各圆与矩形框的底边相切。
// 圆排列问题要求从 n 个圆的所有排列中找出有最小长度的圆排列。
// 例如，当 n=3，且所给的 3 个圆的半径分别为 1，1，2 时，这 3 个圆的最小长度的圆排列如图所示。其最小长度为 2+42–√2+42 。

function center(t){//计算当前所选圆的圆心坐标
    var temp=0;
    for(let i=0;i<t-1;i++){
        var valuex=x[i]+2*Math.sqrt(r[t-1]*r[i]);
        if(valuex>temp) temp=valuex;
    }
    return temp;
}
function compute(){//计算当前圆排列的长度
    var low=0,high=0;
    for(let i=0;i<n;i++){//因为不一定跟哪个圆相切
        if(x[i]-r[i]<low) low=x[i]-r[i];
        if(x[i]+r[i]>high) high=x[i]+r[i];
        b[i]=r[i];//记录下来
    }
    if(high-low<min) min=high-low;
}
function backtrack(t){//t为选中的位置！！
    if(t>n) compute();
    else
        for(let i=t-1;i<n;i++){
            swap(t-1,i);
            var centerx=center(t);
            if(centerx+r[t-1]+r[0]<min){//下界约束
                x[t-1]=centerx;
                backtrack(t+1);
            }
            swap(t-1,i);
        }
}
//工具函数
function swap(x,y){//注意引用传递和值传递，这是真的要交换！
    var temp=r[x];
    r[x]=r[y];
    r[y]=temp;
}
function main(){
    //测试数据
    n=3;
    b=[1,1,2];
    min=Infinity;//最小值
    x=new Array();//当前圆排列的圆心横坐标
    r=[].concat(b);//当前圆排列
    backtrack(1);
    console.log("最小长度",min.toFixed(5));//保留五位小数
    console.log("圆排序",b);
}
main();
