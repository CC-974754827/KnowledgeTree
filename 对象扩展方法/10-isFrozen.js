/**
 * Object.isFrozen()
 * 判断一个对象是否被冻结，返回布尔值
 * Object.isFrozen(obj)
 * obj 被检测的对象
 * 一个对象是冻结的是指它不可扩展，所有属性（即没有getter或setter组件的访问器的属性）都是不可配置的，
 * 且所有数据属性都是不可写的
 * 
 * ES5 参数是非对象类型，则TypeError
 * Es6 参数是非对象类型，则被视为一个冻结的普通对象，所以返回true
 */

// 一个对象默认是可扩展的，所以是非冻结的
Object.isFrozen({});   // false

// 一个不可扩展的空对象，也是一个冻结对象
var obj = Object.preventExtensions({});
Object.isFrozen(obj); // true

// 非空对象默认是可扩展的，所以是非冻结的
var obj = {a: 1};
Object.isFrozen(obj); // false

// 使该对象变得不可扩展，但并不是成为被冻结对象，此时的b属性仍然可以配置（而且可写的）
var obj = {b: 2};
Object.preventExtensions(obj);
Object.isFrozen(obj); // false

// 当删除了其中的属性，使其变成一个空对象，此时是不可扩展的，也是一个冻结对象
var obj = {c: 3};
Object.preventExtensions(obj);
delete obj.c;
Object.isFrozen(obj); // true

// 不可扩展的对象，拥有一个不可写但可配置的属性，所以是非冻结的
var obj = {d: 4};
Object.preventExtensions(obj); // 变得不可扩展
Object.defineProperty(obj, "d", { 
    writable: false // 变得不可写
});
Object.isFrozen(obj); // false

// 不可扩展的对象，拥有一个不可配置但可写的属性，所以是非冻结的
var obj = {e: 5};
Object.preventExtensions(obj); // 变得不可扩展
Object.defineProperty(obj, "e", { 
    configurable: false  // 变得不可配置
});
Object.isFrozen(obj); // false

// 不可扩展的对象，拥有一个不可写也不可配置的属性，所以是一个冻结对象
var obj = {f: 6};
Object.preventExtensions(obj); // 变得不可扩展
Object.defineProperty(obj, "f", { 
    writable: false, // 变得不可写
    configurable: false // 变得不可配置
});
Object.isFrozen(obj); // true

// 不可扩展的对象，拥有一个访问器属性，所以是非冻结的
var obj = {
    get food(){return 'eat'}
};
Object.preventExtensions(obj);
Object.isFrozen(obj); // false

// 不可扩展的对象，拥有一个访问器属性，将属性设置为不可配置，所以是一个冻结对象
var obj = {
    get food(){return 'eat'}
};
Object.preventExtensions(obj);
Object.defineProperty(obj, "food", {
    configurable: false
});
Object.isFrozen(obj); // true

// Object.freeze()冻结一个对象
var obj = {g: 7};
Object.freeze(obj);
Object.isFrozen(obj); // true
// 一个冻结对象也是一个密封对象
Object.isSealed(obj); // true
// 一个冻结对象也是一个不可扩展的对象
Object.isExtensible(obj); // false