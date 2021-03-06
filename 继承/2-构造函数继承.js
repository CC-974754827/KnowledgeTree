/**
 * 构造函数继承
 * 用 call() 和 apply() 将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行[复制]）
 * 特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性
 *      2、解决了原型链继承缺点123
 *      3、可以继承多个构造函数属性（call多个）
 *      4、在子实例中可向父实例传参
 * 缺点：1、只能继承父类构造函数的属性，无法继承父类原型的属性
 *      2、无法实现构造函数的复用（每次用每次都要重新调用）
 *      3、每个新实例都有父类构造函数的副本，冗余
 */

// 父类
function Person(name){  // 给构造函数添加了参数
    this.name = name;
    this.sum = function(){
        console.log(this.name);
    }
}
Person.prototype.age = 10; // 给构造函数添加了原型属性

function Con(){
    Person.call(this, 'jer');
    this.age = 12;
}
var con1 = new Con();
console.log(con1); // Con {name: "jer", age: 12, sum: ƒ}
