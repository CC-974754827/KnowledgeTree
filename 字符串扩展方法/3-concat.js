/**
 * concat()
 * 用于连接两个或多个字符串
 * string.concat(string1, string2, ..., stringX)
 * string1, string2, ..., stringX 必需。将被连接为一个字符串的一个或多个字符串对象
 * 
 * 该方法没有改变原有字符串
 * 但是会返回连接两个或多个字符串新字符串
 */

var str1 = "Hello ";
var str2 = "world!";
var str3=" Hi";
var n = str1.concat(str2);
var n2 = str1.concat(str2, str3);
console.log(n); // Hello world!
console.log(n2); // Hello world! Hi
console.log(str1); // Hello