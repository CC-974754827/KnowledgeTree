/**
 * split()
 * 用于把一个字符串分割成字符串数组
 * 返回一个字符串数组
 * string.split(separator,limit)
 * separator 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
 *      如果没有设置该参数，则不进行分割，返回拥有一个字符串元素的数组
 * limit 可选。该参数可指定返回的数组的最大长度。
 *      如果设置了该参数，返回的子串不会多于这个参数指定的数组。
 *      如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
 * 
 * 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
 * split() 方法不改变原始字符串
 */

var str = "hello world how are you";
// ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", " ", "h", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u"]
console.log(str.split(""));
// ["hello", "world", "how", "are", "you"]
console.log(str.split(" "));
// ["hello", "world", "how"]
console.log(str.split(" ",3));
// ["hello world how are you"]
console.log(str.split());
// ["hell", " w", "rld h", "w are y", "u"]
console.log(str.split("o"));
