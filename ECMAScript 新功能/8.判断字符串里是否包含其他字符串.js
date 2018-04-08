/**
 * Created by mudy on 18/4/8.
 */
'use strict';

let dessert = 'cake',fruit = 'tea'
let breakfast = `早上吃的是${dessert}喝的是${fruit}`

console.log(breakfast.startsWith('早上'))//判断字符串是不是以‘早上’开头的 endsWith()是判断是不是以某为结尾的
console.log(breakfast.includes(dessert))//判断字符串是不是包含