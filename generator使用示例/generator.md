###对Generator函数的理解

generator函数是ES6提供的一种异步编程的解决方案
####一、异步编程
1、所谓“异步”，就是先执行第一段，转而执行其他的任务，等做好了准备再回来执行后面的。
2、**编程方式主要有**
>1.回调函数
2.事件监听
3、发布/订阅者
4、Promise对象

3、所谓回调函数，就是把第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数即可。
  回调函数的底部方式容易形成多重嵌套，造成“回调地狱”，callback hell。

####二、什么是Generator？
**语法上**可以理解成是一个状态机，里面封装了很多的内部状态。
**形式上**它就是一个普通的函数。
整个generator函数就是一个封装的异步任务，或者说是异步任务的容器，异步操作需要暂停的地方都会使用yield语句。
#####generator函数的特性
1、function关键字和函数之间有一个星号（*），而且函数内部由yield表达式，表述不同的内部状态！！
2、**调用generator函数之后，该函数并不执行**，返回的也不是函数运行的结果，而是一个指向内部状态的指针对象。（执行内部我们需要调用next，会有{value：‘’，done：‘’}对象哦）

####三、尝试定义一下generator函数
```
function* fn() {
    yield 'hello';
    yield 'world';
    yield 'end';
}
var f1 = fn();
console.log(f1);
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
```
我们可以看一下输出c:
```
{}
{ value: 'hello', done: false }
{ value: 'world', done: false }
{ value: 'end', done: false }
```
跟第二部分讲的一样，验证好了很开心！！
####四、yield表达式和next（）方法
generator函数调用之后返回的是一个遍历器对象（可能有点晦涩的说法），只有调用next方法才会去遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。
yield表达式就是暂停标志。
yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句才会执行。

**return方法和next方法的区别：**
> - return终结遍历，之后的yield语句都会失效；next返回的是本次yield语句的返回值
- return没有参数的时候，返回{value:undefine,done:true}；next没有参数的时候返回本次yield语句的返回值。
- return有参数的时候，覆盖本次yield语句的返回值，也就是返回{value：参数，done：true}；而next有参数的时候会覆盖上一次yield语句的返回值，导致本次的返回值有可能改变（如果上一次yield参与运算的话）

**for of循环**
可以自动遍历generator函数时生成的iterator对象，且此时不需要调用next方法。以但next方法的返回对象的done属性为true，for...of循环就会中止，**且不包含该返回对象**

####五、generator函数使用示例
等我写完传到GitHub~~