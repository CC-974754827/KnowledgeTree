/**
 * search()
 * 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串
 * 如果找到，则返回索引位置，并不继续搜索
 * 如果没有找到任何匹配的子串，则返回 -1
 * 返回与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置
 * string.search(searchvalue)
 * searchvalue 必须。查找的字符串或者正则表达式。
 */

var str = "hello World world";
console.log(str.search("world")); // 12
console.log(str.search(/w/gi)); // 6