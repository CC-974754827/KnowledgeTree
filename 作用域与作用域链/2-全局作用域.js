/**
 * 全局作用域：在代码中任何地方都能访问到的对象
 * 一般是几种情形：
 */

// 1、最外层函数和最外层函数外定义的变量拥有全局作用域
var outVariable = "最外层变量";
function outFun(){
    var inVariable = "内层变量";
    function innerFun(){
        console.log(inVariable);
    }
    innerFun();
}
console.log(outVariable); // 最外层变量
outFun(); // 内层变量
console.log(inVariable); // inVariable is not defined
innerFun(); // innerFun is not defined


// 2、所有未定义，就直接赋值的变量，自动声明为拥有全局作用域
function outFun(){
    variable = "未定义已赋值的变量";
    var inVariable = "内层变量";
}
outFun();
console.log(variable); // 未定义已赋值的变量
console.log(inVariable); // inVariable is not defined


// 所有window对象的属性拥有全局作用域
/**
 * 一般情况下，window对象的内置属性拥有全局作用域
 * 比如：window.name、window.location、window.top等等
 * 
 * 如果都写在全局作用域下，代码增多，容易污染全局命名空间，容易引起命名冲突
 */
