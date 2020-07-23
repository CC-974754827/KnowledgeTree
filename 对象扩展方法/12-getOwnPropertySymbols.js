/**
 * Object.getOwnPropertySymbols()
 * 返回一个给定对象自身的所有 Symbol 属性的数组
 * Object.getOwnPropertySymbols(obj)
 * obj 返回Symbol属性的对象
 */


var obj = {};
var a = Symbol("a");
obj[a] = "local";
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(a)]