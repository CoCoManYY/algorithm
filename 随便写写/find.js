function Find(target,array){
    lenX=array.length;//行
    lenY=array[0].length;//列
    i=0;j=lenY-1;
    while(i<lenX&&j>=0){
        if(array[i][j]<target)
            i++;
        else if(array[i][j]>target)
            j--;
        else
            return true;
    }
    return false;
}
//测试
var array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
target=7;

console.log(Find(target,array));