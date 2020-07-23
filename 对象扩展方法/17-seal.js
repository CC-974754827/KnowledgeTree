/**
 * Object.seal()
 * 封闭一个对象，阻止添加或删除新属性并将所有现有属性标记为不可配置
 * 当前属性的值只要原来是可写的就可以改变
 * 返回被密封的对象
 * Object.seal(obj)
 * obj 将要被密封的对象
 * 
 * 密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置
 * 属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性
 * 
 * ES5 参数是非对象类型，则TypeError
 * Es6 参数是非对象类型，则被视为一个已被封装的普通对象，所以返回该对象
 */

var obj = {
    p1: 42
};
Object.seal(obj);
obj.p1 = 55;
console.log(obj.p1); // 55

delete obj.p1;
console.log(obj.p1); // 55



var obj = {
    prop: function(){},
    foo: 'bar'
}
// 此时可以添加新的属性，删除或更改现有属性
obj.foo = 'baz';
obj.test = 'test';
delete obj.prop;
// {foo: "baz", test: "test"}
console.log(obj); 


Object.seal(obj);
console.log(Object.seal(obj) === obj); // true
// 此时可以修改属性值
obj.foo = 'barr';
// 不能将属性重新定义为访问器属性
// TypeError
Object.defineProperty(obj, "foo", {
    get: function(){return 'ok'}
});
// 封装对象后，除了属性值以外的任何变化，都会失败
obj.test2 = 'test2';
delete obj.foo;