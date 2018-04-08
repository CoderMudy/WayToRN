/**
 * Created by mudy on 18/4/8.
 */
'use strict';
let breakfast = {};

Object.assign(
    breakfast,//复制到的地方,目标
    {
        drink:"beer",
        // breakFast(){
        //     console.log(`早上喝的是${drink}`)
        // }
    }//源
)

console.log(breakfast)
// breakfast.breakFast()