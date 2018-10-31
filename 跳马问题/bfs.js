// 由于每个点只能由小于等于8个方向可以走，故可以将棋盘看成一个图，
// 采用dfs广度优先遍历，遍历八个方向，直至找到满足条件的点为止。
// 首先利用一个二维数组dir来记录八个方向，再采用一个队列（利用JavaScript的数组操作模拟）使得广度优先遍历更加方便。
// 每次遍历到一个点做一下标记，并存入队列中，以免重复计算甚至造成死循环。
// 直至找到目标点，break掉循环，并返回步数即可~~

//全局变量
var dir=[[-2,-1],[2,-1],[-2,1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]]//八个方向
function bfs(map,flag,startX,startY,endX,endY){
    var ans=0,x,y,step;
    var queue=new Array();
    queue.push([[startX,startY],0]);
    flag[startX][startY]=1;
    while(queue.length){
        var p=queue[0];
        queue.splice(0,1);//模拟队列
        x=p[0][0],y=p[0][1],step=p[1];
        if(x==endX&&y==endY)
            break;
        for(let i=0;i<8;i++){//递归的时候一定要写上let or var
            var dx=x+dir[i][0];
            var dy=y+dir[i][1];
            if(ok(dx,dy)&&flag[dx][dy]==0){//下标范围正常而且未走过
                flag[dx][dy]=1;//记录当前走到这一步
                queue.push([[dx,dy],step+1])
            }
        }
    }
    return step;
}
function ok(x,y){//判断函数
    if(x<8&&x>=0&&y<8&&y>=0)
        return true;
    return false;
}
function main(){ 
   var map=new Array(8).fill(0);
   var flag=new Array(8).fill(0);
   for(let i=0;i<8;i++){
       map[i]=new Array(8).fill(0);
       flag[i]=new Array(8).fill(0);
   }
   var startX=1,startY=1;
   var endX=1,endY=2;
   var result=bfs(map,flag,startX,startY,endX,endY);
   console.log(`(${startX},${startY})=>(${endX},${endY}): ${result} moves`);
}
main();