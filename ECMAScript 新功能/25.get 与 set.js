/**
 * Created by mudy on 18/4/8.
 */
'use strict';

//set方法与get方法


class chef{
    constructor(foods){
        this.foods = foods
    }

    set menu(food){
        this.foods.push(food)
    }

    get menu(){
        return this.foods
    }

    cook(){
        console.log(this.foods)
    }
}


let chushen = new chef(["apple"])
chushen.cook() //[ 'apple' ]
console.log(chushen.menu)//[ 'apple' ]
chushen.menu = "烧鸡"
console.log(chushen.menu)//[ 'apple', '烧鸡' ]
chushen.menu = "烧鸡"
console.log(chushen.menu)//[ 'apple', '烧鸡', '烧鸡' ]