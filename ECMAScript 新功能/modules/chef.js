/**
 * Created by mudy on 18/4/8.
 */
'use strict';

let fruit = "apple"
let dessert = "cake"

// export default function dinner(fruit,dessert) {//默认导出
//     console.log(`吃${fruit} 和${dessert}`)
// }

function dinner(fruit,dessert) {//默认导出
    console.log(`吃${fruit} 和${dessert}`)
}

export {dinner as default}

// export {fruit,dessert,dinner as supper}//不仅仅变量可以到处,还可以到处类,函数等

//dinner as supper 重命名 导出