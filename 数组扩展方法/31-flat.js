/**
 * flat()
 * 嵌套数组转一维数组
 * 返回一个新数组,对原数据没有影响
 * array.flat(number)
 * number 可选，如果不填，默认只会“拉平”一层；
 *              填写整数，表示想要拉平的层数，默认为1。
 *              填写Infinity，不管多少层，都变为一维数组
 * 
 * 如果原数组有空位，flat()方法会跳过空位
 */


var arr = [1, [2, 3]];
console.log(arr.flat()); // [1, 2, 3]
console.log(arr); // [1, [2, 3]]

var arr2 = [1, [2, [3,4]]];
console.log(arr2.flat()); // [1, 2, [3, 4]]
console.log(arr2.flat(2)); // [1, 2, 3, 4]

var arr3 = [1, [2, [3,4]]];
console.log(arr3.flat(Infinity)); // [1, 2, 3, 4]