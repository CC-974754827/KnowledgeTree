/**
 * map()
 * 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值[同forEach功能]
 * 按照原始数组元素顺序依次处理元素
 * map的回调函数会将执行结果返回，最后map将所有回调函数的返回值组成新数组返回
 * array.map(function(currentValue,index,arr), thisValue)
 * function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
 *      currentValue	必须。当前元素的值
 *      index	可选。当前元素的索引值
 *      arr	可选。当前元素属于的数组对象
 * thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
 *      如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。
 * 
 * map() 不会对空数组进行检测
 * map() 不会改变原始数组
 */

var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.map(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr === self))
})
// 打印结果为：
// Tom--0--true
// Jack--1--true
// Lucy--2--true
// Lily--3--true
// May--4--true
console.log(a); // [undefined, undefined, undefined, undefined, undefined]

var arr2 = ["Tom","Jack","Lucy","Lily","May"];
var a2 = arr2.map(function(value,index,self){
    return value;
})
console.log(a2);     //["Tom", "Jack", "Lucy", "Lily", "May"]
console.log(arr2);   //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变