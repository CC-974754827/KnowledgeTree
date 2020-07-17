/**
 * toLocaleLowerCase()
 * 根据本地主机的语言环境把字符串转换为小写
 * 本地是根据浏览器的语言设置来判断的
 * 通常，该方法与 toLowerCase() 方法返回的结果相同，
 * 只有几种语言（如土耳其语）具有地方特有的大小写映射
 * string.toLocaleLowerCase()
 * 
 * toLocaleLowerCase() 方法没有改变原始字符串
 */

var str = "Hello";
console.log(str.toLocaleLowerCase()); // hello