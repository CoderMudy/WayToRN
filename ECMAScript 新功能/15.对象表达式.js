/**
 * Created by mudy on 18/4/8.
 */
'use strict';
let dessert = 'cake',fruit = 'tea'

//之前的做法
// let food = {
//     dessert:dessert,
//     fruit:fruit,
//     breakFast: function () {
//         console.log(`早上吃的是${dessert},吃的水果是${fruit}`)
//     }
// }

//现在的做法
let food = {
    dessert,
    fruit,
    breakFast(){
        console.log(`早上吃的是${dessert},吃的水果是${fruit}`)
    }
}

food.breakFast()
// console.log(food)