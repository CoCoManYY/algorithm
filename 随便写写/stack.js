var inStack = [];
var outStack = [];
function push(node){
    inStack.push(node);
}

function pop(node){
    if(outStack.length>0)
        node = outStack.pop(node);
    else{
        while(inStack.length){
            node = inStack.pop(node);
            outStack.push(node);
        }
        node = outStack.pop(node);
    }
    return node;
}