/**
 * Object.is()
 * 判断两个值是否为同一个值，返回布尔值
 * Object.is(value1, value2)
 * value1 被比较的第一个值
 * value2 被比较的第二个值
 * 
 * 满足以下条件，则两个值相等：
 * 1、都是undefined
 * 2、都是null
 * 3、都是true或者false
 * 4、都是相同长度的字符串，且相同字符，相同排列顺序
 * 5、都是相同对象（即每个对象有同一个引用）
 * 6、都是数字[都是+0、都是-0、都是NaN、都是非零而且非NaN而且同一个值]
 * 
 * 与==不同，==在判断相等时，会强制转换类型
 * 而Object.is()不会强制转换两边的值
 * 
 * 与===不同，===会将+0和-0视为相等，而将Number.NaN与NaN视为不相等
 * 而Object.is()认为Number.NaN与NaN相等
 */


Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true