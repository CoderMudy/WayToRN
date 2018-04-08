/**
 * Created by mudy on 18/4/8.
 */
'use strict';
//键值对
let food = new Map()
let fruit = {name:"apple"},cook = function () {},dessert = "甜点"

food.set(fruit,"lemon")
console.log(food)//Map { { name: 'apple' } => 'lemon' }

food.set(dessert,"cake")

console.log(food.get(fruit))//lemon

// food.delete() 删除
// food.has() 判断是否存在
// food.clear()清空

food.forEach((v,k)=>{
    console.log(`${k}:${v}`)
})

//[object Object]:lemon
// 甜点:cake
