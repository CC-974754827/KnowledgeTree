// 转为字符串(string)


/**
 * toString()方法：
 * 可将其他类型转为字符串类型，但对null和undefined不适用(TypeError)；
 */
var a = 1;
a.toString();  // "1"

var b = true;
b.toString();  // "true"

var c = null;
c.toString();  // TypeError: Cannot read property 'toString' of null

var d = undefined;
d.toString(); // TypeError: Cannot read property 'toString' of undefined

var e = {name: 'zs'};
e.toString(); // "[object Object]"
 
/**
 * 其他类型 + '' 或者 '' + 其他类型：
 * 其他类型与一个空字符串相加，此方法对null和undefined也适用
 */
1 + ''  // '1'

true + ''  // 'true'

var obj = {name: 'zs'};
obj + ''  //  "[object Object]"

null + ''  // "null"

undefined + ''  // 'undefined'

/**
 * String()函数：
 * 可将任意类型的值转为字符串，对null和undefined也适用
 */
String(1);   // '1'
String(true);  // 'true'
String({});  // "[object Object]"
String(null);  // 'null'
String(undefined);  // 'undefined'