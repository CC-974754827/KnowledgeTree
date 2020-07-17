/**
 * substr() 
 * 可在字符串中抽取从开始下标开始的指定数目的字符
 * string.substr(start,length)
 * start 必需。要抽取的子串的起始下标。
 *      必须是数值。
 *      如果是负数，那么该参数声明从字符串的尾部开始算起的位置。
 * length 可选。子串中的字符数。
 *      必须是数值。
 *      如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
 * 
 * substr() 方法不会改变源字符串
 * substr() 的参数指定的是子串的开始位置和长度，
 * 因此它可以替代 substring() 和 slice() 来使用
 */


var str="Hello world!";
console.log(str.substr(2,3)); // llo
console.log(str.substr(2)); // llo world!