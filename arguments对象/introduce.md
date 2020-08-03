* 在调用函数时，浏览器会向这个函数传入两个参数
> this：函数上下文对象
> arguments：封装实参的对象

* arguments 是一个类数组对象,可以通过索引操作数据
* 调用函数时，将所传递的实参都会封装到arguments中

```
1、arguments对象实际上是所在函数的一个内置类数组对象
2、每个函数都有一个arguments属性，表示函数的实参集合(执行函数时实际传入的参数的集合)
3、arguments不是数组而是一个对象，但和数组很类似(拥有数组的常用属性及方法)，所以被称为类数组对象
4、arguments对象不能显式的创建，它只有在函数开始时才可用
5、arguments有属性callee、length和迭代器Symbol
6、arguments.length为函数实参个数，可以用arguments[length]显示调用参数
7、arguments对象可以检测参数个数，模拟函数重载
```