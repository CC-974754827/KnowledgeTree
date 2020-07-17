/**
 * substring()
 * 用于提取字符串中介于两个指定下标之间的字符
 * 返回的子串包括开始处的字符，但不包括结束处的字符
 * string.substring(from, to)
 * from	必需。一个非负的整数，
 *      规定要提取的子串的第一个字符在 string Object 中的位置。
 * to 可选。一个非负的整数，
 *      比要提取的子串的最后一个字符在 string Object 中的位置多 1。
 *      如果省略该参数，那么返回的子串会一直到字符串的结尾。
 */

var str = "Hello world!";
console.log(str.substring(3)); // lo world!
console.log(str.substring(3,7)); // lo w
// 会将参数负值直接转换成0
console.log(str.substring(3,-1)); // Hel