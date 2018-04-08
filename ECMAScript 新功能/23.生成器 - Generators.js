/**
 * Created by mudy on 18/4/8.
 */
'use strict';

//定义一个生成器
// function* chef(foods) {
//     for(var i = 0; i<foods.length ;i++){
//         yield foods[i];
//     }
// }

let chef = function* (foods) {//使用函数表达式的方式来创建
    for(var i = 0; i<foods.length ;i++){
        yield foods[i];
    }
}

let res = chef(["apple",'lemon',"banana"])

console.log(res.next())//{ value: 'apple', done: false }
console.log(res.next())//{ value: 'lemon', done: false }
console.log(res.next())//{ value: 'banana', done: false }
console.log(res.next())//{ value: undefined, done: true }