/**
 * 非立即执行版
 * 触发事件后函数不会立即执行，而是在n秒后执行，
 * 如果在n秒内又触发了事件，则会重新计算函数执行时间
 * 
 * 立即执行版
 * 触发事件后函数会立即执行，然后n秒内不触发事件才能继续执行函数的效果
 * 
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        
        if(timeout){
            clearTimeout(timeout);
        }

        if(immediate){
            var callNow = !timeout;
            timeout = setTimeout(()=>{
                timeout = null;
            }, wait);
            if(callNow){
                func.apply(context, args);
            }
        }else{
            timeout = setTimeout(()=>{
                func.apply(context, args);
            }, wait);
        }
    }
}