/**
 * Object.getOwnPropertyNames()
 * 返回一个由指定对象的所有自身属性的属性名组成的数组[不包括原型链上面]
 * 包括不可枚举属性但不包括Symbol值作为名称的属性
 * Object.getOwnPropertyNames(obj)
 * obj 一个对象，其自身的可枚举和不可枚举属性的名称被返回
 * 
 * 可枚举属性的顺序与通过for..in和Object.keys()迭代该对象属性时一致
 * 不可枚举属性的顺序未定义
 * 
 * ES5 第一个参数不是对象（而是原始类型），则TypeError
 * ES6 第一参数不是对象，会被强制转换为对象
 */


var arr1 = ["a", "b", "c"];
// ["0", "1", "2", "length"]
console.log(Object.getOwnPropertyNames(arr1));


// 类数组对象
var obj = {
    0: "a",
    1: "b"
}
// ["0", "1"]
console.log(Object.getOwnPropertyNames(obj));


// 不可枚举属性
var obj2 = Object.create({}, {
    getFoo: {
        value: function(){ return this.foo; },
        enumerable: false
    }
})
obj2.foo  = 1;
// ["getFoo", "foo"]
console.log(Object.getOwnPropertyNames(obj2));


// 只获取可枚举属性，查看Object.keys和for...in
/**
 * for...in循环是 遍历对象的每一个可枚举属性,包括原型链上面的可枚举属性[可用hasOwnProperty()过滤掉]
 * Object.keys()只是遍历自身的可枚举属性,不可以遍历原型链上的可枚举属性
 */

function People(){
　　this.name = 'zs';
　　this.age = 12;
　　this.c = function(){console.log('1');}
}
People.prototype.look = function(){
　　console.log('look at this');
}
// ["name", "age", "c"]
Object.getOwnPropertyNames(new People());

for (const key in new People()) {
    // name age c look
    console.log(key)
}

// ["name", "age", "c"]
Object.keys(new People());



// 只获取不可枚举属性
function Test(){
　　this.name = 'zs';
　　this.age = 12;
　　this.c = function(){console.log('1');}
}
var test = new Test();
Object.defineProperty(test, 'sex', {
    value:'女',
    enumerable:false
});
var names = Object.getOwnPropertyNames(test); // ["name", "age", "c", "sex"]
var onlyEnum = Object.keys(test);   // ["name", "age", "c"]
var onlyNoenum = names.filter(function(key){
    var current = onlyEnum.indexOf(key);
    if(current == -1){
        // 意味着当前健是不可枚举的
        return true;
    }else{
        return false;
    }
})
// ["sex"]
console.log(onlyNoenum);