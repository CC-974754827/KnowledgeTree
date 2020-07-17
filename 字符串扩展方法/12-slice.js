/**
 * slice()
 * 可提取字符串的某个部分，并以新的字符串返回被提取的部分
 * 使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分
 * 如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。
 * string.slice(start,end)
 * start 必须. 要抽取的片断的起始下标。第一个字符位置为 0
 * end 可选。 紧接着要截取的片段结尾的下标。
 *      若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。
 *      如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
 */

var str="Hello world!";
console.log(str.slice(1,5)); // ello
console.log(str.slice(0)); // Hello world!
console.log(str.slice(3)); // lo world!
console.log(str.slice(-1)); // !