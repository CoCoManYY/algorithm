function *fibonacci(){
    let [pre,cur] = [0,1];
    while(1){
        [pre,cur]=[cur,pre+cur];
        yield cur;
    }
}

function main(){
    for(let n  of fibonacci()){//可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
        if(n>1000)
        break;
        console.log(n);
    }
}

main();