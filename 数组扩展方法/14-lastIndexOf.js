/**
 * lastIndexOf()
 * 返回一个指定的元素在数组中最后出现的位置，从该字符串的后面向前查找，从右向左
 * 如果要检索的元素没有出现，则该方法返回 -1
 * array.lastIndexOf(value,start)
 * 该方法将从尾到头地检索数组中指定元素value。
 * 开始检索的位置在数组的start处或数组的结尾（没有指定start参数时）。
 * 如果找到一个value，则返回value从尾向前检索第一个次出现在数组的位置。
 * 数组的索引开始位置是从0开始的。
 */

var str = ["h","e","l","l","o"];
console.log(str.lastIndexOf("l")); // 3
console.log(str.lastIndexOf("l",2)); // 2
console.log(str.lastIndexOf("l",3)); // 3
console.log(str.lastIndexOf("l",4)); // 3
console.log(str.lastIndexOf("l",-1)); // 3
console.log(str.lastIndexOf("l",-3)); // 2
console.log(str.lastIndexOf("l",-2)); // 3