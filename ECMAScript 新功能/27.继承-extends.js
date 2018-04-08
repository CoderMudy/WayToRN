/**
 * Created by mudy on 18/4/8.
 */
'use strict';

class Person{
    constructor(name,birthDay){
        this.name = name
        this.bitthday = birthDay
    }

    desc(){
        return `姓名是${this.name} 生日是${this.bitthday}`
    }
}


class  Chef extends Person{
    constructor(name,birthDay){
        super(name,birthDay)//
    }
}

let chushen = new Chef("mudy","2001-01-09")
console.log(chushen.desc())//姓名是mudy 生日是2001-01-09



