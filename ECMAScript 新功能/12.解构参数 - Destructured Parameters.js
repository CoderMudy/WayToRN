/**
 * Created by mudy on 18/4/8.
 */

'use strict';
//使用解构对象的方法,可以为函数设置一个对象

function breakfast(dessert,drink,{location,restaurant}={}) {
    console.log("cake","tea",location,restaurant)
}

breakfast("cake","tea",{location:'北京',restaurant:'烤鸭'})