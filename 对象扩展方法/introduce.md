Object.assign()：用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，返回目标对象

Object.create()：创建一个新对象，使用现有的对象来提供新创建的对象的__proto__

Object.defineProperties()：直接在一个对象上定义新的属性或修改现有属性，并返回该对象

Object.getOwnPropertyDescriptors()：用来获取一个对象的所有自身属性的描述符

Object.defineProperty()：直接在一个对象上定义新的属性或修改现有属性，并返回该对象

Object.getOwnPropertyDescriptor()：返回指定对象上一个自有属性对应的属性描述符

Object.entries()：返回一个给定对象自身可枚举属性的键值对数组

Object.fromEntries()：把键值对列表转换为一个对象

Object.freeze()：可以冻结一个对象，返回和传入的参数相同的对象

Object.isFrozen()：判断一个对象是否被冻结

Object.getOwnPropertyNames()：返回一个由指定对象的所有自身属性的属性名组成的数组[包括可枚举与不可枚举]

Object.getOwnPropertySymbols()：返回一个给定对象自身的所有 Symbol 属性的数组

Object.setPrototypeOf()：设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null

Object.getPrototypeOf()：返回指定对象的原型（内部[[Prototype]]属性的值）

Object.isExtensible()：判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）

Object.preventExtensions()：让一个对象变的不可扩展，也就是永远不能再添加新的属性

Object.seal()：封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变

Object.isSealed()：判断一个对象是否被密封

Object.is()：判断两个值是否为同一个值

Object.keys()：返回一个由一个给定对象的自身可枚举属性组成的数组

Object.prototype.hasOwnProperty()：返回一个布尔值，指示对象自身属性中是否具有指定的属性（即是否有指定的键）

Object.prototype.isPrototypeOf()：用于测试一个对象是否存在于另一个对象的原型链上

Object.prototype.propertyIsEnumerable()：返回一个布尔值，表示指定的属性是否可枚举

Object.prototype.toLocaleString()：返回该对象的一个本地化的字符串表示

Object.prototype.toString()：返回一个表示该对象的字符串

Object.prototype.valueOf()：返回指定对象的原始值

Object.values()：




> 用Object.freeze()冻结的对象中的现有属性值是不可变的
> 用Object.seal()密封的对象可以改变其现有属性值。


> for...in循环是 遍历对象的每一个可枚举属性,包括原型链上面的可枚举属性[可用hasOwnProperty()过滤掉]
> Object.keys()只是遍历自身的可枚举属性,不可以遍历原型链上的可枚举属性

* 枚举与不可枚举
> 枚举指对象的属性是否可以遍历出来，可枚举性决定了这个属性能否被for…in查找遍历到
> js中基本包装类型的原型属性是不可枚举的，比如基本包装类型：Boolean,Number和String
> 判断一个属性是否可枚举，用Object.propertyIsEnumerable()来判断[如果需要判断的属性在object的原型链上，不管它是否可枚举，Object.propertyIsEnumerable()都会返回false]
