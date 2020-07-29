// 基本类型参数的传递与基本类型的复制一样，传递的是变量值
function foo(num){
    num = num + 10;
    return num;
}
var count = 10;
var res = foo(count);
console.log(count); // 10
console.log(res); // 20


// 引用类型参数的传递与引用类型的复制一样，传递的是内存地址
function foo(obj){
    obj.name = 'zs';
    obj = {name: 'ls'}; // obj指向一个新的地址，与per不再指向同一个地址
    console.log(obj.name);
}
var per = {name: 'oo'};
foo(per); // ls
console.log(per.name); // zs