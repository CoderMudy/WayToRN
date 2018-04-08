/**
 * Created by mudy on 18/4/8.
 */
'use strict';

//判断两个值相等可以使用==,判断绝对相等可以使用===
console.log(+0 == -0)  //true
console.log(+0 === -0) //true
console.log(Object.is(+0,-0))//false


console.log(NaN == NaN)//false
console.log(NaN === NaN)//false
console.log(Object.is(NaN,NaN))// true