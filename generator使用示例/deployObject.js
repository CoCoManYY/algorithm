function * deployObjectInterface(obj){
    let keys = Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        let key=keys[i];
        yield [key,obj[key]];
    }
}

let obj={name:"rourou", age:19};

for(let [key,value] of deployObjectInterface(obj)){//利用for..of性质
    console.log(key,value);
}