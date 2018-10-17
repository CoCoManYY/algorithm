function *preOrder(root){//前序遍历
    if(root){
        yield root.mid;
        yield* preOrder(root.left);//递归调用一定要加*
        //注意：yield 的返回值是当作一个元素；yield* 的返回值是一个 iterator，会依次返回这个 iterator 中的每个元素
        yield* preOrder(root.right);
    }
}
function *inOrder(root){//中序遍历
    if(root){
        yield* inOrder(root.left);
        yield root.mid;
        yield* inOrder(root.right);
    }
}
function *postOrder(root){//后序遍历
    if(root){
        yield* postOrder(root.left);
        yield* postOrder(root.right);
        yield root.mid;
    }
}
function Node(left,mid,right){//二叉结点
    this.left=left;
    this.mid=mid;
    this.right=right;
}
function binaryTree(arr){//JavaScript里面的二叉树是数组嵌套思想
    if(arr.length==1){
        return new Node(null,arr[0],null);
    }
    return new Node(binaryTree(arr[0]),arr[1],binaryTree(arr[2]));
}
//二叉树每次返回一个节点
var bTree=binaryTree([[['d'], 'b', ['e']], 'a', [['f'], 'c', ['g']]]);
//检验成功否
var preResult = [];
for(let node of preOrder(bTree)){
    preResult.push(node);
}
console.log('先序遍历：');
console.log(preResult);

var inResult = [];
for(let node of inOrder(bTree)){
    inResult.push(node);
}
console.log('中序遍历：');
console.log(inResult);

var postResult = [];
for(let node of postOrder(bTree)){
    postResult.push(node);
}
console.log('后序遍历：');
console.log(postResult);