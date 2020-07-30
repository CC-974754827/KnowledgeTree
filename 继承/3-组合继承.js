/**
 * 组合继承（组合原型链继承和借用构造函数继承）
 * 组合两种模式的优点，传参和复用
 * 特点：1、可以继承父类原型上的属性，可以传参，可以复用
 *      2、每个实例引入的构造函数属性是私有的
 * 缺点：调用了两次父类构造函数（耗内存）
 */

// 父类
function Person(name){  // 给构造函数添加了参数
    this.name = name;
    this.sum = function(){
        console.log(this.name);
    }
}
Person.prototype.age = 10; // 给构造函数添加了原型属性

function SubType(name){
    Person.call(this, name); // 借用构造函数模式
    this.time = 'time';
}
SubType.prototype = new Person(); // 原型链继承
var sub = new SubType('zs');
console.log(sub); // SubType {name: "zs", time: "time", sum: ƒ} 继承了构造函数属性
console.log(sub.age); // 10 继承了父类原型属性