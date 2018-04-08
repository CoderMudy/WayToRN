/**
 * Created by mudy on 18/4/8.
 */
'use strict';
let dessert = 'cake',drink = 'tea';

let breakfast = kitchen`早上吃的是${dessert}喝的是${drink}!`

function kitchen(strings,...values) {
    // console.log(strings)//[ '早上吃的是', '喝的是', '!!' ]
    // console.log(values)//[ 'cake', 'tea' ]


    let result = '';
    for(var i = 0; i < values.length;i++){
        result += strings[i];
        result += values[i]
    }
    result += strings[strings.length - 1]
    // console.log(strings[strings.length - 1])
    return result
}

console.log(breakfast)