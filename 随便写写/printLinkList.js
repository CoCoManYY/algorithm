// 注意的是链表的值是val，哭出猪声
function printListFormTailToHead1(head){
    res=[];
    while(head!=null){
        res.unshift(head.val); 
        head=head.next;
    }
    return res;
}

function printListFormTailToHead2(head){
    res=[];
    while(head){
        res.push(head.val); 
        head=head.next;
    }
    return res.reverse();
}