/**
 * Created by mudy on 18/4/8.
 */

'use strict';

let dessert = 'cake',drink = 'tea'

//需求,字符串的拼接
//之前的做法
// let breakfast = "早上吃的是" + dessert + "喝的是" + drink
// console.log(breakfast) //早上吃的是cake喝的是tea

//使用ES6的字符模板可以这么做 `文字 ${变量}`
let breakfast = `早上吃的是 ${dessert}喝的是 ${drink}`
console.log(breakfast)