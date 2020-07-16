/**
 * valueOf()
 * 返回数组的原始值（一般情况下其实就是数组自身）
 * arrayObject.valueOf()
 */

var str = [1,2,3];
console.log(str.valueOf()); // [1,2,3]
console.log(str); // [1,2,3]
//为了证明返回的是数组自身
console.log(str.valueOf() == str); // true
console.log(str.valueOf() === str); // true
