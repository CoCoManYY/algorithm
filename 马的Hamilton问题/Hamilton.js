//定义变量
var board = new Array();
var m = 8//行
var n = 8//列
var cnt=1//计数
//创建棋盘
function createBoard(m,n){
    for(i=0;i<m;i++){
        board[i]=new Array();
    }
}
//马儿跑起来
function solve(i,j){
   //1
    if((i-2>=0)&&(i-2<=m-1)&&(j+1>=0)&&(j+1<=n-1)){
        if(!board[i-2][j+1]){
        board[i-2][j+1]=cnt;
        cnt++;
        solve(i-2,j+1);
        }
    }
    //2
    if((i-1>=0)&&(i-1<=m-1)&&(j+2>=0)&&(j+2<=n-1)){
        if(!board[i-1][j+2]){
        board[i-1][j+2]=cnt;
        cnt++;
        solve(i-1,j+2);
        }
    }

    //3
    if((i+1>=0)&&(i+1<=m-1)&&(j+2>=0)&&(j+2<=n-1)){
        if(!board[i+1][j+2]){
        board[i+1][j+2]=cnt;
        cnt++;
        solve(i+1,j+2);
        }
    }
    //4
    if((i+2>=0)&&(i+2<=m-1)&&(j+1>=0)&&(j+1<=n-1)){
        if(!board[i+2][j+1]){
        board[i+2][j+1]=cnt;
        cnt++;
        solve(i+2,j+1);
        }
    }
    //5
    if((i+2>=0)&&(i+2<=m-1)&&(j-1>=0)&&(j-1<=n-1)){
        if(!board[i+2][j-1]){
        board[i+2][j-1]=cnt;
        cnt++;
        solve(i+2,j-1);
        }
    }
    //6
    if((i+1>=0)&&(i+1<=m-1)&&(j-2>=0)&&(j-2<=n-1)){
        if(!board[i+1][j-2]){
        board[i+1][j-2]=cnt;
        cnt++;
        solve(i+1,j-2);
        }
    }
    //7
    if((i-1>=0)&&(i-1<=m-1)&&(j-2>=0)&&(j-2<=n-1)){
        if(!board[i-1][j-2]){
        board[i-1][j-2]=cnt;
        cnt++;
        solve(i-1,j-2);
        }
    }
    //8
    if((i-2>=0)&&(i-2<=m-1)&&(j-1>=0)&&(j-1<=n-1)){
        if(!board[i-2][j-1])
        {
        board[i-2][j-1]=cnt;
        cnt++;
        solve(i-2,j-1);
        }
    }
}
function main(){
    //定义起点位置
    var i = 0;
    var j = 2;
    createBoard(m,n);
    board[i][j]=64;
    solve(i,j);
    console.log(board);
}
main();