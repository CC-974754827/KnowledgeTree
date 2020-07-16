// 函数的定义方式：声明函数和函数表达式

/**
 * 声明函数：
 * 重要的特性就是函数声明提升[在执行代码之前会先读取函数声明]（function declaration hoisting）
 * 意味着可以把函数声明放在调用它的语句后面
 */
sayHi();
function sayHi () {
    console.log("Hello World");
}

/**
 * 函数表达式
 * 函数声明语句，声明函数实际是声明了一个变量f，然后将一个声明的函数对象赋值给变量f，
 * 变量的声明有提至所有代码顶部的特点，故函数声明语句声明的函数可以在声明之前调用
 */
var s = function (arg1, arg2) {
    console.log(arg1,arg2);
} 
// 可以写成
// 其中 var s 被提前声明了，但 s = xxxx 是要在运行到这里的时候才进行
var s;
s = function (arg1, arg2) {
    console.log(arg1,arg2);
} 


// 区别
/**
 * 变量提升原因
 * t1会被提升到作用域最前面，console.log(t1)可以取到t1
 * t2是函数表达式，没有被提升，所以console.log(t2)没有取到t2
 */
console.log(t1);  // ƒ t1(){console.log('函数声明');}
console.log(t2);  // undefined
function t1(){
    console.log('函数声明');
}
var t2 = function(){
    console.log('函数表达式');
}