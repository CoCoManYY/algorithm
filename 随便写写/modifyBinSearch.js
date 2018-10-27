var key;
var arr = new Array();
var left;
var right;
function binarySearch() {
    var start = 0, end =arr.length-1, mid;
    while (start<end) {
        mid = start+(end-start)/2;
        if (key == arr[mid]) {
            return mid;
        } else if (key < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    //找不到元素
    if(key<arr[mid]){
        right=mid;
        left=start;
    }else{
        left=mid;
        right=end;
    }
}