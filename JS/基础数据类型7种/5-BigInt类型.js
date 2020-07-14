/**
 * Javascript中的任意精度整数，可以安全存储和操作大整数。
 * 即始超出Number能够表示的安全整数范围。
 * 
 * var biggestInt = Number.MAX_SAFE_INTEGER;	
 * 9007199254740991	
 * var smallestInt = Number.MIN_SAFE_INTEGER;	
 * -9007199254740991
 * 
 * BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。
 * 这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id等等，而不需要使用库
 */

// 创建BigInt，只需在整数的末尾追加n
console.log(9007199254740995n);  // 9007199254740995n
console.log(9007199254740995);   // 9007199254740996

// 调用BigInt()构造函数
BigInt("10");   // 10n
BigInt(10);     // 10n
BigInt(true);   // 1n
BigInt(false);  // 0n
// 无法转换的数据类型会引发异常
BigInt(10.2);   // RangeError: The number 10.2 cannot be converted to a BigInt because it is not an integer
BigInt(null);   // TypeError: Cannot convert null to a BigInt
BigInt("abc");  // SyntaxError语法错误: Cannot convert abc to a BigInt

// 不能使用严格相等运算符将BigInt与常规数字进行比较，因为类型不相同
console.log(10n === 10);  // false
console.log(10n == 10);  // true
console.log(typeof 10n);  // bigint
console.log(typeof 10);   // number

// 除一元加号(+)运算符外，所有算数运算符都可用于BigInt[兼容性]
console.log(10n + 20n);  // 30n
console.log(10n - 20n);  // -10n
// 一元加号(+)运算符，某些程序可能依赖于+始终生成Number的不变量，或者抛出异常
console.log(+10n);       // TypeError: Cannot convert a BigInt value to a number
console.log(-10n);       // -10n
console.log(10n * 20n);  // 200n
console.log(20n / 10n);  // 2n
console.log(23n % 10n);  // 3n
console.log(10n ** 3n);  // 1000n
const x = 10n;
++x;   // 11n
--x;   // 9n

// 使用算术运算符返回BigInt值，所以除法运算符(/)会自动向下舍入到最接近的整数
console.log(25n / 10n);   // 2n

// 由于隐式类型转换可能会丢失信息，所以不允许BigInt与Number之间进行混合操作
console.log(10n + 10);    // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(Math.max(2n,3n)); // TypeError: Cannot convert a BigInt value to a number

// 关系运算符不遵循此规则
console.log(10n > 5);  // true

// 如果需要BigInt与Number执行算术计算，可以通过BigInt()或者Number()转换操作数
console.log(2 + Number(10n));  // 12
console.log(2n + BigInt(2));   // 4n

// BigInt 与 Boolean 类型相遇时，处理方式与Number类型类似
// 只要不是0n，BigInt就被视为truthy的值
if(5n){
    // 这里的代码块将被执行
}
if(0n){
    // 这里的代码块不会被执行
}

// 排序BigInt和Number数组时，不会发生隐式类型转换
const arr = [3n, 4, 2, 3, 1n, 0, -1n];
arr.sort();     // [-1n, 0, 1n, 2, 3n, 3, 4]

