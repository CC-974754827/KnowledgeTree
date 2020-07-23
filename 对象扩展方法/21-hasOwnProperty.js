/**
 * Object.prototype.hasOwnProperty()
 * 返回一个布尔值，指示对象 自身属性 中是否具有指定的属性（即是否有指定的键）[会忽略掉那些从原型链上继承到的属性]
 * obj.hasOwnProperty(prop)
 * prop 要检测的属性的 String 字符串形式表示的名称，或者 Symbol
 * 
 * 即使属性的值是 null 或 undefined，只要属性存在，依旧会返回 true
 */

// null 或 undefined，也会返回true
var o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne'); // true
o.propTwo = undefined;  
o.hasOwnProperty('propTwo'); // true

// 检测自有属性
var o = new Object();
o.hasOwnProperty('prop'); // false
o.prop = 'aaa';
o.hasOwnProperty('prop'); // true
delete o.prop;
o.hasOwnProperty('prop'); // false

// 检测继承属性
var o = new Object();
o.hasOwnProperty('toString'); // false
o.hasOwnProperty('hasOwnProperty'); // false


// JS 并没有保护 hasOwnProperty 这个属性名
var obj = {
    hasOwnProperty: function(){
        return false;
    },
    foo: 'aaa'
};
// 此时始终都是false
obj.hasOwnProperty('foo');
// 此时可以直接使用原型链上的hasOwnProperty方法
({}).hasOwnProperty.call(obj, 'foo'); // true
// 或者使用Object原型上的hasOwnProperty方法
Object.prototype.hasOwnProperty.call(obj, 'foo'); // true