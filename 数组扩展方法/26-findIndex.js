/**
 * findIndex()
 * 返回传入一个测试条件（函数）符合条件的数组第一个元素位置
 * 为数组中的每个元素都调用一次函数执行
 * 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
 * 如果没有符合条件的元素返回 -1
 * array.findIndex(function(currentValue, index, arr),thisValue)
 * function(currentValue, index,arr)	必需。数组每个元素需要执行的函数。
 *      currentValue	必需。当前元素
 *      index	可选。当前元素的索引值
 *      arr	可选。当前元素所属的数组对象
 * thisValue	可选。 传递给函数的值一般用 "this" 值。
 *      如果这个参数为空， "undefined" 会传递给 "this" 值
 * 
 * findIndex() 对于空数组，函数是不会执行的。
 * findIndex() 并没有改变数组的原始值。
 */

var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.findIndex(checkAdult); // 2

function checkAdult2(age) {
    return age >= 38;
}
ages.findIndex(checkAdult2); // -1