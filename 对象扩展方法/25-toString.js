/**
 * Object.prototype.toString()
 * 返回一个表示该对象的字符串
 * obj.toString()
 * 
 * 默认情况下，toString() 方法被每个 Object 对象继承
 * 如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"
 * 其中 type 是对象的类型
 */

// 覆盖默认的toString()方法
function Dog(name){
    this.name = name;
}
var dog = new Dog('baby');
Dog.prototype.toString = function(){
    return `${this.name}`;
}
console.log(dog.toString()); // baby

// [object Object]
var obj = new Object();
obj.toString();

// 使用toString()检测对象类型
/**
 * 为了每个对象都能通过 Object.prototype.toString() 来检测，
 * 需要以 Function.prototype.call() 
 * 或者 Function.prototype.apply() 的形式来调用
 */
var toString = Object.prototype.toString;
toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]