/**
 * Created by mudy on 18/4/8.
 */

'use strict'

//使用了恒量之后,我们就不能再给这个恒量一个新的值,注意,const限制的是分配值得这个动作,并不是值
// const fruit = "apple"
// const fruit = "orange"//SyntaxError: Identifier 'fruit' has already been declared
// console.log(fruit)

const fruit = ['apple','orange']
fruit.push('lemon')
console.log(fruit) //[ 'apple', 'orange', 'lemon' ]
// fruit = []//这样就不可以了



// var fruit = "apple"
// var fruit = "banana"
// console.log(fruit)
