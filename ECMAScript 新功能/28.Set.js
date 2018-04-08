/**
 * Created by mudy on 18/4/8.
 */
'use strict';
//set 里没有冲重复的元素

let desserts = new Set(["apple","banana","lemon","orange"])
desserts.add("tom")
desserts.add("apple")
console.log(desserts)//Set { 'apple', 'banana', 'lemon', 'orange', 'tom' }
console.log(desserts.size)//set中元素的个数
console.log(desserts.has("apple"))//判断是否包含 true
desserts.delete("apple")//删除指定元素
console.log(desserts.has('apple'))//false

//遍历
desserts.forEach(dessert=>{
    console.log(dessert)
})

desserts.clear()//清空set
console.log(desserts.size)//0