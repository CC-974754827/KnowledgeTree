/**
 * 情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window[严格版中this指向的不是window]
 * 情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
 * 情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
 */

/**
 * 此时this指向window对象
 * （window是对象而不是类，window是被实例化的对象[实例化的过程是在页面加载时候由javascript引擎完成的]）
 * window.say == say   true
 * window.say === say   true
 */
var name="zs";
function say(){
    console.log(this.name); // zs
    console.log(this); // window
}
say();   
/**
 * 此时的this指向window，而window下没有age
 */
function say2(){
    var age="zs";
    console.log(age);  // zs
    console.log(this.age); // undefined
    console.log(this); // window
}
say2();
/**
 * 此时this指向obj，fn()运行在obj里
 */
var myObj={
    name:"ls",
    fn:function(){
        console.log(this.name); // ls
        console.log(this); // myObj
    }
};
myObj.fn();
/**
 * 此时this指向other
 */
var myObj3={
    site:"zs.cn",
    other:{
        site:"www.zs.cn",
        fn:function(){
            console.log(this);  // other
            console.log(this.site); // www.zs.cn
        }
    }
};
myObj3.other.fn();

/**
 * 此时this指向window
 * test = function(){
 *  console.log(this);
 *  console.log(this.site);
 * }
 * window下没有site
 */
var myObj4={
    site:"zs.cn",
    other:{
        site:"www.zs.cn",
        fn:function(){
            console.log(this);  // window
            console.log(this.site); // undefined
        }
    }
};
var test=myObj4.other.fn;
test();


/**
 * 声明函数和函数表达式的区别
 * 由于变量提升
 */
var name2 = 'zs';
say();
// console.log(say2);  undefined
say2();  // say2 is not a function    

// 声明函数
function say(){
    console.log(this.name2); // zs
    console.log(this); // window
}
// 函数表达式
var say2 = function(){
    console.log(this.name2);
}
