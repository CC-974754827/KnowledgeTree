/**
 * Object.getPrototypeOf()
 * 返回指定对象的原型（内部[[Prototype]]属性的值）
 * Object.getPrototypeOf(object)
 * obj 要返回其原型的对象
 * 
 * ES5 第一个参数不是对象（而是原始类型），则TypeError
 * ES6 第一参数不是对象，会被强制转换为对象
 */

var obj = {};
var obj1 = Object.create(obj);
console.log(Object.getPrototypeOf(obj1)); // {}
console.log(Object.getPrototypeOf(obj1) === obj); // true

var reg = /a/;
console.log(Object.getPrototypeOf(reg)=== RegExp.prototype); // true


// Object.getPrototypeOf(Object)  不是  Object.prototype
var obj = new Object();
Object.getPrototypeOf(Object);  // ƒ () { [native code] }
Object.getPrototypeOf(Function); // ƒ () { [native code] }
Object.getPrototypeOf(Object) === Object.getPrototypeOf(Function); // true
/**
 * Object.getPrototypeOf(Object); 是把Object这一构造函数看做对象
 * 返回的是函数对象的原型，即Function.prototype
 */

/**
 * Object.prototype是构造出来的对象的原型
 */
Object.prototype === Object.getPrototypeOf(obj); // true
Object.prototype === Object.getPrototypeOf({}); // true