// 给定三角形，从底至顶的一条路径，使数字总和最大
function triangle_array(tri,n){
    for(let i=0;i<n;i++){//初始化
        for(let j=0;j<n;j++){
            b[i][j]=tri[i][j]?tri[i][j]:0;
        }
    }
    for(let i=1;i<n;i++){
        for(let j=0;j<=i;j++){
            if(j==0) b[i][j]+=b[i-1][j];
            else if(j==i) b[i][j]+=b[i-1][j-1];
            else b[i][j]+=max(b[i-1][j],b[i-1][j-1]);
        }
    }
}
//工具函数
function max(x,y){
    return x>y?x:y;
}
function find(n){
    var max=0;
    for(let i=0;i<n;i++){
        if(b[n-1][i]>max) max=b[n-1][i];
    }
    return max;
}
function main(){
    var tri=[[7],[3,8],[8,1,0],[2,7,4,4],[4,5,2,3,6,5]];
    var n=tri.length;
    //动态规划
    b=new Array(n);
    for(let i=0;i<n;i++){
        b[i]=new Array(n);
    }
    triangle_array(tri,n);
    var result=find(n);
    console.log("输入三角形",tri);
    console.log("最大值",result);
}
main();