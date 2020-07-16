/**
 * includes()
 * 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false
 * arr.includes(searchElement, fromIndex)
 * searchElement 必须。需要查找的元素值。
 * fromIndex 可选。
 *      从该索引处开始查找 searchElement。
 *      如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。
 *      默认为 0。
 * 如果fromIndex 大于等于数组长度 ，则返回 false
 * 如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。
 * 如果计算出的索引小于 0，则整个数组都会被搜索
 */


var site = ['runoob', 'google', 'taobao'];
site.includes('runoob'); // true 
site.includes('baidu'); // false

var arr = ['a', 'b', 'c'];
arr.includes('c', 2);   // true
arr.includes('c', 100); // false

var arr2 = ['a', 'b', 'c'];
arr2.includes('a', -100); // true
arr2.includes('b', -100); // true
arr2.includes('c', -100); // true