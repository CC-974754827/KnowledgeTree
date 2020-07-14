/**
 * object 的每个实例都有下列属性和方法：
 * constructor：保存着用于创建当前对象的函数。（构造函数)constructor就是object();
 * hasOwnProperty(propertyName):用于检查给定的当前属性在当前对象实例中）而不是在实例原型中）是否存在。其中，作为参数的属性名（propertyName)必须以字稚串形式指定（例如：o.hasOwnProperty(“name”))。
 * isPrototypeOf(object):用于检查传入的对象是否是传入对象原型。
 * propertyIsEnumerable(propertyName):用于检查给定属性是否能够用for-in语句。与hasOwnProperty（）方法一样，作为参数的属性名必须以字符串形式指定。
 * toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。[本地环境字符串]
 * toString():返回对象的字符串表示。
 * valueOf():返回对象的字符串、数值或者布尔值表示。通常与toString( )方法的返回值得相同。
 */
var obj1 = new Object();
var obj2 = new Object;
obj1 = {name: 'zs'}
console.log(obj1.constructor);   // Object() { [native code] }
console.log(obj1.hasOwnProperty('name'));   // true
obj2 = [1,2,3];
console.log(obj2.constructor);   // Array() { [native code] }

// 对比valueOf()、toString()、toLocalString()
/**
 * Array
 * valueOf()：返回数组本身
 * toString()：把数组转换为字符串，并返回结果，每一项以逗号分割。
 * toLocalString()：把数组转换为本地数组，并返回结果。
 */
var array = new Array("a","b","c");
console.log(array.valueOf());   // (3) ["a", "b", "c"]
console.log(array.toString());  // a,b,c
console.log(array.toLocaleString());    // a,b,c

/**
 * Boolean
 * valueOf()：返回 Boolean 对象的原始值。
 * toString()：根据原始布尔值或者 booleanObject 对象的值返回字符串 "true" 或 "false"。默认为"false"。
 * toLocalString()：Boolean对象没有toLocalString()方法。但是在Boolean对象上使用这个方法也不会报错。
 */
var boolean = new Boolean();   
console.log(boolean.valueOf()); // false
console.log(boolean.toString());    // false

/**
 * Date
 * valueOf()：返回 Date 对象的原始值，以毫秒表示。
 * toString()：把 Date 对象转换为字符串，并返回结果。使用本地时间表示。
 * toLocalString()：可根据本地时间把 Date 对象转换为字符串，并返回结果，返回的字符串根据本地规则格式化。
 */
var date = new Date();
console.log(date.valueOf());    // 1594638705298
console.log(date.toString());   // Mon Jul 13 2020 19:11:45 GMT+0800 (中国标准时间)
console.log(date.toLocaleString());  // 2020/7/13 下午7:11:45

/**
 * Number
 * valueOf()：返回一个 Number 对象的基本数字值。
 * toString()：把数字转换为字符串，使用指定的基数。
 * toLocalString()：把数字转换为字符串，使用本地数字格式顺序。
 */
var num = new Number(1337);
console.log(num.valueOf());     // 1337
console.log(num.toString());    // 1337
console.log(num.toLocaleString());  // 1,337

// isPrototypeOf 和 instanceof
// isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上
/**
 * 语法：  prototypeObj.isPrototypeOf(object)
 * 参数：  object  在该对象的原型链上搜寻
 * 返回值：  Boolean，表示调用对象是否在另一个对象的原型链上。
 * 描述：isPrototypeOf 方法允许你检查一个对象是否存在于另一个对象的原型链上。
 */
function Fee() {}
function Fi() {}
Fi.prototype = new Fee();
  
function Fo() {}
Fo.prototype = new Fi();

function Fum() {}
Fum.prototype = new Fo();
// 下面创建一个 Fum 实例，检测 Fi.prototype 是否存在于该实例的原型链上。
var fum = new Fum();
console.log(Fi.prototype.isPrototypeOf(fum));

// instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性
// 定义构造函数
function C(){} 
function D(){} 

var o = new C();
// true，因为 Object.getPrototypeOf(o) === C.prototype
// Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
o instanceof C; 
// false，因为 D.prototype不在o的原型链上
o instanceof D; 
o instanceof Object; // true 因为Object.prototype.isPrototypeOf(o)
C.prototype instanceof Object // true,同上

C.prototype = {};
var o2 = new C();
o2 instanceof C; // true
o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true

/**
 * 如果表达式 obj instanceof Foo 返回true，
 * 则并不意味着该表达式会永远返回true，
 * 因为Foo.prototype属性的值有可能会改变，改变之后的值很有可能不存在于obj的原型链上，
 * 这时原表达式的值就会成为false。
 * 另外一种情况下，原表达式的值也会改变，就是改变对象obj的原型链的情况，
 * 虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，
 * 但借助于非标准的__proto__魔法属性，是可以实现的。
 * 比如执行obj.__proto__ = {}之后，
 * obj instanceof Foo就会返回false了
 * 
 * A.isPrototypeOf(B) 判断的是A对象是否存在于B对象的原型链之中
 * A instanceof B  判断的是B.prototype是否存在与A的原型链之中
 */
