/**
 * every()
 * 用于检测数组所有元素是否都符合指定条件
 * 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
 * 如果所有元素都满足条件，则返回 true。
 * array.every(function(currentValue,index,arr), thisValue)
 * function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
 *      currentValue 必须。当前元素的值
 *      index 可选。当前元素的索引值
 *      arr	可选。当前元素属于的数组对象
 * thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
 *      如果省略了 thisValue ，"this" 的值为 "undefined"
 * 
 * every() 不会对空数组进行检测。
 * every() 不会改变原始数组。
 */

var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.every(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self));
})
// Tom--0--true
// false
console.log(a);

// 因为每个回调函数的返回值都是true，那么会遍历数组所有数据，等同于forEach功能
var arr2 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a2 = arr2.every(function(value,index,self){
    console.log(self)
    console.log(value + "--" + index + "--" + (arr2 == self));
    return true;
})
// Tom--0--true
// abc--1--true
// Jack--2--true
// Lucy--3--true
// Lily--4--true
// May--5--true
// true
console.log(a2);

var arr3 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a3 = arr3.every(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr3 == self));
    return value.length < 4;
})
// Tom--0--true
// abc--1--true
// Jack--2--true
// false
console.log(a3);

var arr4 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a4 = arr4.every(function(value,index,self){
    return value.length > 3;
})
console.log(a4);           //false

var arr5 = ["Tom","abc","Jack","Lucy","Lily","May"];
var a5 = arr5.every(function(value,index,self){
    return value.length > 2;
})
console.log(a5);           //true