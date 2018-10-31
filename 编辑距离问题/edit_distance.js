// 假设字符串 a, 共 m 位，从 a[1] 到 a[m]
// 字符串 b, 共 n 位，从 b[1] 到 b[n]
// d[i][j] 表示字符串 a[1]-a[i] 转换为 b[1]-b[j] 的编辑距离
// 那么有如下递归规律（a[i] 和 b[j] 分别是字符串 a 和 b 的最后一位）：
// 当 a[i] 等于 b[j] 时，d[i][j] = d[i-1][j-1], 比如 fxy -> fay 的编辑距离等于 fx -> fa 的编辑距离
// 当 a[i] 不等于 b[j] 时，d[i][j] 等于如下 3 项的最小值：
// d[i-1][j] + 1（删除 a[i]）， 比如 fxy -> fab 的编辑距离 = fx -> fab 的编辑距离 + 1
// d[i][j-1] + 1（插入 b[j])， 比如 fxy -> fab 的编辑距离 = fxyb -> fab 的编辑距离 + 1 = fxy -> fa 的编辑距离 + 1
// d[i-1][j-1] + 1（将 a[i] 替换为 b[j]）， 比如 fxy -> fab 的编辑距离 = fxb -> fab 的编辑距离 + 1 = fx -> fa 的编辑距离 + 1
// 递归边界：
// a[i][0] = i, b 字符串为空，表示将 a[1]-a[i] 全部删除，所以编辑距离为 i
// a[0][j] = j, a 字符串为空，表示 a 插入 b[1]-b[j]，所以编辑距离为 j
function edit_distance(a,b,edit){
    //初始化edit数组
    for(let i=0;i<=a.length;i++){
        edit[i][0]=i;
    }
    for(let i=0;i<=b.length;i++){
        edit[0][i]=i;
    }
    // 开始自底向上
    for(let i=1;i<=a.length;i++){
        for(let j=1;j<=b.length;j++){
            if(a[i-1]==b[j-1]){
                edit[i][j]=edit[i-1][j-1];
            }else{
                edit[i][j]=Math.min(edit[i-1][j]+1,edit[i][j-1]+1,edit[i-1][j-1]+1);
            }
        }
    }
}

function main(){
    var a='qiutu';
    var b='rourou';
    var edit=new Array(a.length+1).fill(0);
    for(let i=0;i<=a.length;i++){//动态规划的二维数组记得归零
        edit[i]=new Array(b.length).fill(0);
    }
    edit_distance(a,b,edit)
    console.log(edit[a.length][b.length])
}
main();