/**
 * includes()
 * 用于判断字符串是否包含指定的子字符串
 * 如果找到匹配的字符串则返回 true，否则返回 false
 * string.includes(searchvalue, start)
 * searchvalue 必需，要查找的字符串。
 * start 可选，设置从那个位置开始查找，默认为 0。
 * 
 * includes() 方法区分大小写
 */

var str = "Hello world";
var n = str.includes("world");
var n2 = str.includes("Hello", 5);
var n3 = str.includes("hello");
console.log(n); // true
console.log(n2); // false
console.log(n3); // false