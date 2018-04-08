/**
 * Created by mudy on 18/4/8.
 */
'use strict';

let breakfast = {
    getDrink(){
        return "绿茶"
    }
}

let dinner = {
    getDrink(){
        return "啤酒"
    }
}

let sunday = Object.create(breakfast)
console.log(sunday.getDrink())//绿茶
console.log(Object.getPrototypeOf(sunday))//{ getDrink: [Function: getDrink] }
console.log(Object.getPrototypeOf(sunday) === breakfast) //true

Object.setPrototypeOf(sunday,dinner)//Reflect
console.log(sunday.getDrink())//啤酒