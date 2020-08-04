/**
 * 时间戳版
 * 函数触发是在时间段内开始的时候
 * 在持续触发事件的过程中，函数会立即执行，并且每n秒执行一次
 * 
 * 定时器版
 * 函数触发是在时间段内结束的时候
 * 在持续触发事件的过程中，函数不会立即执行，并且每n秒执行一次，
 * 在停止触发事件后，函数还会再执行一次
 * 
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type){
    if(type === 1){
        var previous = 0;
    }else if(type === 2){
        var timeout;
    }
    return function(){
        let context = this;
        let args = arguments;

        if(type === 1){
            let now = Date.now();
            if(now - previous > wait){
                func.apply(context, args);
                previous = now;
            }
        }else if(type === 2){
            if(!timeout){
                timeout = setTimeout(()=>{
                    timeout = null;
                    func.apply(context, args);
                }, wait);
            }
        }
        
    }
}