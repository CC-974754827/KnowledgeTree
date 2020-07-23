/**
 * Object.isExtensible()
 * 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性），返回布尔值
 * Object.isExtensible(obj)
 * obj 需要检测的对象
 * 默认情况下，对象是可扩展的[即可以为他们添加新的属性，以及__proto__ 属性可以被更改]
 * Object.preventExtensions，Object.seal 或 Object.freeze 方法
 * 可以标记一个对象为不可扩展
 * 
 * ES5 参数是非对象类型，则TypeError
 * Es6 参数是非对象类型，则被视为一个不可扩展的普通对象，所以返回false
 */

// 新对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty); // === true

// 防止扩展对象.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false