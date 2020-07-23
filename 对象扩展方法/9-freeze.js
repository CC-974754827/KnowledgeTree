/**
 * Object.freeze()
 * 可以冻结一个对象，返回和传入的参数相同的对象
 * 一个被冻结的对象再也不能被修改
 * 冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性
 * 不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值
 * 冻结一个对象后该对象的原型也不能被修改
 * Object.freeze(obj)
 * obj 要被冻结的对象
 * 
 * ES5 如果参数不是一个对象，则TypeError
 * ES6 非对象参数也可以被视为要被冻结的普通对象，并被简单的返回
 */

var obj = {
    prop: 42,
}
Object.freeze(obj); // {prop: 42}
obj.prop = 55;
console.log(obj.prop); // 42

// 浅冻结
var obj1 = {
    internal: {}
}
Object.freeze(obj1);
console.log(obj1.internal.a); // undefined
obj1.internal.a = 22;
console.log(obj1.internal.a); // 22

// 深冻结函数
function deepFreeze(obj){
    // 得到obj的属性名
    var propNames = Object.getOwnPropertyNames(obj);
    // 在冻结自身之前冻结属性
    propNames.forEach(function(name){
        var prop = obj[name];
        console.log(prop);
        if(typeof prop == 'object' && prop !== null){
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}
var obj2 = {
    internal: {}
}
deepFreeze(obj2);
obj2.internal.a = 22;
console.log(obj2.internal.a); 