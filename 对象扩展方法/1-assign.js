/**
 * Object.assign()
 * 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象
 * 返回目标对象
 * Object.assign(target, ...sources)
 * target 目标对象
 * sources 源对象
 * 
 * 改变目标对象
 * 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖
 * 后面的源对象的属性将类似地覆盖前面的源对象的属性
 * 使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter
 * 浅拷贝
 * 继承属性与不可枚举属性不能拷贝
 */

var target = { a: 1, b: 2 };
var source = { b: 4, c: 5 };

console.log(Object.assign(target, source)); // {a: 1, b: 4, c: 5}
console.log(target); // {a: 1, b: 4, c: 5}
console.log(source); // {b: 4, c: 5}