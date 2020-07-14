/**
 * 1. typeof
 * 2. 看构造函数(.constructor返回实例的构造函数)
 * 3. instanceof 判断实例化对象
 * 4. Array.isArray(arr) 判断是否是数组
 * 5. Object.prototype.toString.call(arr) => [object Array]
 *      通过call()指定arr为object.prototype对象中的toString()的上下文
 *      判断某个对象属于哪种内置类型
 */

// 对象的 constructor 属性
var arr = [1,2,3];
console.log(arr.constructor === Array)   // true
var obj = {name: 'zs'};
console.log(obj.constructor === Object)  // true

// instanceof
var arr = [1,2,3];
console.log(arr instanceof Array)   // true
var obj = {name: 'zs'};
console.log(obj instanceof Object)  // true

// Object.prototype.toString.call
Object.prototype.toString.call(null);// "[object Null]"
Object.prototype.toString.call(undefined);// "[object Undefined]"
Object.prototype.toString.call("abc");// "[object String]"
Object.prototype.toString.call(123);// "[object Number]"
Object.prototype.toString.call(true);// "[object Boolean]"
Math.toString();  // "[object Math]"
// 函数类型
function fn(){console.log("test");}
Object.prototype.toString.call(fn);// "[object Function]"
// 日期类型
var date = new Date();
Object.prototype.toString.call(date);// "[object Date]"
// 数组类型
var arr = [1,2,3];
Object.prototype.toString.call(arr);// "[object Array]"
// 正则表达式
var reg = /[hbc]at/gi;
Object.prototype.toString.call(reg);// "[object RegExp]"
// 自定义类型
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var person = new Person("Rose", 18);
Object.prototype.toString.call(person); // "[object Object]"
// 这种方法不能准确判断person是Person类的实例，而只能用instanceof操作符来进行判断
// console.log(person instanceof Person);   //输出结果为true

/**
 * Object.prototype.toString()本身是允许被修改的，
 * 而我们目前所讨论的关于Object.prototype.toString()这个方法的应用
 * 都是假设toString()方法未被修改为前提的
 */



Object.toString.call(Array) // "function Array() { [native code] }"
Object.prototype.toString.call(Array) // "[object Function]"

Object.toString() // "function Object() { [native code] }"
Object.prototype.toString() // "[object Object]"
// Object对象和它的原型链上各自有一个toString()方法，第一个返回的是一个函数，第二个返回的是值类型。
/**
 * Array对象本身返回一个构造函数，Array() { [native code] }，
 * 而Object.prototype.toString()返回的是"[object Type]"的形式， 此时this指的是Object.prototype
 * 通过call将Array的this上下文切换到Object，
 * 从而调用了Object.prototype.toString()，因此返回[object Function]。
 */

/**
 * 不可以直接Array.prototype.toString.call([1,3,4])
 * 因为Array，Function，Date虽然是基于Object进行创建的，
 * 但是他们继承的是Object.toString()，
 * 而不是Object.prototype.toString()。
 */

/**
 * 数据类型                 例子	                return
 * 字符串	                "foo".toString()	   "foo"
 * 数字	                    1.toString()	       Uncaught SyntaxError: Invalid or unexpected token  JS引擎无法确定这里的`.`是什么意思，是点运算符（对象方法）还是浮点数
 * 布尔值	                false.toString()	    "false"
 * undefined	           undefined.toString()	   Uncaught TypeError: Cannot read property 'toString' of undefined
 * null	                   null.toString()	       Uncaught TypeError: Cannot read property 'toString' of null
 * String	               String.toString()	   "function String() { [native code] }"
 * Number	               Number.toString()	   "function Number() { [native code] }"
 * Boolean	               Boolean.toString()	   "function Boolean() { [native code] }"
 * Array	               Array.toString()	       "function Array() { [native code] }"
 * Function	               Function.toString()	   "function Function() { [native code] }"
 * Date	                   Date.toString()	       "function Date() { [native code] }"
 * RegExp	               RegExp.toString()	   "function RegExp() { [native code] }"
 * Error	               Error.toString()	       "function Error() { [native code] }"
 * Promise	               Promise.toString()	   "function Promise() { [native code] }"
 * Obejct	               Object.toString()	   "function Object() { [native code] }"
 * Math	                   Math.toString()	       "[object Math]"
 */