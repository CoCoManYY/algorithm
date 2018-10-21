async function f(i,k){//以i开头的k位字符串的编码个数
    var sum=0;
    if(k==1){
        return 1;
    }else{
        for(let j=i+1;j<=26;j++){
            sum+= await f(j,k-1);
        }
        return sum;
    }
}

async function g(k){//计算所有等于k位的编码总数.
    var sum=0;
    for(let i=1;i<=26;i++){
        sum+= await f(i,k);
    }
    return sum;
}

async function calculate(s){
    var sum = 0;
    var k = s.length;
    for(let i=1;i<k;i++){//计算位数小于k的所有编码数
        sum+=await g(i);
    }

    var h=s[0]-'a'+1; //计算第一位的编码数
    for(let i=1;i<h;i++){//计算首字母小于当前首字母，但是时k位的编码个数
        sum+=f(i,k);
    }
    for(var i=1,temp=h;i<k;i++){//首字母相同时，小于当前字符串的编码数
        var n=s[i]-'a'+1;
        var length = k-i;
        for(let j=temp+1;j<n;j++){
            sum+=await f(j,length);
        }
        temp=n;
    }
    return sum+1;
}
async function main(){
    var s='abc';
    var result = await calculate(s);
    console.log(result);
}
main();