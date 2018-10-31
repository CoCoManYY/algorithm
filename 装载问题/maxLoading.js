function maxLoading(w,c1){
    var bestW=0;
    var qw=[-1];//每一层结束的标志是-1被弄出来
    var n=w.length;
    var currentW=0;
    var i=0;//计数器
    while(qw.length){
        //放入第i箱
        if((parseInt(currentW)+parseInt(w[i]))<=c1){
            qw.push((parseInt(currentW)+parseInt(w[i])));
            if((parseInt(currentW)+parseInt(w[i]))>bestW)
                bestW=(parseInt(currentW)+parseInt(w[i]));
        }
        //不放入第i箱
        qw.push(currentW);
        currentW=qw.splice(0,1);
        if(-1==currentW){//标记一次循环结束了
            if(i==n-1)
                return bestW;
            else qw.push(-1);//进入下一层
            currentW=qw.splice(0,1);
            ++i;
        }
    }
}
function main(){
    var c1=50,c2=50;
    var w=[10,40,40];
    var total_w=0;
    for(let i=0;i<w.length;i++){
        total_w+=w[i];
    }
    if(total_w<c1||total_w<c2){
        console.log(`一艘船装载即可,船${total_w<c1?1:''}${total_w<c2?'和2':''}`);
    }
    if(total_w>c1+c2){
        console.log('无法装载');
    }
    var Mc1=maxLoading(w,c1);
    if(total_w-Mc1<=c2){
        console.log(`可以装载，第一个船装${Mc1}，第二个船装${total_w-Mc1}`);
    }else{
        console.log('无法装载');
    }

}
main();