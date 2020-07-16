/**
 * reduceRight()
 * 接收一个函数作为累加器，数组中的每个值（从右到左）开始缩减，最终计算为一个值
 * array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
 * function(total,currentValue, index,arr)	必需。用于执行每个数组元素的函数。
 *      total 必需。初始值, 或者计算结束后的返回值。
 *      currentValue	必需。当前元素
 *      currentIndex	可选。当前元素的索引
 *      arr	可选。当前元素所属的数组对象。
 * initialValue	可选。传递给函数的初始值
 *      如果initial参数被省略，那么第一次迭代发生在数组的第二项上，
 *      因此callback的第一个参数是数组的第一项，第二个参数就是数组的第二项
 * reduceRight() 对于空数组是不会执行回调函数的
 */

// 不省略initial参数，回调函数没有返回值
var arr = [10,20,30,40,50];
var a = arr.reduceRight(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr == self))
}, 2019);
// 2019--50--4--true
// undefined--40--3--true
// undefined--30--2--true
// undefined--20--1--true
// undefined--10--0--true
// undefined
console.log(a);
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined


// 省略initial参数，回调函数没有返回值
var arr2 = [10,20,30,40,50];
var a2 = arr2.reduceRight(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr2 == self))
});
// 第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
// 50--40--3--true
// undefined--30--2--true
// undefined--20--1--true
// undefined--10--0--true
// undefined
console.log(a2);
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined


// 不省略initial参数，回调函数有返回值
var arr3 = [10,20,30,40,50];
var a3 = arr3.reduceRight(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr3 == self));
    return "hello";
}, 2019);
// 2019--50--4--true
// hello--40--3--true
// hello--30--2--true
// hello--20--1--true
// hello--10--0--true
// hello
console.log(a3);
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值


// 省略initial参数，回调函数有返回值
var arr4 = [10,20,30,40,50];
var a4 = arr4.reduceRight(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr4 == self));
    return "hello";
});
// 第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
// 50--40--3--true
// hello--30--2--true
// hello--20--1--true
// hello--10--0--true
// hello
console.log(a4);
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值


// 省略initial参数，计算数组中所有数据的和
var arr5 = [10,20,30,40,50];
var sum = arr5.reduceRight(function(prev,now,index,self){
    return prev + now;
});
console.log(sum); // 150


// 不省略initial参数，计算数组中所有数据的和
var arr6 = [10,20,30,40,50];
var sum = arr6.reduceRight(function(prev,now,index,self){
    return prev + now;
},8);
console.log(sum); // 158