/**
 * Boolean
 * 该类型只有两个字面值：true和false。
 * 这两个值与数字值不是一回事，因此true不一定等于1，而false也不一定等于0。
 * 
 * 数据类型	        转换为true的值	        转换为false的值
 * Boolean	       true	                 false
 * String	       任何非空的字符串	        ""(空字符串)
 * Number	       任何非0数值（包括无穷大） 0和NAN
 * Object          任何对象	              null
 * Undefined	   不适用                 undefined
 */

var foo;  
console.log(!foo);  // undifined情况下，一个感叹号返回的是true;  
console.log(!goo);  // null情况下，一个感叹号返回的也是true;  
var o={flag: true};  
var test = !!o.flag;  // 等效于var test=o.flag||false;  
console.log(test);  // true