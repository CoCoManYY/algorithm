// 设是有n个元素的数组，(0<=k<=n-1)2ws2是一个非负整数。
// 试设计一个算法将子数组与换位。
// 要求算法在最坏情况下所用的计算时间为O(n)，
// 且只用到 O(1)的辅助空间。
function swap(array,start1,start2,k){
    for(i=0;i<k;i++){
        var temp=array[start1+i];
        array[start1+i]=array[start2+i];
        array[start2+i]=temp;
    }
}


function swapK(array,start,n,k){
    if(k==n-k){
        swap(array,start,start+k,k);
    }else if(k<n-k){
        swap(array,start,start+n-k,k);
        swapK(array,start,n-k,k);
    }else{
        swap(array,start,start+k,n-k);
        swapK(array,start+n-k,k,n-k);
    }
}

async function main(){
    var arr=[1,2,3,4,5,6,7,8,9];
    await swapK(arr,0,arr.length,3);
    console.log(arr);
}
main();