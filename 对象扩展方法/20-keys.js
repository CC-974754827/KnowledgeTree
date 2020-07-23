/**
 * Object.keys()
 * 返回一个由一个给定对象的自身可枚举属性组成的数组[不包括原型链上的可枚举属性]
 * 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 
 * Object.keys(obj)
 * obj 要返回其枚举自身属性的对象
 * 
 * 返回值是按照key从小到大排序
 * 
 * ES5 第一个参数不是对象（而是原始值），则TypeError
 * ES6 第一参数不是对象，会被强制转换为对象
 */

// 数组
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // ['0', '1', '2']

// 类数组对象
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // ['0', '1', '2']

// 返回值是按照key从小到大排序
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo是一个不可枚举的属性
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // ["foo"]