/**
 * toString()
 * 将数组转换成字符串，类似于没有参数的join()，返回字符串结果。
 * 该方法会在数据发生隐式类型转换时被自动调用，
 * 如果手动调用，就是直接转为字符串，不会改变原数组
 * arrayObject.toString()
 */

var str = [1,2,3];
console.log(str.toString()); // 1,2,3
console.log(str); // [1,2,3]