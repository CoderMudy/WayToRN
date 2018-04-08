/**
 * Created by mudy on 18/4/8.
 */

'use strict';
// ...还表示rest 一般用在函数的参数中

function breakfast(dessert,drink,...foods) {//除了之前的参数之外的参数会放在一个叫做foods的数组中
    console.log(dessert,drink,foods) //cake tea [ 'ice', 'lemon' ]
    console.log(dessert,drink,...foods)//这里表示的是解构,会输出数组中的内容 cake tea ice lemon
}

breakfast('cake','tea','ice','lemon')