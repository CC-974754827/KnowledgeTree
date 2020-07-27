/**
 * 块级作用域可通过新增命令let和const声明，
 * 所声明的变量在指定块的作用域外无法被访问。
 * 块级作用域让变量的生命周期更加可控
 * 块级作用域在以下情况被创建：
 * 1、在一个函数内部
 * 2、在一个代码块（{}）内部
 */

// 块级作用域特点

/**
 * 声明变量不会提升到代码块顶部（无变量提升）
 * let/const声明并不会提升到当前代码块的顶部，
 * 所以要手动将let/const声明放置到顶部，
 * 以便让变量在整个代码块内部使用
 */
function getValue(condition){
    if(condition){
        let value = "value";
        return value;
    }else{
        // value 在此处不可用
        return null;
    }
    // value 在此处不可用
}

/**
 * 禁止重复声明（不能在同一作用域内重复声明一个已有标识符）
 * 如果一个标识符已经在代码块内部被定义，
 * 那么在此代码块中使用同一个标识符进行let声明就会抛出错误
 */
var count = 22;
let count = 11; // Uncaught SyntaxError: Identifier 'count' has already been declared

var count = 22;
// 不会抛出错误
if(condition){
    let count = 11;
}

/**
 * 循环中的绑定块作用域的妙用
 */
// 可以把声明的计数器变量限制在循环内，计数器i只在for循环体内有效，在循环体外引用会报错
for(let i = 0; i < 10; i++){
    // ...
}
console.log(i); // Uncaught ReferenceError: i is not defined
// 变量i是var命令声明的，在全局范围内有效，所以全局只有一个变量i
// 每次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)
// 里面的i指向的就是全局的i，即数组a的成员里面的i，指向的是同一个i。
// 所以运行时输出的是最后一轮的i的值，即10
var a = [];
for(var i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); // 10
// 如果使用let，声明的变量仅在块级作用域中有效，最后输出的是6
// 变量i是let声明的，当前的i只在本循环中有效，所以每一次循环的i其实都是一个新的变量，
// 因为js引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算
var a = [];
for(let i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); // 6


/**
 * for循环有一个特别之处：
 * 即设置循环变量的那部分是一个父作用域
 * 而循环体内部是一个单独的子作用域
 * 
 * 这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域
 */
for(let i = 0; i < 3; i++){
    let i = 'a';
    console.log(i);
}
// a
// a
// a