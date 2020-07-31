/**
 * 把变量声明提升到函数的顶部，
 * 但是变量赋值不会提升
 */

console.log(a);  // 输出undefined
var a = 10;
// 等价于
var a;
console.log(a);  // 输出undefined
a = 10;

function foo(){
    y = 10;
    var y = 1;
    console.log(y);
}
foo();  // 1

/**
 * 注意：变量未声明，直接使用，输出 'variable is not defined'
 * ReferenceError: x is not defined
 */
console.log(x); 
