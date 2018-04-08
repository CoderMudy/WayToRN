/**
 * Created by mudy on 18/4/8.
 */

'use strict';

//解构是ES6里新的语法,意思是分解解构

//需求,如果想将一个数组中的元素分别赋值给别的变量,之前的做法是分别赋值 如下
function breakfast() {
    return ['cake','tea','apple']
}

//之前的做法
//var tmp = breakfast(),dessert = tmp[0],drink = tmp[1],fruit = tmp[2];

//现在解构的做法
let [dessert,drink,fruit] = breakfast()


console.log(dessert,drink,fruit)
