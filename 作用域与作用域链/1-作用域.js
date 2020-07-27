/**
 * 作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性
 * 作用域决定了代码区块中变量和其他资源的可见性
 * 
 * 作用域是分层的，内层作用域可以访问外层作用域的变量，反之则不行
 */



// 此时变量test在全局作用域中没有被声明，所以在全局作用域下取值会报错
// 可以理解为，作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突
function foo(){
    var test = "test";
}
foo();
// Uncaught ReferenceError: test is not defined
console.log(test);

/**
 * 全局作用域，有标识符foo2
 * 作用域foo2，有标识符a,b,bar
 * 作用域bar，有标识符c
 */
function foo2(a){
    var b = a * 2;
    function bar(c){
        console.log(a,b,c);
    }
    bar(b*3);
}
foo2(2); // 2 4 12


/**
 * 注意：
 * 块语句（大括号{}中间的语句），如if和switch条件语句或for和while循环语句，
 * 不像函数，它们不会创建一个新的作用域
 * 在块语句中定义的变量将会保留在它们已经存在的作用域中
 */
if(true){
    // if 条件语句块不会创建一个新的作用域
    var name = "name"; // name 依然在全局作用域中
}
console.log(name); // name