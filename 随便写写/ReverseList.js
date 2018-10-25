function ReverseList(pHead){
    var pre=null;
    var next;
    while(pHead!=null){//将pHead指针移除链表
        next=pHead.next;
        pHead.next=pre;
        pre=pHead;
        pHead=next;
    }
    return pre;//最终留下反向指针
}