/**
 * 初始化
 * 首先需要创建事件总线并将其导出，以便其他模块可以使用或者监听它
 */
```
// 第一种，新创建一个.js文件
// EventBus是一个不具备DOM的组件，它具有的仅仅只是它实例方法而已，因此它很轻便
// event-bus
import Vue from 'vue';
export const EventBus = new Vue();


// 可以直接在项目中的main.js初始化EventBus
// 这种方法初始化的EventBus是一个全局的事件总线
// main.js
Vue.prototype.$EventBus = new Vue();
```

/**
 * 发送事件
 */
```
// 假设有两个vue页面需要通信，A和B，A页面在按钮上面绑定了点击事件
// A.vue
<template>
    <button @click="sendMsg()">-</button>
</template>

<script>
    import { EventBus } from "../event-bus.js";
    export default{
        methods: {
            sendMsg(){
                EventBus.$emit("aMsg", "来自A页面的消息");
            }
        }
    }
</script>
```

/**
 * 接收事件
 */
```
<template>
    <p>{{msg}}</p>
</template>

<script>
    import { EventBus } from "../event-bus.js";
    export default{
        data(){
            return{
                msg: ''
            }
        },
        mounted(){
            EventBus.$on("aMsg", (msg) => {
                // A发送来的信息
                this.msg = msg;
            });
        }
    }
</script>
```

/**
 * 同理，可以将 B页面 向 A页面 发送消息，主要用到两个方法：
 * 
 * 发送消息
 * EventBus.$emit(channel: string, callback(payload1, ...));
 * 
 * 监听接收消息
 * EventBus.$on(channel: string, callback(payload1, ...));
 */

 /**
  * 在vue页面销毁时，同事移除EventBus事件监听
  * 
  * 移除事件监听
  * 
  * EventBus.$off('aMsg', {})来移除应用内所有对此某个事件的监听
  * 或者直接调用 EventBus.$off()来移除所有事件频道，不需要添加任何参数
  */
 ```
 import { eventBus } from "./event-bus.js";
 EventBus.$off('aMsg', {});
 ```