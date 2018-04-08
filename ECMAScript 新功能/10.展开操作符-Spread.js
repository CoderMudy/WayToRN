/**
 * Created by mudy on 18/4/8.
 */
'use strict';
// ...  ES6 中新增加的操作符

let  fruits = ['apple','banana','lemon'],foods1 = ['tea',fruits],foods2 = ['ice',...fruits]

console.log(fruits) //[ 'apple', 'banana', 'lemon' ]
console.log(...fruits)//apple banana lemon

console.log(foods1)//[ 'tea', [ 'apple', 'banana', 'lemon' ] ]
console.log(foods2)//[ 'ice', 'apple', 'banana', 'lemon' ]
