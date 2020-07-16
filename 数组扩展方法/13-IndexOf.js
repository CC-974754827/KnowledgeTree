/**
 * indexOf()
 * 根据指定的数据，从左向右，查询在数组中出现的位置，
 * 如果不存在指定的数据，返回-1，
 * 如果找到该数据，立即返回该数据的索引，不再往后继续查找[第一次出现的位置]
 * indexOf(value, start)
 * value 必须。查找的元素。
 * start 可选的整数参数。规定在数组中开始检索的位置。
 *      它的合法取值是 0 到 stringObject.length - 1。
 *      当start为负数时，从数组的尾部向前数，再从左到右查找。
 *      如省略该参数，则将从字符串的首字符开始检索
 */

var str = ["h","e","l","l","o"];
console.log(str.indexOf("l")); // 2
console.log(str.indexOf("l",2)); // 2
console.log(str.indexOf("l",3)); // 3
console.log(str.indexOf("l",4)); // -1
console.log(str.indexOf("l",-1)); // -1
console.log(str.indexOf("l",-3)); // 2
console.log(str.indexOf("l",-2)); // 3
