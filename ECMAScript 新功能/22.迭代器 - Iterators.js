/**
 * Created by mudy on 18/4/8.
 */
'use strict';

//Iterators 每次执行的时候会返回一个对象{value:xx,done:true/false} done表示是否有可以迭代的东西 如过没有此值为true,表示完成了迭代
//next方法,

//手动的创建一个迭代器

function chef(foods) {
    let i = 0;

    return {//返回一个对象
        next(){
            let done = (i >= foods.length)
            let value = !done? foods[i++] : undefined
            return {
                value: value,
                done: done
            }
        }
    }
}


let res = chef(['apple','lemon','banana'])
console.log(res.next().value)//apple
console.log(res.next().value)//lemon
console.log(res.next().value)//banana
console.log(res.next().value)//undefined
