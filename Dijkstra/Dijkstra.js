//定义变量
var print=[];
var vPath=[];

//dijkstra算法
function dijkstra(path,index){
    var m=path && path.length;
    var n=m&&path[0].length;
    if(m&&n&&m===n&&index<n){
        //初始化distance
        var dis=[];
        var i;
        for(i=0;i<n;i++){
            dis.push(path[index][i]);
        }
        var flag=[];//用于标识index号至其他顶点的距离是否确定
        for(i=0;i<n;i++){
            flag.push(false);
        }
        flag[index]=true;
        var min,minIndex;
        for(i=1;i<n;i++){ //每个循环可以确定一个值
            min=Infinity;
            for(var j=0;j<n;j++){//每次找一波没有确定值的结点
                  if(!flag[j]&&dis[j]<min){//从未确定距离的点中选出距离最短的那个
                  
                    min=dis[j];
                    minIndex=j;
                }
                if(i==1){//路径中先存一波直达的结点路径
                    if(dis[j] == Infinity)
                        vPath[j] = Infinity;     // 该点暂时没找到前驱结点
                    else
                    vPath[j] = index;     // 该点的前驱结点为起始点v
                }
            }
            flag[minIndex]=true;//从估计值变成了确定值
            for(var k=0;k<n;k++){//更新一波dist
                if(path[minIndex][k]<Infinity){//判断minIndex到k之间有没有道路
                    if(dis[k]>dis[minIndex]+path[minIndex][k]){
                        vPath[k]=minIndex;
                        dis[k]=dis[minIndex]+path[minIndex][k];
                    }
                }
            }
        }
        return dis;
    }else{
        throw new Error("数据有误");
    }
}
//打印路径
function Print(index){
    print.push(index);
do{
    print.push(vPath[index]);
    index=vPath[index];
    }while(vPath[index]!=Infinity)
    console.log(print.reverse().join('->'));
}
//测试用例
var path=[[Infinity, 10,  Infinity, 30, 100],
[Infinity, Infinity, 50, Infinity,  Infinity],
[Infinity, Infinity, Infinity, Infinity, 10],
[Infinity, Infinity, 20, Infinity, 60],
[Infinity, Infinity, Infinity, Infinity, Infinity]]

//0->4的路径
var src = 0;
var des = 4;

var dis = dijkstra(path,src);
console.log('最短距离为：',dis[des]);
console.log('最短路径为：');
Print(des);
