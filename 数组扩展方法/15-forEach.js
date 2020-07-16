/**
 * forEach()
 * 用于调用数组的每个元素，并将元素传递给回调函数，用来遍历数组，没有返回值
 * array.forEach(function(currentValue, index, arr), thisValue)
 * function(currentValue, index, arr)	必需。 数组中每个元素需要调用的函数。
 *      currentValue 必需。当前元素
 *      index 可选。当前元素的索引值。
 *      arr 可选。当前元素所属的数组对象。
 * thisValue	可选。传递给函数的值一般用 "this" 值。
 *      如果这个参数为空， "undefined" 会传递给 "this" 值
 * 
 * forEach()对于空数组是不会执行回调函数的
 * forEach()不会改变原始数组
 */

var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.forEach(function(value,index,self){
    console.log(this)
     console.log(value + "--" + index + "--" + (arr === self));
})
// 打印结果为：
// Tom--0--true
// Jack--1--true
// Lucy--2--true
// Lily--3--true
// May--4--true
console.log(a);  // undefined

var arr2 = [];
var a2 = arr2.forEach(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr === self));
})
console.log(a2); // undefined
