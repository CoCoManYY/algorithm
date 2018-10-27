// 1、先写表达式
// 2、注意要优雅！
async function factorial(n){//阶乘
    if(n==0)//注意0
        return 0;
    var result =1;
    while(n>0){
        result*=n;
        n--;
    }
    return result;
}

async function lessArray(array){//之前比自己小的数的个数建表！
    var result=new Array(array.length+1).join('0').split('');//创建全零数组
    for(let i=0;i<array.length;i++){
        +result[i];//变整型emm没成功
        result[i]=parseInt(result[i]);
        for(let j=0;j<i;j++){
            if(array[i]>array[j])
                result[i]++;
        }
    }
    return result;
}

async function serialNumber(less,array){//排序号=比当前数小的个数
    var factor=await factorial((array.length)-1);
    if(array.length==1)
        return (array[0]-less[0]-1)*factor;
    var result=(array[0]-less[0]-1)*factor+await serialNumber(less.slice(1),array.slice(1));
    return result;
}

function nextNumber(array){//下一个序号！
    var num = array.length-1;
    var flag=true;
    while(flag&&num-1>=0){//不为全是降序，也就是不是最后一个
        if(array[num]>array[num-1]){
            flag=false;
            break;
        }
        num--;
    }
    if(flag==true){
        console.log('已经是最后一个排列');
    }else{
        var pre=array.slice(0,num-1);
        var post=array.slice(num-1);
        for(let i=1;i<post.length;i++){
            if(post[i]<post[0]||i==post.length-1){//找到降序序列里面差第一个元素最少且比它大的元素，or到最后一个也没找到就直接和最后一个交换
                let temp=post[0];
                post[0]=post[i];
                post[i]=temp;
                break;
            }
        }
        post.reverse();//反转！
        post.unshift(post.pop());//最后一位放到第一位  
        return pre.concat(post); 
    }
}

async function main(){
    //测试用例
    var array=[2,6,4,5,8,1,7,3];
    var less=await lessArray(array);
    var number=await serialNumber(less,array);
    var order=await nextNumber(array);
    console.log('该排列的字典序值为：'+number);
    console.log('下一个排列为：'+order);
}


main();