# 数据类型
## undefined、null、string、boolean、number、symbol[es6]、object[Data、function、Array等]、BigInt

***

* null与undefined?
> null只有一个值，是null，表示一个空对象指针，即不存在的对象。

> undefined只有一个值，是undefined，没有初始化。[undefined是从null中派生出来的]。

> undefined是没有定义的，null是定义了但是为空。

> undefined值是派生自null值，console.log(undefined == null); //true

***

* null不存在的原因?
> 1. 方法不存在
> 2. 对象不存在
> 3. 字符串变量不存在
> 4. 接口类型对象没初始化 

***

* == 和 === ？
> ==：运算符称作相bai等，用来检测两个操du作数是否相等，这里的相等定义zhi的非常宽松，可以允许进dao行类型转换

> ===：用来检测两个操作数是否严格相等

***

* 对象比较？
> 遍历比较key和value，Object.is(value1, value2)。

