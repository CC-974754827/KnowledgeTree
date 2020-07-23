/**
 * Object.preventExtensions()
 * 让一个对象变的不可扩展，也就是永远不能再添加新的属性，返回不可扩展的对象
 * Object.preventExtensions(obj)
 * obj 将要变得不可扩展的对象
 * 
 * 一般来说，不可扩展对象的属性可能仍然可被删除
 * 尝试将新属性添加到不可扩展对象将静默失败或抛出TypeError
 * 
 * 仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性
 * 
 * ES5 参数是非对象类型，则TypeError
 * Es6 参数是非对象类型，则被视为一个不可扩展的普通对象，所以会直接返回
 */

var obj = {};
Object.preventExtensions(obj);
Object.preventExtensions(obj) === obj; // true
// TypeError: Cannot define property foo, object is not extensible
Object.defineProperty(obj,"foo",{
    value: 12
});

// 空对象默认是可扩展的
var obj = {};
Object.isExtensible(obj); // true
// 改变成不可扩展
Object.preventExtensions(obj);
Object.isExtensible(obj); // false
