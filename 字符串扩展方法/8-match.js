/**
 * match()
 * 可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
 * 返回存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 
 * 如果没找到匹配结果返回 null 
 * string.match(regexp)
 * regexp 必需。规定要匹配的模式的 RegExp 对象。
 *      如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，
 *      将其转换为 RegExp 对象。
 */

var str = "Hello wOrld";
var n = str.match(/o/g);
console.log(n); // ["o"]

// 全局查找字符串，且不区分大小写
var n2 = str.match(/o/gi);
console.log(n2); // ["o", "O"]