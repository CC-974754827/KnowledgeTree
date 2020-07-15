## JavaScript的事件机制：事件绑定、事件监听、事件委托（事件代理）

### DOM事件级别
> DOM 0级事件处理，DOM 2级事件处理和DOM 3级事件处理。由于DOM 1级中没有事件的相关内容，所以没有DOM 1级事件。

> #### DOM 0级事件 
1. on-event (HTML 属性) 
>>`<input onclick="alert('xxx')"/>`
2. on-event (非HTML 属性)
>> window或document此类没有实体元素
```
window.onload = function(){
    document.write("Hello world!");
};
```
>> 实体元素
```
// HTML
<button id="btn">Click</button>
// JavaScript
var btn = document.getElementById('btn');
btn.onclick = function(){
    alert('xxx');
}
```
>> 若想解除事件的话，则重新指定on-event为null
```
btn.onclick = null
```
3. 同一个元素的同一种事件只能绑定一个函数，否则后面的函数会覆盖之前的函数
4. 不存在兼容性问题    
> #### DOM 2级事件
1. Dom 2级事件是通过 addEventListener 绑定的事件
2. 同一个元素的同种事件可以绑定多个函数，按照绑定顺序执行
3. 解绑Dom 2级事件时，使用 removeEventListener[不能移除匿名添加的函数]
```
btn.removeEventListener( "click" ,a)
```
有三个参数：第一个参数是事件名（如click）；第二个参数是事件处理程序函数；第三个参数如果是true的话表示在捕获阶段调用，为false的话表示在冒泡阶段调用
> #### DOM 3级事件
* UI事件，当用户与页面上的元素交互时触发，如：load、scroll
* 焦点事件，当元素获得或失去焦点时触发，如：blur、focus
* 鼠标事件，当用户通过鼠标在页面执行操作时触发如：dblclick、mouseup
* 滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
* 文本事件，当在文档中输入文本时触发，如：textInput
* 键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
* 合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
* 变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified
* 同时DOM3级事件也允许使用者自定义一些事件
### DOM事件流
事件流(Event Flow)指的就是网页元素接收事件的顺序
* 事件捕获(Event Capturing)
* 事件冒泡(Event Bubbling)
> 当一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段
1. 捕获阶段：事件从window对象自上而下向目标节点传播的阶段；
2. 目标阶段：真正的目标节点正在处理事件的阶段；
3. 冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。
> 事件传递顺序有这两种机制，所以事件是依据这两种机制执行的


