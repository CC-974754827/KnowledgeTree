/**
 * filter()
 * 创建一个新的数组，
 * 新数组中的元素是通过检查指定数组中符合条件的所有元素[同forEach功能]
 * 没有符合条件的元素则返回空数组
 * array.filter(function(currentValue,index,arr), thisValue)
 * function(currentValue, index,arr) 必须。函数，数组中的每个元素都会执行这个函数
 *      currentValue	必须。当前元素的值
 *      index	可选。当前元素的索引值
 *      arr	可选。当前元素属于的数组对象
 * thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
 *      如果省略了 thisValue ，"this" 的值为 "undefined"
 * filter() 不会对空数组进行检测。
 * filter() 不会改变原始数组。
 */

var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.filter(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr === self))
})
// 打印结果为：
// Tom--0--true
// Jack--1--true
// Lucy--2--true
// Lily--3--true
// May--4--true
console.log(a); // []

var arr2 = ["Tom","Jack","Lucy","Lily","May"];
var a2 = arr2.filter(function(value,index,self){
    return value.length > 3;
})
console.log(a2);         //["Jack", "Lucy", "Lily"]
console.log(arr2);       //["Tom", "Jack", "Lucy", "Lily", "May"]