// 问题描述
// 给定 n 位正整数 a，去掉其中任意 k≤n 个数字后，剩下的数字按原次序排列组成一个 新的正整数。对于给定的 n 位正整数 a 和正整数 k，设计一个算法找出剩下数字组成的新数 最小的删数方案。
// 对于给定的正整数 a，编程计算删去 k 个数字后得到的最小数。
// 数据输入： 
// 第 1 行是 1 个正整数 a。第 2 行是正整数 k。
function delk(){
   if(k>=m) return;
   while(k>0){
       for(var i=0;i<m-1&&a[i]<a[i+1];i++);//找到高位比低位大的值
       a.splice(i,1);
       k--;
   }
   while(m>1&&a[0]=='0')
        a.splice(0,1);
}
function main(){
    a=321456;//整数a
    k=3;//删除的数字个数
    console.log(a,'删除',k,'位数后的最小值为：');
    a=a.toString();
    a=a.split('');
    m=a.length;//数字长度
    delk();
    console.log(a.join(''));
}
main();