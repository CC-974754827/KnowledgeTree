/**
 * Object.prototype.propertyIsEnumerable()
 * 返回一个布尔值，表示指定的属性是否可枚举
 * obj.propertyIsEnumerable(prop)
 * prop 要测试的属性名
 * 
 * 可以明确对象中的指定的属性是否可以被for...in循环枚举
 * 通过原型链继承的属性除外
 * 如果需要判断的属性在object的原型链上，不管它是否可枚举，
 * obj.propertyIsEnumerable()都会返回false
 */

var obj = {};
var arr = [];
obj.foo = 22;
arr[0] = 22;
obj.propertyIsEnumerable('foo'); // true
arr.propertyIsEnumerable(0); // true
arr.propertyIsEnumerable('length'); // false


// 内置对象
Math.propertyIsEnumerable('random'); // false


// 自身属性和继承属性
// 继承的属性，返回false
var a = [];
a.propertyIsEnumerable('constructor'); // false

function first(){
    this.foo = 'foo';
}
first.prototype.firstMethod = function(){}

function second(){
    this.method = function method(){
        return 'method';
    }
}
second.prototype = new first;
second.prototype.constructor = second;
second.prototype.add = function(){}

var o = new second();
o.test = 'test';

o.propertyIsEnumerable('test') // true
o.propertyIsEnumerable('method'); // true
o.propertyIsEnumerable('add'); // false
o.propertyIsEnumerable('foo'); // false

o.foo = 'foo2'; 
o.propertyIsEnumerable('foo'); // true

o.propertyIsEnumerable('prototype'); // false
o.propertyIsEnumerable('constructor'); // false
o.propertyIsEnumerable('firstMethod'); // false

