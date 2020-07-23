/**
 * Object.getOwnPropertyDescriptor()
 * 返回指定对象上一个自有属性对应的属性描述符，没有返回undefined
 * 自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性
 * Object.getOwnPropertyDescriptor(obj, prop)
 * obj 需要查找的目标对象
 * prop 目标对象内属性名称
 * 
 * ES5 第一个参数不是对象（而是原始类型），则TypeError
 * ES6 第一参数不是对象，会被强制转换为对象
 */

var obj1 = {
    get foo(){
        return 17;
    }
};
var des1 = Object.getOwnPropertyDescriptor(obj1, "foo");
console.log(des1);
// {set: undefined, enumerable: true, configurable: true, get: ƒ foo()}

var obj2 = { bar: 42 };
var des2 = Object.getOwnPropertyDescriptor(obj2, "bar");
console.log(des2);
// {value: 42, writable: true, enumerable: true, configurable: true}


var obj3 = Object.getOwnPropertyDescriptor('foo', 0);
console.log(obj3); 
// {value: "f", writable: false, enumerable: true, configurable: false}

var obj4 = Object.getOwnPropertyDescriptor('foo', 2);
console.log(obj4); 
// {value: "o", writable: false, enumerable: true, configurable: false}

var obj5 = Object.getOwnPropertyDescriptor('foo', 3);
console.log(obj5); 
// undefined