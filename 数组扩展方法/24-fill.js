/**
 * fill() 
 * 用于将一个固定值替换数组的元素
 * value	必需。填充的值。
 * start	可选。开始填充位置。
 * end	可选。停止填充位置 (默认为 array.length)[不包括end位]
 */

var str1 = [12, 2, "hello", "world"];
console.log(str1.fill("long")); // ["long", "long", "long", "long"]
console.log(str1);  // ["long", "long", "long", "long"]

var str2 = [12, 2, "hello", "world"];
console.log(str2.fill("long",1,2)); // [12, "long", "hello", "world"]
console.log(str2); // [12, "long", "hello", "world"]