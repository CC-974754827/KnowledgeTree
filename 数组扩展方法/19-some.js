/**
 * some()
 * 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true
 * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
 * 如果没有满足条件的元素，则返回false。
 * array.some(function(currentValue,index,arr),thisValue)
 * function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
 *      currentValue	必须。当前元素的值
 *      index	可选。当前元素的索引值
 *      arr	可选。当前元素属于的数组对象
 * thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
 *      如果省略了 thisValue ，"this" 的值为 "undefined"
 * 
 * some() 不会对空数组进行检测。
 * some() 不会改变原始数组。
 */

var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.some(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
    return value.length > 3;
})
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
// true
console.log(a);

var arr2 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a2 = arr2.some(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr2 == self))
    return true;
})
// 打印结果为：
// Tom--0--true
// true
console.log(a2);

var arr3 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a3 = arr3.some(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr3 == self))
    return false;
})
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
// Lucy--3--true
// Lily--4--true
// May--5--true
// false
console.log(a3);

var arr4 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a4 = arr4.some(function(value,index,self){
    return value.length > 3;
})
console.log(a4);             //true

var arr5 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a5 = arr5.some(function(value,index,self){
    return value.length > 4;
})
console.log(a5);             //false