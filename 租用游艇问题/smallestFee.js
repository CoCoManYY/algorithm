// 长江游乐俱乐部在长江上设置了n个游艇出租站，游客可以在这些游艇出租站用游艇，
// 并在下游任何一个游艇出租站归还游艇，游艇出租站i到j之间的租金是rent(i,j)，其中1<=i<j<=n。
// 试设计一个算法使得游客租用的费用最低。
// 通项公式
// r[i][j]=min(r[i][j],r[i][k]+r[k][j]);
function smallestFee(n){
    for(i=0;i<n;i++){//初始化
        r[i][i]=0;
    }
    for(let i=0;i<fee.length;i++){
        for(let j=0;j<fee[0].length;j++){
            if(fee[i][j]) r[i][j+i+1]=fee[i][j];//将输入值转入数组
        }
    }
    for(let i=n-2;i>=0;i--){//动态规划自底向上
        for(let j=i+1;j<n;j++){
            for(let k=i;k<=j-1;k++){
                r[i][j]=min(r[i][j],r[i][k]+r[k][j]);
            }
        }
    }
}
//工具函数
function min(x,y){
    return x<y?x:y;
}
function main(){
    fee=[[5,15],[7]];
    var number=fee.length+1;//记得加1
    r=new Array(number).fill(Infinity);//初始化二维数组
    for(let i=0;i<number;i++){
        r[i]=new Array(number).fill(Infinity);
    }
    smallestFee(number);
    console.log("输入",fee);
    console.log("最少租金",r[0][number-1]);

}
main();