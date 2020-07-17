/**
 * fromCharCode()
 * 可接受一个指定的 Unicode 值，然后返回一个字符串
 * 是 String 的静态方法，字符串中的每个字符都由单独的 Unicode 数字编码指定
 * String.fromCharCode(n1, n2, ..., nX)
 * n1, n2, ..., nX 必需。一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。
 */

var n = String.fromCharCode(65);
console.log(n); // A

var n2 = String.fromCharCode(72,69,76,76,79);
console.log(n2); // HELLO