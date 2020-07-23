/**
 * Object.fromEntries()
 * 把键值对列表转换为一个对象
 * Object.fromEntries(iterable)
 * iterable 类似Array、Map或者其它实现了可迭代协议的可迭代对象
 * 
 * Object.fromEntries() 执行与 Object.entries 互逆的操作
 */

var entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);
var obj = Object.fromEntries(entries);
console.log(obj); // {foo: "bar", baz: 42}

var arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
var obj1 = Object.fromEntries(arr);
console.log(obj1); // {0: "a", 1: "b", 2: "c"}