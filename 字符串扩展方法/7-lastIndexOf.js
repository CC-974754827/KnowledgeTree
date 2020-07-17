/**
 * lastIndexOf()
 * 可返回一个指定的字符串值最后出现的位置，
 * 如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索
 * 该方法将从后向前检索字符串，但返回是从起始位置 (0) 开始计算子字符串最后出现的位置。 
 * 看它是否含有字符串。
 * 开始检索的位置在字符串的 start 处或字符串的结尾（没有指定 start 时）
 * 如果没有找到匹配字符串则返回 -1
 * 
 * string.lastIndexOf(searchvalue,start)
 * searchvalue 必需。规定需检索的字符串值
 * start 可选的整数参数。规定在字符串中开始检索的位置。
 *      它的合法取值是 0 到 stringObject.length - 1。
 *      如省略该参数，则将从字符串的最后一个字符处开始检索
 * 
 * lastIndexOf() 方法是区分大小写的
 */

var str = "Hello world, welcome to the universe.";
var n = str.lastIndexOf("world"); 
var n2 = str.lastIndexOf("world", 14); 
var n3 = str.lastIndexOf("world", 5); 
console.log(n); // 6
console.log(n2); // 6
console.log(n3); // -1



