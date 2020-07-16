/**
 * copyWithin()
 * 用于从数组的指定位置拷贝元素到数组的另一个指定位置中
 * array.copyWithin(target, start, end)
 * target	必需。复制到指定目标索引位置。
 * start	可选。元素复制的起始位置。
 * end	可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
 */

var str1 = [12, 2, "hello", "world"];
console.log(str1.copyWithin(2,0)); // [12, 2, 12, 2]
console.log(str1); // [12, 2, 12, 2]

var str2 = [12, 2, "hello", "world"];
console.log(str2.copyWithin(3,0,2)); // [12, 2, "hello", 12]
console.log(str2); // [12, 2, "hello", 12]