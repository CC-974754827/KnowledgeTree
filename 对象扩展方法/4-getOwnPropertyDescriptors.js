/**
 * Object.getOwnPropertyDescriptors()
 * 用来获取一个对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象
 * Object.getOwnPropertyDescriptors(obj)
 * obj 任意对象
 */

var obj = {
    foo: '123',
    get bar(){
        return 'abc';
    }
}

var test = Object.getOwnPropertyDescriptors(obj);
console.log(test);
// {foo: {…}, bar: {…}}
// foo: {value: "123", writable: true, enumerable: true, configurable: true}
// bar: {set: undefined, enumerable: true, configurable: true, get: f bar()}