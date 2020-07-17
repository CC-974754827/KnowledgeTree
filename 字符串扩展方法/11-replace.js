/**
 * replace()
 * 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
 * 返回一个新的字符串
 * string.replace(searchvalue,newvalue)
 * searchvalue	必须。规定子字符串或要替换的模式的 RegExp 对象。
 *      请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，
 *      而不是首先被转换为 RegExp 对象。
 * newvalue	必需。一个字符串值。规定了替换文本或生成替换文本的函数
 * 
 * 不会改变原始字符串
 */


var str = "hello hi Hello hi";
console.log(str.replace("hi", "world")); // hello world Hello hi
console.log(str.replace(/hello/g, "hi")); // hi hi Hello hi
console.log(str.replace(new RegExp("hello", "g"), "hi")); // hi hi Hello hi
console.log(str.replace(/hello/gi, "hi")); // hi hi hi hi