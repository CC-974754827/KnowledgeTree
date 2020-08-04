/**
 * 工作原理：发布/订阅方法，通常称为Pub/Sub
 */

/**
 * 创建全局EventBus
 */
```
var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $bus: {
    get: function(){
        return EventBus
    }
    }
});
```

/**
 * 在特定的总线中，
 * 用于创建发出的事件，$emit
 * 用于订阅，$on
 * 用于移除，$off
 */
```
var EventBus = new Vue();

this.$bus.$emit('nameOfEvent', {...pass spm event data...});

this.$bus.$on('nameOfEvent', ($event) => {
    // ...
});

this.$bus.$off();
```