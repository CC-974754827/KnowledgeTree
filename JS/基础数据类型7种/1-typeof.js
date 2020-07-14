/**
 * String       String      字符串
 * Number       Number      数据类型
 * Boolean      Boolean     布尔型
 * Undefined    Undefined   没有初始化、定义的值
 * Null         Object      不存在的对象
 * NaN          Number      Number 中的特殊数值
 * Object       Function
 */

// false isNaN(Number('as')) => true，说明Number(‘as’) 输出 NaN
// 而js规定   NaN ≠ NaN （not a number）  {} ≠ {}
console.log(Number('as') == NaN);

// 任何数值除以0会返回NaN
console.log(1%0);   // NaN

// false 
console.log(Number('123') == NaN);

// 获取不到时，返回空对象null
document.getElementById("div1");

// 返回undefined
// 定义变量，没有赋值
var a;
console.log(a);
// 数组越界
var arr = [1,2,3];
console.log(ar[5]);
// 访问对象下没有的属性
var obj = {name: 'zs'}
console.log(obj.age);
//函数没有return
function a(){
    console.log(111);
}
console.log(a());
