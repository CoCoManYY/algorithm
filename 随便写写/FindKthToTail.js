//定义一个快指针、一个慢指针相差k-1
function FindKthToTail(head,k){
    var slow;
    var fast;
    if(head==null||k<=0)
        return null;
    fast=slow=head;
    for(let i=0;i<k-1;i++){
        if(fast.next!=null)
            fast=fast.next;
        else 
            return null;
    }
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }
    return slow;
}