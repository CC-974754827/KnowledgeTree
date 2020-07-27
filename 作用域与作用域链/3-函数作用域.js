/**
 * 函数作用域是指声明在函数内部的变量，
 * 和全局作用域相反，局部作用域一般只在固定的代码片段内可以访问到
 */

function foo(){
    var inVariable = "inVariable";
}
foo();
// Uncaught ReferenceError: inVariable is not defined
console.log(inVariable);

/**
 * 变量提升
 * 只要函数内定义了一个局部变量，
 * 函数在解析的时候就会将这个变量“提前声明”
 * 
 */
var scope = 'global';
function fn(){
    // 相当于 var scope;
    console.log(scope); // undefined
    var scope = 'local';
    console.log(scope); // local
}
fn();