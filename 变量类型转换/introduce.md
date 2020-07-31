#### 数据类型转换
js中，变量可以赋予任何类型的值，但是运算符对数据类型是有要求的，如果运算符发现，运算的类型和预期不符，就会自动转换类型，=。数据类型除了可以自动转换以外，还可以手动强制转换。

#### 显式转化（强制类型转换）
* 全局方法：Number()转换为数字、String()转换为字符串、Boolean()转换为布尔值、parseInt()、parseFloat()
* toString()方法：Date/Number/Boolean对象中均有对应的toString()方法，可以将相应对象转化为字符串
* Data对象中的getTime()方法可以将Date转化为Number
* 一元字符串 "+" 可以将字符串对象/日期对象/布尔对象转化为数字

#### 隐式转化
* 算数运算符
```
"+" 运算符
    Boolean、Number、String三者任意两种数据相加，转化优先顺序为：String>Number>Boolean
    1、如果加号两边都是字符串类型，则只是简单的字符串拼接（数组也一样）；
    2、如果只有"+"右边有数据，比如+"11"时，所有数据类型都要转化为Number类型（数组先转为字符串，再转为数字）
    3、函数function参与运算会先转化为字符串再运算


"-"、"*"、"/"、%运算符
    使用减号、乘号、除号、取余运算符运算时，都是将两边的数据先转化为Number，然后再进行运算
    "+"和"-"运算符前面不一定有数据（比如+"1"），但是"*"、"/"、"%"运算符两边必须有数据才行，否则报错
```
* 逻辑运算符
```
"&&"、"||"、"!"会将数据转化为Boolean类型
1、"!"取反运算符会先将数据转化为Boolean类型，然后再取反
    var a = ' ';
    console.log(!a);   // false
    先将a转化为布尔类型，Boolean(a)为true ——> 取反，为false
2、"&&"并运算符
    从左到右对&&两侧的变量进行布尔判断，返回第一个布尔值为false的元素；
    如果不是布尔类型则进行boolean类型的隐式判断
    如果没有布尔值为false的元素，则返回最后一个元素（返回这个元素，而不是隐式Boolean类型判断后的布尔值）
    1 && 0  // 0
    2 && a && false   // 报错，a没有被定义
    2 && false && a   // false，因为遇见false，就返回false，后面的不再执行
3、"||"或运算符
    与&&判断类似
    从左到右对||两侧的变量进行布尔判断，返回第一个布尔值为true的元素；
    如果没有，则返回最后一个元素
    1 || 0   // 1
    2 || a   // 2
```
#### 常用值的转换
原始值——————————转换为数字——————————转换为字符串——————————转换为布尔值
false——————————0——————————"false"——————————false
true——————————1——————————"true"——————————true
0——————————0——————————"0"——————————false
1——————————1——————————"1"——————————true
"0"——————————0——————————"0"——————————true
"000"——————————0——————————"000"——————————true
"1"——————————1——————————"1"——————————true
NaN——————————NaN——————————"NaN"——————————false
Infinity——————————Infinity——————————"Infinity"——————————true
-Infinity——————————-Infinity——————————"-Infinity"——————————true
""——————————0——————————""——————————false
"20"——————————20——————————"20"——————————true
"string"——————————NaN——————————"string"——————————true
[]——————————0——————————""——————————true
[20]——————————20——————————"20"——————————true
[10,20]——————————NaN——————————"10,20"——————————true
["string"]——————————NaN——————————"string"——————————true
["str1","str2"]——————————NaN——————————"str1,str2"——————————true
function(){}——————————NaN——————————"function(){}"——————————true
{}——————————NaN——————————"[object Object]"——————————true
null——————————0——————————"null"——————————false
undefined——————————NaN——————————"undefined"——————————false

#### 隐式转换规则
```
1、对象和布尔值进行比较：对象先转换为字符串，然后再转换为数字；布尔值直接转换为数字
    [] == false   // true
    过程：[] ——> '' ——> 0       false ——> 0

2、对象和字符串进行比较：对象转换为字符串，然后两者进行比较
    [1, 2] == '1,2'   // true
    过程：[1, 2] ——> '1,2'

3、对象和数字进行比较：对象先转换为字符串，然后再转换为数字，再和数字进行比较
    [1] == 1   // true
    过程：[1] ——> '1' ——> 1

4、字符串和数字进行比较：字符串转换为数字
    '1' == 1   // true
    过程：'1' ——> 1

5、字符串和布尔值进行比较：二者全部转换为数值再比较
    '1' == true   // true
    过程：'1' ——> 1       true ——> 1

6、布尔值和数字进行比较：布尔值转换为数字
    true == 1   // true
    过程：true ——> 1

7、特殊比较：undefined与null比较返回true，二者和其他值比较返回false
    undefined == null   // true
    Number(null)   // 0


对象 ——————> 字符串 ——————> 数值 <—————— 布尔
```

#### == 与 === 区别
当进行 == 比较时候，先检查两个操作数数据类型，如果相同，则进行 === 比较，如果不同，则进行一次类型转换，转换成相同类型后再进行比较；而进行 === 比较时候，如果类型不同，直接返回false
* == 抽象相等，比较时，会先进行类型转换，再比较值
* === 严格相等，会比较两个值得类型和值
* 在明确知道操作数的数据类型情况下，建议使用 ===，否则，使用 ==

* 双等号 ==
> 如果两个值类型相同，再进行 === 比较
> 如果两个值类型不相同，也有可能相等，需要按照以下规则进行类型转换再比较
```
1、两个值都是null/undefined，则相等；一个是null，另一个是undefined，也相等
console.log(null == null);   // true
console.log(undefined == undefined);   // true
console.log(null == undefined);   // true

2、string与number，则将字符串转换为数值后再比较
console.log("1" == 1);   // true

3、整数类型与boolean，1和true比较为true，0和false比较为true，其他为false
console.log(1 == true);   // true
console.log(0 == false);   // true
console.log(10 == true);   // false

4、NaN与NaN不相等
console.log(NaN == NaN);   // false

5、两个值都引用自同一个对象或函数，则相等，否则不相等
console.log([] == []);   // false
var a = [];
var b = a;
var c = a;
console.log(b == c);   // true
```
* 三等号 ===
> 类型不同，则返回false
```
1、两个值都是null/undefined，则相等，否则不相等
console.log(null == null);   // true
console.log(undefined == undefined);   // true
console.log(null == undefined);   // false

2、NaN与NaN不相等
console.log(NaN === NaN);   // false

3、两个值都是数值，并且是同一个值，则相等，否则不相等
console.log(1 === 1);   // true
console.log(1 === '1');   // false

4、两个值都是字符串，且每个位置的字符都一样，则相等，否则不相等
console.log('str' === 'str');   // true

5、两个值都是true/false，则相等，否则不相等
console.log(true === true);   // true
console.log(false === false);   // true

6、两个值都引用自同一个对象或函数，则相等，否则不相等
console.log([] === []);   // false
var a = [];
var b = a;
var c = a;
console.log(b === c);   // true
```
