// 伪代码
function* main(){
    var result = yield request("http://some.url");
    var res = JSON.parse(result);
    console.log(res.value);
}

function request(url){
    makeAjaxCall(url,function(res){
        it.next(res);//利用回调函数调用next
    })
}

var it = main();
console.log(it.next());