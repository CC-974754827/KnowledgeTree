/**
 * arguments.callee为引用函数自身，
 * 我们可以借用arguments.length可以来查看实参和形参的个数是否一致
 */
function add(a, b){
    var realLen = arguments.length;
    var len = add.length;

    console.log(realLen);
    console.log(len);

    if(realLen == len){
        console.log('实参和形参个数一致');
    }else{
        console.log('实参和形参个数不一致');
    }
}
add(1, 2, 3);  // 3 2 实参和形参个数不一致
add(1, 2);  // 2 2 实参和形参个数一致
add();  // 0 2 实参和形参个数不一致


/**
 * 可以借用arguments.callee来让匿名函数实现递归
 */
var sum = function(n){
    if(n == 1){
        return 1;
    }else{
        return n + arguments.callee(n - 1);
    }
}
sum(5);  // 15


/**
 * 编写一个函数求传入的若干个数字的和（不能用数组显示传入）
 */
function add(){
    var len = arguments.length;
    var sum = 0;
    for(var i = 0; i < len; i++){
        sum += arguments[i];
    }
    return sum;
}
add(1, 2, 3, 4, 5);  // 15