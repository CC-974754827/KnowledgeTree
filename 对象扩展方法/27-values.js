/**
 * Object.values()
 * 返回一个给定对象自身的所有可枚举属性值的数组，
 * 值的顺序与使用for...in循环的顺序相同 
 * ( 区别在于 for-in 可循环枚举原型链中的属性 )
 * Object.values(obj)
 * obj 被返回可枚举属性值的对象
 * 
 * 返回值是按照key从小到大排序
 */

var obj = {
    foo1: 'foo1',
    foo2: 22
}
console.log(Object.values(obj)); // ["foo1", 22]

var obj2 = {
    100: 'a',
    2: 'b',
    1: 'c'
}
console.log(Object.values(obj2)); // ["c", "b", "a"]


// getFoo是不可枚举的属性
var obj3 = Object.create({},{
    getFoo:{
        value: function(){
            return this.foo;
        }
    }
});
obj3.foo = 'foo';
console.log(Object.values(obj3)); // ["foo"]

// 非对象参数将被强制转换为对象
console.log(Object.values('foo')); // ["f", "o", "o"]