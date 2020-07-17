/**
 * charCodeAt()
 * 返回指定位置的字符的 Unicode 编码
 * string.charCodeAt(index)
 * index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
 */

var str = "HELLO WORLD";
var n = str.charCodeAt(2);
var n2 = str.charCodeAt(str.length-1);
console.log(n); // 76
console.log(n2); // 68