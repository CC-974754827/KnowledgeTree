/**
 * sort()
 * 对数组的元素进行排序(默认为升序)，并且返回排过序的新数组，会改变原来的数组
 * arrayObject.sort(sortby)
 * sortby 可选。规定排序顺序。必须是函数
 * 
 * 1. 这里的排序是针对字符的排序，先使用数组的toString()方法转为字符串，再逐位比较，
 *      比如3是大于12的，因为首位3>1，不要与Number型的数据排序混淆
 * 2. str2数组中，可以看到，比较的时候，zoom是最大的，
 *      因为首位的英文字母通过ASCII码可以转为相应的数值，再根据数值比较
 */

var str1 = [12, 2, 43, 5, 2, 5];
var str2 = [92, 2, 43, "hello", 5, 2, 5, "zoom", "abc"];
console.log(str1.sort()); //[12, 2, 2, 43, 5, 5]
console.log(str1); //[12, 2, 2, 43, 5, 5]
console.log(str2.sort()); //[2, 2, 43, 5, 5, 92, "abc", "hello", "zoom"]
console.log(str2);　//[2, 2, 43, 5, 5, 92, "abc", "hello", "zoom"]

/**
 * sort(callback) 如果需要按照数值排序，需要传参。
 * sort(callback)，callback为回调函数，该函数应该具有两个参数，
 * 比较这两个参数，然后返回一个用于说明这两个值的相对顺序的数字（a-b）
 * 
 * 若 a 小于 b，返回一个小于 0 的值。
 * 若 a 等于 b，则返回 0。
 * 若 a 大于 b，则返回一个大于 0 的值
 */
var str3 = [92, 2, 43, 5, 2, 5];     
console.log(str3.sort(fn)); // [2, 2, 5, 5, 43, 92]
console.log(str3); // [2, 2, 5, 5, 43, 92]
function fn (a,b){
    return a-b;
}