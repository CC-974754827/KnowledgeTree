/**
 * indexOf()
 * 可返回某个指定的字符串值在字符串中首次出现的位置
 * 如果没有找到匹配的字符串则返回 -1
 * string.indexOf(searchvalue,start)
 * searchvalue 必需。规定需检索的字符串值。
 * start 可选的整数参数。规定在字符串中开始检索的位置。
 *      它的合法取值是 0 到 string Object.length - 1。
 *      如省略该参数，则将从字符串的首字符开始检索。
 * 
 * indexOf() 方法区分大小写
 */

var str = "Hello world, welcomE to the universe.";
var n = str.indexOf("to"); // 21
var n2 = str.indexOf("e",5); // 14
var n3 = str.indexOf("E"); // 19
console.log(n);
console.log(n2);
console.log(n3);