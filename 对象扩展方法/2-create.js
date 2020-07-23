/**
 * Object.create()
 * 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
 * 返回一个新对象，带着指定的原型对象和属性
 * Object.create(proto[, propertiesObject])
 * proto 新创建对象的原型对象
 * propertiesObject 可选。如果没有指定为 undefined
 *       如果是 null 或非原始包装对象，则抛出 TypeError 
 * 
 * 可以理解为继承一个对象, 添加的属性是在原型下
 * [new Object() 通过构造函数来创建对象, 添加的属性是在自身实例下]
 */

var person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`${this.name}+${this.isHuman}`);
    }
};

var me = Object.create(person);
me.name = 'zs'; 
me.isHuman = true;
me.printIntroduction(); // zs+true




// new Object() 方式创建
var a = {  rep : 'apple' }
var b = new Object(a)
console.log(b) // {rep: "apple"}
console.log(b.__proto__) // {}
console.log(b.rep) // apple


// Object.create() 方式创建
var a = { rep: 'apple' }
var b = Object.create(a)
console.log(b)  // {}
console.log(b.__proto__) // {rep: "apple"}
console.log(b.rep) // apple