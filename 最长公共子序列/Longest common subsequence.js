//定义变量
var x = new Array();
var y = new Array();
var c = new Array();
var b = new Array();
//初始化二维数组函数
function init2DArray(m){
    for(let i=0;i<m+1;i++){//注意加1
        c[i]=new Array();
        b[i]=new Array();
    }
}

function LCSLength(m,n){
    var i,j;
    for(i=1;i<=m;i++) c[i][0]=0;
    for(i=1;i<=n;i++) c[0][i]=0;
    for(i=1;i<=m;i++)
        for(j=1;j<=n;j++){
            if(x[i-1]==y[i-1]){//注意i-1
                c[i][j]=c[i-1][j-1]+1;//小心数组越界
                b[i][j]=1;//表示是由第一个子问题的解得到的
            }
            else if(c[i-1][j]>=c[i][j-1]){
                c[i][j]=c[i-1][j];
                b[i][j]=2;
            }
            else{
                c[i][j]=c[i][j-1];
                b[i][j]=3;
            }
        }
}
var lcs_str=new Array();
async function LCS(i,j){
    if(i==0||j==0) return;
    if(b[i][j] == 1){
        lcs_str+=x[i-1]; //不可能比比较的两个字符串长，注意字符串i-1；
        await LCS(i-1,j-1);
  
    }
    else if(b[i][j]==2){
        await LCS(i-1,j);
    
    }
    else if(b[i][j]==3){//一定要写上，因为前面是undefine，不然会死循环
        await LCS(i,j-1);
    }
       return;
}
//主函数
async function main(){
     x='aaaabacd';
     y='hhhhbacdd';
     m=x.length;
     n=y.length;
     await init2DArray(m);
     await LCSLength(m,n);
     await LCS(m,n);
     console.log('c表：');
     console.log(c);
     console.log('b表：');
     console.log(b);
     console.log('最长公共子序列为：');
     console.log(lcs_str.split('').reverse().join(''));
    //  console.log(Array.prototype.reverse.apply(lcs_str.split('')).join(''));
 }
//调用主函数
 main();