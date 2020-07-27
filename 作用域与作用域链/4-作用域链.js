/**
 * 自由变量
 * 当前作用域中没有定义的变量，成为自由变量，
 * 自由变量的值，要到创建该变量的作用域中取得，而无论该变量在哪里调用
 */
var a = 100;
function fn(){
    var b = 200;
    console.log(a); // 自由变量
    console.log(b);
}
fn(); // 100 200


/**
 * 作用域链
 * 当访问一个变量时，解释器会首先在当前作用域查找标示符，
 * 如果没有找到，就去父作用域找，
 * 直到找到该变量的标示符或者不再存在父作用域了
 * 如果声明了没有赋值就返回undefined；如果不存在抛出ReferenceError
 * 
 * 作用域链顶端是全局对象，对于全局环境中的代码，只包含一个元素：全局对象
 * 
 * 其中内部属性[[scope]]，[[scope]]所指向的就是当前的作用域对象
 */
var a = 100;
function f1(){
    var b = 200;
    function f2(){
        var c = 300;
        console.log(a); // 自由变量，顺作用域链向父作用域找
        console.log(b); // 自由变量，顺作用域链向父作用域找
        console.log(c); // 本作用域的变量
    }
    f2();
}
f1(); // 100 200 300


/**
 * 自由变量的取值
 * 要到创建fn函数的作用域中取，无论fn函数在哪里调用
 */
var x = 10;
function fn(){
    console.log(x);
}
function show(f){
    var x = 20;
    f(); 
}
show(fn); // 10

// fn()返回的是bar函数，赋值给x，执行x()，即执行bar函数
// 取b值的时候直接在fn作用域中取出，取a值得时候，试图在fn作用域中取
// 但是取不到，只能转向创建fn的那个作用域中去查找，找到，所以结果30
var a = 10;
function fn(){
    var b = 20;
    function bar(){
        console.log(a + b);
    }
    return bar;
}
var x = fn();
b = 200;
x(); // 30