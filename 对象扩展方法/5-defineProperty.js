/**
 * Object.defineProperty()
 * 直接在一个对象上定义新的属性或修改现有属性，并返回该对象
 * Object.defineProperty(obj, prop, descriptor)
 * obj 要定义属性的对象。
 * prop 要定义或修改的属性的名称或 Symbol 。
 * descriptor 要定义或修改的属性描述符。
 */

var obj = {};
Object.defineProperty(obj, 'name', {
    value: 'Hello',
});
console.log(obj); // {name: "Hello"}