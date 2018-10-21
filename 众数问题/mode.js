function createTable(s){
    var table = new Map();
    s.forEach(e => {
        table.set(e,table.get(e)?table.get(e)+1:1);
    });
    return table;
}

async function main(){
    var s=[1,2,3,3,3,3,3,3,5]
    var table =  await createTable(s);
    var mode=s[0];
    table.forEach((value, key)=>{
        if(value>mode){
            mode = key;
        }
    })
    console.log(mode);
}
main();