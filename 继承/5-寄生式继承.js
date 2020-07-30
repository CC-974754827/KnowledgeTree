/**
 * 寄生式继承
 * 给原型式继承外面套个壳子
 * 特点：没有创建自定义类型，因为只是套了个壳子返回对象，这个函数即成了创建的新对象
 * 缺点：没用到原型，无法复用
 */

// 父类
function Person(name){  // 给构造函数添加了参数
    this.name = name;
    this.sum = function(){
        console.log(this.name);
    }
}
Person.prototype.age = 10; // 给构造函数添加了原型属性

function content(obj){
    function F(){}
    F.prototype = obj; // 继承了传入的对象
    return new F(); // 返回函数对象
}
var sup = new Person();
// 以上是原型式继承，给原型式继承再封装一下传递参数
function subobject(obj){
    var sub = content(obj);
    sub.name = 'zs';
    return sub;
}
var sup2 = subobject(sup);
// 这个函数经过声明之后就成了可增添属性的对象
console.log(typeof subobject); // function
console.log(typeof sup2); // object
console.log(sup2.name); // zs
