/**
 * Object.prototype.valueOf()
 * 返回指定对象的原始值
 * object.valueOf()
 * 
 * JS的许多内置对象都重写了该函数，以实现更适合自身的功能需要
 * 因此不同类型对象的valueOf()方法的返回值和返回值类型均可能不同
 */

/**
 * 对象              返回值
 * Array            返回数组对象本身
 * Boolean          布尔值
 * Date             存储的时间是从1970年1月1日午夜开始计的毫秒数UTC
 * Function         函数本身
 * Number           数字值
 * Object           对象本身[默认情况]
 * String           字符串值
 * 
 * Math和Error对象没有valueOf方法
 * 
 * 创建自定义对象时，可以覆盖Object.prototype.valueOf()来调用自定义方法，而不是默认Object方法
 */

// Array: 返回数组对象本身
var arr = ['a', true, 1, -2];
console.log(arr.valueOf() === arr); // true

// Date: 当前时间距1970年1月1日午夜的毫秒数
var date = new Date(2020, 7, 22);
date.valueOf(); // 1598025600000

// Number: 返回数字值
var num = 22;
num.valueOf(); // 22

// 布尔值: 返回true或false
var bool = true;
bool.valueOf(); // true
console.log(bool.valueOf() === bool); //true

// new一个Boolean对象
var newBool = new Boolean(true);
console.log(newBool.valueOf() == newBool); // true
// === 不相等，两者类型不相等，前者是boolean类型，后者是object类型
console.log(newBool.valueOf() === newBool); // false

// Function: 返回函数本身
function foo(){}
console.log(foo.valueOf() === foo); // true
var foo2 =  new Function("x", "y", "return x + y;");
/**
 * ƒ anonymous(x,y) {
 *  return x + y;
 * }
 */
console.log(foo2.valueOf());

// Object: 返回对象本身
var obj = {name: 'zs', age: 22};
console.log(obj.valueOf() === obj); // true

// String: 返回字符串值
var str = "str"; 
console.log(str.valueOf() === str); // true

// new一个字符串对象
var str2 = new String("str2");
// === 不相等，两者类型不同，前者为string类型，后者为object类型
console.log(str2.valueOf() === str2); // false

// 改写.prototype.valureOf
function Foo(n){
    this.number = n+1;
}
Foo.prototype.valueOf = function(){
    return this.number;
}
var obj = new Foo(2);
console.log(obj.number); // 3