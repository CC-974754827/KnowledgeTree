/**
 * slice()
 * 截取指定位置的数组，并且返回截取的数组，不会改变原数组
 * arrayObject.slice(start,end)
 * start 必需。规定从何处开始选取。
 *      如果是负数，那么它规定从数组尾部开始算起的位置。
 *      也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
 * end 可选。规定从何处结束选取(不包含end位)。
 *      该参数是数组片断结束处的数组下标。
 *      如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
 *      如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
 */

var arr = ["T1","J1","L1","L2","M1"];
console.log(arr.slice(1,3));        //["J1","L1"]
console.log(arr.slice(1));          //["J1","L1","L2","M1"]
console.log(arr.slice(-4,-1));      //["J1","L1","L2"]
console.log(arr.slice(-2));         //["L2","M1"]
console.log(arr.slice(1,-2));       //["J1","L1"]
console.log(arr);                   //["T1","J1","L1","L2","M1"]