/**
 * startsWith()
 * 用于检测字符串是否以指定的子字符串开始
 * 如果是以指定的子字符串开头返回 true，否则 false
 * string.startsWith(searchvalue, start)
 * searchvalue 必需，要查找的字符串。
 * start 可选，查找的开始位置，默认为 0。
 * 
 * startsWith() 方法区分大小写
 */


var str = "Hello world, welcome to my house.";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false
console.log(str.startsWith("Hello", 5)); // false
console.log(str.startsWith("world", 6)); // true