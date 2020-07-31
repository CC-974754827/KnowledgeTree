// 转为数字(Number)


/**
 * Number()函数：
 * 可以将任意类型的值转化为数值
 * 
 * 将不可以被解析为数值的字符串转为NaN，将空字符串转为0
 */
Number('1');  // 1
Number('1s');  // NaN
Number('');  // 0
Number(true);  // 1
Number(false);  // 0
Number(null);  // 0
Number(undefined);  // NaN


/**
 * parseInt()函数：
 * 转为整数时最好加上进制，因为浮点数只有十进制，所以转为浮点数时进制可省略
 * 
 * 转为整数：parseInt(字符串, 进制)
 * 转为浮点数：parseFloat()
 */
parseInt('1', 10);  // 1
parseInt('011');  // 11
parseInt('011', 8);  // 9
parseInt('1s');  // 1
parseInt('s');  // NaN
parseInt('');  // NaN
parseInt(true);  // NaN
parseInt(null);  // NaN
parseFloat('1.23');  // 1.23


/**
 * - '0' 或 + '数字'：
 * 减去字符0或用0加这个字符，都等于这个数本身的数值
 */
1-'0';  // 1
+'1';  // 1
+'-1';  // -1