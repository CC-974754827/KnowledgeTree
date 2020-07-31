/**
 * 区别：
 * 1、使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象；
 * 2、使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升；
 * 3、let不允许在相同作用域内，重复声明同一个变量；
 */

/**
 * 基本语法
 * let 声明的变量只在它所在的代码块有效
 */
{
    let a = 125;
    var b = 521;
}
console.log(a); // ReferenceError: a is not defined
console.log(b); // 521


/**
 * let 配合for循环的应用
 * 计数器i只在for循坏体内有效，再循环体外引用就会报错
 * 
 * for循环的特别之处：
 * 设置循环变量的那部分是一个父作用域，
 * 而循环体内部是一个单独的子作用域
 */
for(let i = 0; i < 5; i++){
    console.log(i);  // 0 1 2 3 4
}
console.log(i);  // ReferenceError: i is not defined
// 而var声明的i不会报错
for(var i = 0; i < 5; i++){
    console.log(i);  // 0 1 2 3 4
}
console.log(i);  // 5
/**
 * 例子
 */
// 输出结果：10   共10个 
for (var i = 0; i <10; i++) {  
    setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
         console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
      }, 0);
}
// 输出结果：0  1  2  3  4  5  6  7  8 9
// i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰
for (let i = 0; i < 10; i++) { 
    setTimeout(function() {
      console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
    }, 0);
}
/**
 * 例子
 */
// love love love
// 表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域
for (let i = 0; i < 3; i++) {
    let i = 'love';
    console.log(i);
}



/**
 * 不存在变量提升
 * 
 * var命令会发生变量提升现象，即变量可以在声明之前使用，值为undefined
 * let命令则不同，它所声明的变量一定要在声明后使用，否则报错
 */
// var 的情况
console.log(ar); // undefined
var ar = 512;
// let 的情况
console.log(et); // ReferenceError: et is not defined
let et = 512;


/**
 * 暂时性死区
 * 
 * 存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，
 * 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错
 * 
 * ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，
 * 从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 * (使用const声明的是常量，在后面出现的代码中不能再修改该常量的值。)
 */
var tmp=521;
if(true){
    tmp='abc';//ReferenceError: tmp is not defined
    let tmp;
}



/**
 * 不允许重复声明
 * let不允许在相同作用域内，重复声明同一个变量
 */
// 报错 SyntaxError: Identifier 'a' has already been declared
function func() {
    let a = 10;
    var a = 1;
}
// 报错 SyntaxError: Identifier 'a' has already been declared
function func() {
    let a = 10;
    let a = 1;
}
// 不能在函数内部重新声明参数
// 报错 SyntaxError: Identifier 'arg' has already been declared
function func(arg) {
    let arg; 
} 
// 不报错
function func(arg) {
    {
        let arg; 
    }
}