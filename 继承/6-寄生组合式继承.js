/**
 * 寄生组合式继承
 * 修复了组合继承的问题
 * 寄生：在函数内返回对象然后调用
 * 组合：1、函数的原型等于另一个实例
 *      2、在函数中用apply或者call引入另一个构造函数，可传参
 */

// 父类
function Person(name){  // 给构造函数添加了参数
    this.name = name;
    this.sum = function(){
        console.log(this.name);
    }
}
Person.prototype.age = 10; // 给构造函数添加了原型属性

// 寄生
function content(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}
// content 就是F实例的另一种表示法
var con = content(Person.prototype);
// con实例（F实例）的原型继承了父类函数的原型
// 上述更像是原型继承，只不过只继承了原型属性

// 组合
function Sub(){
    Person.call(this); // 这个继承了父类构造函数的属性
} // 解决了组合式两次调用构造函数的缺点
Sub.prototype = con; // 继承了con实例
con.constructor = Sub; // 修复实例
var sub1 = new Sub();
// Sub的实例就继承了构造函数属性，父类实例，con的函数属性
console.log(sub1.age); // 10
