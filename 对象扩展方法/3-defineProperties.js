/**
 * Object.defineProperties()
 * 直接在一个对象上定义新的属性或修改现有属性，并返回该对象
 * Object.defineProperties(obj, props)
 * obj 在其上定义或修改属性的对象
 * props 要定义其可枚举属性或修改的属性描述符的对象。
 *       对象中存在的属性描述符主要有两种：数据描述符和访问器描述符
 *          configurable 控制了属性描述对象的可配置性，默认为 true
 *              如果设为false，将阻止某些操作改写该属性，
 *              比如无法删除该属性，也不得改变该属性的属性描述对象（value、writable属性除外）
 *          enumerable 表示该属性是否可枚举，默认为true
 *              如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性
 *          value 存放该属性的属性值，默认为undefined
 *          writable 表示属性值（value）是否可改变,默认为 true
 *          get 表示该属性的取值函数（getter），默认为 undefined
 *          set 表示该属性的存值函数（setter），默认为 undefined
 */

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
}); 
console.log(obj); // {property1: true, property2: "Hello"}