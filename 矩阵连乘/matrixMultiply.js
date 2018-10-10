// 定义变量
var p = new Array();
var m = new Array();
var s = new Array();
var n;
// 初始化数组
function creatMatrix(n) {
  for(let i = 0;i < n;i++) {
      //这里有坑啊，JavaScript数组是对象、是引用
      m[i] = new Array(); 
      s[i] = new Array();
      for(var j=0;j<n;j++){
        m[i][j] = 0;
        s[i][j]=0;
    }
  }
}
//所有矩阵下表从0开始
function matrixChain(n) {
    var i,j,r,k;
    for(i = 0;i < n;i++) {
        m[i][i] = 0;
    }
    for(r = 2;r <= n;r++) {//r为连乘矩阵的个数
        for(i = 0; i <= n-r;i++) { 
            j = i+r-1;
            m[i][j] = m[i+1][j] + p[i]*p[i+1]*p[j+1];
            // console.log('m['+i+']['+j+']'+m[i][j]);
            s[i][j] = i;
            for(k = i;k < j-1;k++) {
                var t = m[i][k] + m[k+1][j] + p[i]*p[k+1]*p[j+1];
                if(t < m[i][j]) {
                    m[i][j] = t;
                    s[i][j] = k;
                }
            }
        }
    }
}
//根据s[][]记录各个子段的最优解
var formula = '';
async function traceBack(i,j){
    if(i == j){
      formula+='M'+(i+1);
      return;
    }
    if(i<s[i][j])
        formula+='(';  
    await traceBack(i,s[i][j]);
    if(i<s[i][j])
        formula+=')';
    if(s[i][j]+1<j) //最后一个可以不加括号！
        formula+='(';
    await traceBack(s[i][j]+1,j);
    if(s[i][j]+1<j)
        formula+=')';
}
//主函数！
async function main(){
    n = 5;
    p = [30,35,15,5,10,20];
    creatMatrix(n)
    matrixChain(n);
    console.log(s);
    console.log('最少相乘次数');
    console.log(m[0][n-1]);
    await traceBack(0,n-1); //异步等待执行完毕！
    console.log('表达式：');
    console.log(formula);
}

//执行！
main();