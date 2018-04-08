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

let sunnday = {
    __proto__:breakfast,
    getDrink(){//重写getDrink()并且获取breakfast的getDrink方法的返回值
        return super.getDrink() + "烤鸭"
    }
}

console.log(sunnday.getDrink())//绿茶烤鸭
