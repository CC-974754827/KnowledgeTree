/**
 * Object.isSealed()
 * 判断一个对象是否被密封，返回布尔值
 * Object.isSealed(obj)
 * obj 要被检查的对象
 * 
 * ES5 参数是非对象类型，则TypeError
 * Es6 参数是非对象类型，则被视为一个已被封装的普通对象，返回true
 */

// 新建的对象默认不是密封的
var obj = {}
Object.isSealed(obj); // false
// 将一个空对象变成不可扩展，则也是一个密封对象
Object.preventExtensions(obj);
Object.isSealed(obj); // true

// 如果不是空对象，变成不可扩展后，也不是密封对象，密封对象要求所有自身属性必须不可配置
var obj = {
    foo: 'foo',
    test: 'test'
}
Object.preventExtensions(obj);
Object.isSealed(obj); // false
// 将该属性变得不可配置，此时该属性属于密封对象
Object.defineProperty(obj, "foo", {
    configurable: false
});
Object.isSealed(obj); // false
Object.isSealed(obj.foo); // true


// Object.seal()生成一个密封对象
var obj = {};
Object.seal(obj);
Object.isSealed(obj); // true
// 一个密封对象也是不可扩展的
Object.isExtensible(obj); // false
// 一个密封对象也可以是一个冻结对象，但不是必须
Object.isFrozen(obj); // true 所有的属性都是不可写的

// 此时是密封对象，但foo属性可写，所以不是一个冻结对象
var obj = Object.seal({foo: 3});
Object.isFrozen(obj); // false 

// 此时是密封对象，且访问器属性不考虑可不可写，只考虑是否可配置
var obj = Object.seal({
    get foo(){return 0;}
});
Object.isFrozen(obj); // true