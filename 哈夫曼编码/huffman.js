function Huffman(str){
    this.str=str;
    this.keyCountMap=null;
    this.codeKeyMap={};
    this.keyCodeMap={};
    this.nodeList=null;
    this.root=null;
    this.code=null;
}
function Node(left=null,right=null,data=null){
    this.left=left;
    this.right=right;
    this.data=data;
}

Huffman.prototype.cal=function cal(){//将每个字符的数量存入表中
    str=this.str;
    var map={};
    var i=0;
    while(str[i]){
        map[str[i]]?map[str[i]]++:(map[this.str[i]]=1);
        i++;
    }
    this.keyCountMap=map;
}

Huffman.prototype.sort=function sort(){//将字符以key、value格式存入Node解结点，并放入结点list中，按照升序排序
    map=this.keyCountMap;
    var result=[];
    for(key in map){
        if(map.hasOwnProperty(key)){
            var obj={
                key:key,
                val:map[key]
            }
            result.push(new Node(null,null,obj));
        }
    }
    this.nodeList=result.sort(function(x,y){//升序排列
        return x.data.val>y.data.val;
    })
}

Huffman.prototype.makeTree = function makeTree(){//生成Huffman树
    var i=0;
    var parentNode;//定义父结点
    var table=this.nodeList;//节点列表
    while(table.length>1){//等于1时便生成了一棵树
        //从最小的两个开始加~
        parentNode=new Node(table[i],table[i+1],{key:null,val:table[i]['data'].val+table[i+1]['data'].val});
        table.splice(i,2);
        table.unshift(parentNode);
        table.sort(function(x,y){//再排一次序，确保前两个一定是最小的
            return x.data.val>y.data.val
        });
    }
    this.root=table[0]||new Node();//根节点就是第一个啦，当然如果nodeList是空的那就还是需要建一个空结点。
    return this.root;
}

Huffman.prototype.traversal = function traversal(tree,code){//遍历编码
    if(tree.left!=null){//左子树编码加‘0’
        traversal.call(this,tree.left,code+'0');
    }else{
        this.keyCodeMap[tree.data.key]=code;//如果为叶子节点，则将编码存入keyCodeMap中
    }
    if(tree.right!=null){//右子树编码加‘1’
        traversal.call(this,tree.right,code+'1');
    }else{
        this.keyCodeMap[tree.data.key]=code;
    }
}

Huffman.prototype.encode=function encode(){//编码函数
    this.cal();//统计字符数量
    this.sort();//存入nodelist并根据data.val排序
    var root=this.makeTree();//创建树
    console.log(root);
    this.traversal(root,'');//遍历树并编码
    var ret=this.keyCodeMap;//返回编码表
    console.log(ret);
    var i=0;
    var result='';
    while(str[i]){
        result+=ret[str[i++]];
    }
    this.code=result;
    console.log('encode:'+result);
    return result;
}

Huffman.prototype.reverseMap=function reverseMap(){//翻转Map，方便解码
    var ret=this.keyCodeMap;
    var result={};
    for(key in ret){
        if(ret.hasOwnProperty(key)){
            result[ret[key]]=key;
        }
    }
    this.codeKeyMap=result;
    return result;
}

Huffman.prototype.decode = function decode(){//解码函数
    var i=0;
    var result='';
    var data='';
    var map = this.reverseMap();//codeKeyMap
    var str=this.code;
    while(str){
        result+=str[i++];//加加加
        if(result in map){
            data+=map[result];
            str=str.replace(new RegExp('^'+result),'');//删除已经解码的编码,匹配任何开头为result的字符串
            result='';
            i=0;
        }
    }
    console.log('decode:'+data);
}

Huffman.prototype.encodeBase64=function(){
    try{
        var base64=btoa(this.code);
        return base64;
    }catch(e){
        return '';
    }
}

var str='9 8 3 4 1 2';
var huffman=new Huffman(str);
huffman.encode(str);//编码
huffman.decode();//解码