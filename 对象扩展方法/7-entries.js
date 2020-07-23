/**
 * Object.entries()
 * 返回一个给定对象自身可枚举属性的键值对数组
 * Object.entries(obj)
 * obj 可以返回其可枚举属性的键值对的对象
 */

var obj = {
    a: 'somestring',
    b: 42
};

Object.entries(obj);
// [["a", "somestring"], ["b", 42]]

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`); // "a somestring", "b 42"
}