/**
 * Created by mudy on 18/4/8.
 */
'use strict';
//可以得到或者设置对象的__proto__
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

let sunnday = { //对象
    __proto__ : breakfast
}

console.log(sunnday.getDrink())//绿茶
sunnday.__proto__ = dinner
console.log(sunnday.getDrink())//啤酒