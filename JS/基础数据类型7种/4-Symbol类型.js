/**
 * Symbol 类型的对象永远不相等，即便创建的时候传入相同的值。
 * 因此，可以用解决属性名冲突的问题（适用于多少编码），做为标记
 * 
 * es5的对象属性名是字符串，容易造成属性名的冲突，
 * 如果有一种机制，保证每个属性的名字都是独一无二的，就可以从根本上防止属性名的冲突。
 * 
 * 
 * 
 * symbol，唯一标识符，可作为对象的唯一属性
 * let id = Symbol("id");
 * for...in  object.keys()不能访问
 * object.getOwnPropertySymbols返回数组，得到当前对象的所有用作属性名的symbol值
 */

// true
typeof Symbol() === 'symbol';
// true
Symbol('key') !== Symbol('key');

// symbol值通过Symbol函数生成，生成的Symbol是一个类似于字符串的原始类型的值
/**
 * 使用new命令会报错，这是因为生成的 Symbol是一个原始类型的值，不是对象，不能添加属性；
 * 如果传入的参数为对象，会调用toString方法，再转为字符串；
 * Symbol函数的参数只是表示对当前 Symbol 值的描述，因此传入的参数相同，Symbol的返回值也是不相等的；
 * Symbol的值不能与其他的值进行运算，Symbol可以显式的转为字符串、布尔值，但不能转为数值；
 */


// 使用Symbel值作为对象属性名
let mySymbol = Symbol();
// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';
// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};
// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 得到同样结果
a[mySymbol] // "Hello!"


// Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
// 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
// Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key


// Symbol.hasInstance
/**
 * 对象的Symbol.hasInstance属性，指向一个内部方法。
 * 当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
 * foo instanceof Foo在语言内部，
 * 实际调用的是Foo[Symbol.hasInstance](foo)
 */

// Symbol.isConcatSpreadable
/**
 * 对象的Symbol.isConcatSpreadable属性等于一个布尔值，
 * 表示该对象用于Array.prototype.concat()时，是否可以展开。
 * Symbol.isConcatSpreadable默认等于undefined，可以展开
 * Symbol.isConcatSpreadable = true || undefined => 展开
 * Symbol.isConcatSpreadable = false => 不展开
 */

let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']

/**
 * 类似数组的对象正好相反，默认不展开。
 * 它的Symbol.isConcatSpreadable属性设为true，才可以展开。
 */
let obj = {length: 2, 0: 'c', 1: 'd'};
['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;
['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']