/**
 * 函数提升会将函数声明连带定义一起提升（整个代码块提升到它所在的作用域的最开始执行）
 * 在js中函数的创建方式：函数声明、函数表达式（函数字面量）
 * 函数声明式：function foo(){}
 * 函数表达式：var foo = function(){}
 * 只有函数声明创建的函数会执行函数提升，字面量定义的函数（实质为变量+匿名函数）会执行变量提升
 */

// 可以被提升
foo1();
function foo1(){
    console.log('可以被提升');
}
// 等价于
function foo1(){
    console.log('可以被提升');
}
foo1();


// TypeError: foo2 is not a function
console.log(foo2);  // undefined
foo2();
var foo2 = function(){
    console.log('不可以被提升');
}
// 等价于
var foo2;
console.log(foo2);  // undefined
foo2();
foo2 = function(){
    console.log('不可以被提升');
}


// 低版本浏览器中，函数提升不会被条件判断所控制；高版本浏览器中会报错，避免在块内部声明函数
foo(); // TypeError: foo is not a function
var a = true;
if(a){
    function foo(){console.log(1);}
}else{
    function foo(){console.log(2);}
}