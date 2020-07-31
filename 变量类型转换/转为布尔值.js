// 转为布尔值(boolean)


/**
 * Boolean()函数：
 * 可将其他类型转为布尔值
 * 
 * 数字：0————false；NaN————false；其他值————true；
 * 字符串：空字符串————false；非空字符串：true；
 * 对象：所有对象————true；
 * null————false；
 * undefined————false；
 */
Boolean(1);  // true
Boolean(2);  // true
Boolean(0);  // false
Boolean('');  // false
Boolean(' ');  // true
Boolean('abcdef');  // true
Boolean(null);  // false
Boolean(undefined);  // false
Boolean(NaN);  // false
Boolean([]);  // true
Boolean({});  // true
Boolean({name: 'zs'});  // true


/**
 * falsy：
 * 是在Boolean上下文中认定可转换为false的值
 * 
 * 0、NaN、''("")、null、undefined
 */


/**
 * !! 其他类型：
 * !为“取反”之意，所以加两个!!取反两次即得到本身的布尔值
 */
!true;  // false
!!true;  // true
!!3;  // true
!!'';  // false 