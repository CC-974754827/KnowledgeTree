/**
 * 原型链继承
 * 让新实例的原型等于父类的实例
 * 思想：利用原型让一个引用类型继承另一个引用类型的属性和方法
 * 特点：实例可继承的属性有：实例构造函数属性、父类构造函数属性、父类原型属性 (新实例不会继承父类实例的属性)
 * 缺点：1、新实例无法向父类构造函数传参
 *      2、继承单一，无法多继承
 *      3、所有新实例都会共享父类实例的属性
 */

// 父类
function Person(name){  // 给构造函数添加了参数
    this.name = name;
    this.sum = function(){
        console.log(this.name);
    }
}
Person.prototype.age = 10; // 给构造函数添加了原型属性

function Per(){
    this.name = 'zs';
    this.time = {
        foo: '11'
    }
}
Per.prototype = new Person();
Per.prototype.say = 'hello';
var per1 = new Per();
console.log(per1); // Per {name: "zs", time: {foo: "11"}}
console.log(per1.age); // 10
// instanceof 判断元素是否在另一个元素的原型链上
console.log(per1 instanceof Person); // true

