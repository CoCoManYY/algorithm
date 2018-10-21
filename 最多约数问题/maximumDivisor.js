async function createSet(table,value){
    var set = new Set([1,value]);
    for(let i=2;i<=Math.floor(Math.sqrt(value));i++){//从2开始，不然table会报空
        if(value%i==0){
            set.add(table[i]);
            set.add(table[value/i]);
        }
    }
    return set;
}

async function createTable(b){//建表要从1开始，不然查值会有空
    var table = new Array();
    for(var i=1;i<=b;i++){
        table[i]=await createSet(table,i);
    }
    return table;
}

async function main(){
    var a=1;
    var b=36;
    var table = await createTable(b);
    var max=0;
    for(let i=a;i<=b;i++){
        if(table[i].size>max)
            max=table[i].size;
    }
    console.log(max);
}

main();

//总结：1、闭包问题：注意作用域的平级or嵌套
    // 2、值传递和引用传递：引用传递object，array，function，必须修改内部的值，才会相应变化；否则只会将指针指向另一个引用类型。
    // 例：function test(b){
    //         b[0]=[1,2];
    //     }
    //     var a=[1,2];
    //     var b=a;
    //     test(b);
    //     console.log(a);
    // 注意不要将函数里面的参数指向另一个对象，这样会脱离和传入参数的引用关系的~~参考：https://www.cnblogs.com/jameslong/p/3865771.html