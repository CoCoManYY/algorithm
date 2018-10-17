let fs=require('fs')
function * readFileByLine(){
    let file = fs.readFile('a.txt');
    try{
        while(!file.eof){//文件没有读取到末尾,没找到哭了
            yield parseInt(file.readLine(),10);
        }
    }finally{
        fs.close(0, function (err){
            if (err) console.error(err);
            console.log('文件关闭成功');
        });
    }
}

var r=readFileByLine();
r.next();