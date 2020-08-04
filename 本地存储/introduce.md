#### 基本概念
* Cookie
> cookie大小限制为4KB左右，主要用途有保存登录信息，比如：登录某个网站可以看到“记住密码”，通常就是通过在cookie中存入一段辨别用户身份的数据来实现的
* localStorage
> localStorage是h5中新加入的技术，目前已被大多数浏览器支持
* sessionStorage
> 与localStorage接口类似，但保存数据的生命周期与localStorage不同。可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在，但当页面关闭后，sessionStorage中的数据就会被清空


#### 三者区别
```
共同点：都保存在浏览器端，与服务端的session机制不同
```
```
Cookie
    数据的生命周期：
        一般由服务器生成，可设置失效时间；如果在浏览器端生成Cookie，默认是关闭浏览器后失效
    存放数据大小：
        4KB左右
    与服务器端通信：
        每次都会携带在HTTP头中，如果使用Cookie保存过多的数据会带来性能问题
    易用性：
        需要自行封装，源生的Cookie接口不友好

localStorage
    数据的生命周期：
        除非被清除，否则永久保存
    存放数据大小：
        一般为5MB
    与服务器端通信：
        仅在客户端（即浏览器）中保存，不参与和服务器的通信
    易用性：
        源生接口可以接受，也可再次封装来对Object和Array有更好的支持

sessionStorage
    数据的生命周期：
        仅在当前会话下有效，关闭页面或浏览器后被清除
    存放数据大小：
        一般为5MB
    与服务器端通信：
        仅在客户端（即浏览器）中保存，不参与和服务器的通信
    易用性：
        源生接口可以接受，也可再次封装来对Object和Array有更好的支持
```
```
localStorage 与 sessionStorage
不同浏览器无法共享localStorage或sessionStorage中的信息；
相同浏览器的不同页面可以共享相同的localStorage（页面属于相同域名和端口）；
不同页面或标签页间无法共享sessionStorage的信息（其中页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且它们属于同源页面，那么它们之间可以共享sessionStorage）
```

#### 应用场景
Cookie：因为每个HTTP请求会携带cookie信息，所以cookie最好精简，比较常用的是判断用户是否登录。针对登录过的用户，服务器端会在他登录时往cookie中插入一段加密过的唯一辨识单一用户的辨识码，下次只要读取这个值就可以判断当前用户是否登录了
localStorage：比如管理购物车、h5游戏中保存一些本地数据
sessionStorage：比如一些内容特别多的表单，为优化用户体验，把表单页面分成多个子页面，然后按步骤引导用户填写

#### 方法
##### localStorage/sessionStorage
首先判断浏览器是否支持localStorage/sessionStorage
```
if(window.localStorage){
    console.log('支持');
}else{
    console.log('不支持');
}
```
* 存储数据
> 用途：将value存储到key字段
> 用法：setItem(key, value)
```
如果需要存储数组或对象，可使用JSON格式传入
sessionStorage.setItem('key', 'value');
localStorage.setItem('key', 'value');
```
* 取出数据
> 用途：获取指定key本地存储的值
> 用法：getItem(key)
```
sessionStorage.getItem('key');
localStorage.getItem('key');
```
* 修改数据
> 用途：修改指定key本地存储的值
> 用法：setItem(key, value)
```
sessionStorage.setItem('key', 'newVal');
localStorage.setItem('key', 'newVal');
```
* 删除数据
> 用途：删除指定key本地存储的值
> 用法：removeItem(key)
```
sessionStorage.removeItem('key');
localStorage.removeItem('key');
```
* 清除数据
> 用途：清除所有本地存储的数据
> 用法：clear()
```
sessionStorage.clear();
localStorage.clear();
```
##### cookie
* 存储数据
```
window.document.cookie = 'key=val';
```
* 取出数据
```
document.cookie
```
