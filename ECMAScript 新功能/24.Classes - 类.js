/**
 * Created by mudy on 18/4/8.
 */
'use strict';

//定义一个类

class chef{
    constructor(foods){//初始化方法,构造方法,创建实例的时候,会自动调用这个方法
        this.foods = foods
    }

    cook(){
        console.log(this.foods)
    }
}

let chushen = new chef(['烤鸭','烧鸡','火烧'])
chushen.cook()//[ '烤鸭', '烧鸡', '火烧' ]