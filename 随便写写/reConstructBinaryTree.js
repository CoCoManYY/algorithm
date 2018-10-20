async function reConstructBinaryTree(pre,vin){
    if(pre.length==0||vin.length==0){
        return;
    };
    var index = vin.indexOf(pre[0]);
    var leftVin = vin.slice(0,index);
    var rightVin = vin.slice(index+1);
    var leftVPre= pre.slice(1,index+1);
    var rightPre = pre.slice(index+1);
    var left = await reConstructBinaryTree(leftVPre,leftVin);
    var right = await reConstructBinaryTree(rightPre,rightVin);
    // if(left && right)
    //     return {left,index,right}
    // else if(left)
    //     return {left,index}
    // else if(right)
    //     return {index,right}
    // else
    //     return {index}
    return Object.assign({},left?{left}:{},{index},right?{right}:{})
}
var pre = [1,2,3,4,5,6,7];//前序遍历
var vin = [3,2,4,1,6,5,7];//中序遍历
async function main(){
    var result = await reConstructBinaryTree(pre,vin);
    console.log(result);
}
//执行主函数~~
main();
