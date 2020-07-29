var obj = {
    success: false,
    result: [0, 1]
}
/**
 * obj.result为Array类型，
 * result和obj.result指向堆中的同一个地址，相互影响
 */
var result = obj && obj.result;
console.log(result); // [0, 1]
console.log(obj.result); // [0, 1]

result.push('aa');
console.log(result); // [0, 1, "aa"]
console.log(obj.result); // [0, 1, "aa"]

obj.result.push('bb');
console.log(result); // [0, 1, "aa", "bb"]
console.log(obj.result);  // [0, 1, "aa", "bb"]

result = [0, 1, 2];
console.log(result); // [0, 1, 2]
console.log(obj.result); // [0, 1, "aa", "bb"]