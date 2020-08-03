/**
 * arguments
 * 
 * arguments[@@iterator]:
 *      返回一个新的Array迭代器对象，该对象包含参数中每个索引的值
 * arguments.callee:
 *      指向参数所属的当前执行的函数/指向调用当前函数的函数
 * arguments.length:
 *      传递给函数的参数数量
 */

function fun(a, b, c){
    /**
     * Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
     * 0: 1
     * 1: 2
     * 2: 3
     * 3: 4
     * callee: ƒ fun(a, b, c)
     * length: 4
     */
    console.log(arguments);
    console.log(arguments[0]); // 1
    console.log(arguments.length); // 4
    /**
     * ƒ fun(a, b, c){  
     *      console.log(arguments);
     *      console.log(arguments[0]);
     *      console.log(arguments.length);
     *      console.log(arguments.callee);
     *  }
     */
    console.log(arguments.callee);
}
fun(1,2,3,4);