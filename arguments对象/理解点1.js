// arguments对象，可以在函数内访问所有的参数，实参
function f1(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
f1(12,22,32);   // 12 22 32


// 正常模式下，arguments对象可以在运行的时候进行修改
function f2(a, b){
    arguments[0] = 10;
    arguments[1] = 20;
    return a + b;
}
f2(1, 2);  // 30


// 严格模式下，arguments对象在运行的时候不可修改，修改arguments对象不会影响到实际的函数参数
// 'use strict' 是开启严格模式
function f3(a, b){
    'use strict';
    arguments[0] = 10;
    arguments[1] = 20;
    return a + b;
}
f3(1, 2);  // 3


// 通过arguments对象的length属性，可以判断实参的个数
function f4(){
    console.log(arguments.length);
}
f4(1, 2, 3, 4);  // 4
f4(1);  // 1
f4();  // 0


// arguments是一个对象，不是数组，转换为数组通过 slice 和 逐一填入新数组 的方式
var arr1 = Array.prototype.slice.call(arguments);

var arr2 = [].slice.call(arguments);

var arr3 = [];
for(var i = 0; i < arguments.length; i++){
    arr3.push(arguments[i]);
}

var arr4 = Array.from(arguments);

var arr5 = [...arguments];


// arguments的callee属性可以返回对应的原函数，达到调用自身函数的效果，但是在严格模式中是不适用的
var f6;
var f5 = function(){
    console.log(arguments.callee === f5);  // true
    console.log(arguments.callee === f6);  // false
}
f5();  // 返回原函数，调用自身