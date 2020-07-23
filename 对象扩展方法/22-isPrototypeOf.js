/**
 * Object.prototype.isPrototypeOf()
 * 用于测试一个对象是否存在于另一个对象的原型链上，返回布尔值
 * prototypeObj.isPrototypeOf(object)
 * object 在该对象的原型链上搜寻
 * 
 * 如果 prototypeObj 为 undefined 或 null，会抛出 TypeError
 */

function Foo() {}
function Bar() {}
function Baz() {}
Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);
var baz = new Baz();
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true