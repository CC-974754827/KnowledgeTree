/**
 * foo函数可以访问变量a，但a既不是foo的局部变量，也不是foo的参数，所以a属于自由变量
 */
var a = 1;
function foo(){
    console.log(a);
}
foo();


/**
 * 闭包
 * 理论上：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。
 *      哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，
 *      这个时候使用最外层的作用域
 * 实践上：即使创建它的上下文已经销毁，它依然存在（比如内部函数从父函数中返回），在代码中引入了自由变量
 */

/**
 * 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
 * 全局执行上下文初始化
 * 执行checkscope函数，创建checkscope函数执行上下文，checkscope执行上下文被压入执行上下文栈
 * checkscope执行上下文初始化，创建变量对象、作用域链、this等
 * checkscope函数执行完毕，checkscope执行上下文从执行上下文栈中弹出
 * 执行f函数，创建f函数执行上下文，f执行上下文被压入执行上下文栈
 * f执行上下文初始化，创建变量对象、作用域链、this等
 * f函数执行完毕，f执行上下文从执行上下文栈中弹出
 * fContext = {
 *      Scope: [AO, checkscopeContext.AO, globalContext.VO],
 * }
 * 【AO 表示活动对象，储存了函数的参数、函数内声明的变量等】
 * 【VO 表示变量对象，是与执行上下文相关的特殊对象,用来存储上下文的函数声明，函数形参和变量】
 * f函数依然可以读取到checkscopeContext.AO的值，
 * 即使checkscopeContext被销毁了，js依然会让checkscopeContext.AO存活在内存中，
 * f函数依然可以通过f函数的作用域链找到它，从而实现闭包
 */
// checkscope是f的父函数，f被赋给了一个全局变量，f始终存在内存中，
// f的存在依赖checkscope，因此checkscope也始终存在内存中，
// 不会再调用结束后，被垃圾回收机制回收
var scope = 'global scope';
function checkscope(){
    var scope = 'local scope';
    function f(){
        return scope;
    }
    return f;
}
var foo = checkscope();
foo(); // "local scope"


/**
 * 全局上下VO：
 *      globalContext = {
 *          VO:{
 *              data:[...],
 *              i:3
 *          }
 *      }
 * data[0]函数作用域链：
 *      data[0]Context = {
 *          Scope: [AO, globalContext.VO]
 *      }
 */
// 当执行到data[0]函数的时候，for循环已经执行完了，i是全局变量，此时的值为3
var data = [];
for(var i=0; i<3; i++) {
  data[i] = function() {
    console.log(i);
  }
}
data[0]();  // 3
data[1]();  // 3
data[2]();  // 3
/**
 * data[0]函数作用域链：
 *      data[0]Context = {
 *          Scope: [AO, 匿名函数Context.AO, globalContext.VO]
 *      }
 * 
 * 匿名函数Context = {
 *      AO: {
 *          arguments: {
 *              0: 0,
 *              length: 1
 *          },
 *          i: 0    
 *      }
 *  }
 */
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}
data[0]();  // 0
data[1]();  // 1
data[2]();  // 2