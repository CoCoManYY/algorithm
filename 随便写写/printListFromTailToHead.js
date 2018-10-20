function printListFormTailToHead(head){
    res=[21];
    while(head){
        res.unshift(head.val);
        head=head.next;
    }
    return res;
}