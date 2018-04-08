#### 1.ECMAScript 新功能 
```
BABLE
ECMAScript 2015 即 ES6
```

#### 2.块的作用域-let 
```
'use  strict'

{
    var fruit = 'Apple'

    // let fruit = 'Apple'
    // fruit is not defined 使用let定义的变量只能用在定义的块中,在块的外边不能够使用
}

console.log(fruit)

```

#### 3.恒量-const
```
'use strict'

//使用了恒量之后,我们就不能再给这个恒量一个新的值,注意,const限制的是分配值得这个动作,并不是值
// const fruit = "apple"
// const fruit = "orange"//SyntaxError: Identifier 'fruit' has already been declared
// console.log(fruit)

const fruit = ['apple','orange']
fruit.push('lemon')
console.log(fruit) //[ 'apple', 'orange', 'lemon' ]
fruit = []//这样就不可以了



// var fruit = "apple"
// var fruit = "banana"
// console.log(fruit)

``` 

#### 4.解构数组-Array Destructuring
```
'use strict';

//解构是ES6里新的语法,意思是分解解构

//需求,如果想将一个数组中的元素分别赋值给别的变量,之前的做法是分别赋值 如下
function breakfast() {
    return ['cake','tea','apple']
}

//之前的做法
//var tmp = breakfast(),dessert = tmp[0],drink = tmp[1],fruit = tmp[2];

//现在解构的做法
let [dessert,drink,fruit] = breakfast()


console.log(dessert,drink,fruit)

```

#### 5.解构对象-Object Destructuring
```
'use strict';

function breakfast() {
    return {dessert:'cake',drink:'tea',fruit:"apple"}
}

//{属性值:我们自己的值}
let {dessert:myDessert,drink:myDrink,fruit:myFruit} = breakfast()

console.log(myDessert,myDrink,myFruit)//cake tea apple


```
 

#### 6.模版字符串-Template Strings
```
'use strict';

let dessert = 'cake',drink = 'tea'

//需求,字符串的拼接
//之前的做法
// let breakfast = "早上吃的是" + dessert + "喝的是" + drink
// console.log(breakfast) //早上吃的是cake喝的是tea

//使用ES6的字符模板可以这么做 `文字 ${变量}`
let breakfast = `早上吃的是 ${dessert}喝的是 ${drink}`
console.log(breakfast) 

```

#### 7.带标签的模版字符串-Tagged Templates
```
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

```

#### 8.判断字符串里是否包含其他字符串
```
'use strict';

let dessert = 'cake',fruit = 'tea'
let breakfast = `早上吃的是${dessert}喝的是${fruit}`

console.log(breakfast.startsWith('早上'))//判断字符串是不是以‘早上’开头的 endsWith()是判断是不是以某为结尾的
console.log(breakfast.includes(dessert))//判断字符串是不是包含


```

#### 9.默认参数 - Default Parameter Values
```
function breakfast(dessert = "cake", drink = 'tea') {
    console.log(dessert,drink)
}

breakfast('包子','豆浆')

```

#### 10.展开操作符-Spread
```
'use strict';
// ...  ES6 中新增加的操作符

let  fruits = ['apple','banana','lemon'],foods1 = ['tea',fruits],foods2 = ['ice',...fruits]

console.log(fruits) //[ 'apple', 'banana', 'lemon' ]
console.log(...fruits)//apple banana lemon

console.log(foods1)//[ 'tea', [ 'apple', 'banana', 'lemon' ] ]
console.log(foods2)//[ 'ice', 'apple', 'banana', 'lemon' ]

```

#### 11.剩余操作符Rest
```
'use strict';
// ...还表示rest 一般用在函数的参数中

function breakfast(dessert,drink,...foods) {//除了之前的参数之外的参数会放在一个叫做foods的数组中
    console.log(dessert,drink,foods) //cake tea [ 'ice', 'lemon' ]
    console.log(dessert,drink,...foods)//这里表示的是解构,会输出数组中的内容 cake tea ice lemon
}

breakfast('cake','tea','ice','lemon')

```

#### 12.解构参数 - Destructured Parameters
```
'use strict';
//使用解构对象的方法,可以为函数设置一个对象

function breakfast(dessert,drink,{location,restaurant}={}) {
    console.log("cake","tea",location,restaurant)
}

breakfast("cake","tea",{location:'北京',restaurant:'烤鸭'})

```

#### 13.函数的名字-name属性
```
'use strict';

// function breakfast() { //breakfast
// }


// let breakfast = function() { // breakfast
// }

let breakfast = function superBreakfast() { //superBreakfast

}

console.log(breakfast.name)

```

#### 14.箭头函数-Arrow Fuctions
```
'use strict';
//              参数 如果函数没有参数的话,需要使用一个空白的括号
let breakfast = (dessert,fruit) => {
    return dessert + fruit
};

// let breakfast = (dessert,fruit) => dessert+fruit;

console.log(breakfast('cake','apple')) //cakeapple

```

#### 15.对象表达式
```
'use strict';
let dessert = 'cake',fruit = 'tea'

//之前的做法
// let food = {
//     dessert:dessert,
//     fruit:fruit,
//     breakFast: function () {
//         console.log(`早上吃的是${dessert},吃的水果是${fruit}`)
//     }
// }

//现在的做法
let food = {
    dessert,
    fruit,
    breakFast(){
        console.log(`早上吃的是${dessert},吃的水果是${fruit}`)
    }
}

food.breakFast()
```

#### 16.对象属性名
```
'use strict';

let food = {}
food.dessert = "cake"
food["ice frruit"] = "apple" //如果属性名中包含空格的话,就不能使用点,要使用["属性名"]的方式来表示变量

console.log(food)


```

#### 17.对比两个值是否相等-Object.is()
```

'use strict';

//判断两个值相等可以使用==,判断绝对相等可以使用===
console.log(+0 == -0)  //true
console.log(+0 === -0) //true
console.log(Object.is(+0,-0))//false


console.log(NaN == NaN)//false
console.log(NaN === NaN)//false
console.log(Object.is(NaN,NaN))// true

```

#### 18.把对象的值复制到另一个对象里 - Object.assign()
```
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

```

#### 19.设置对象的 prototype - Object.setPrototypeOf()
```
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

let sunday = Object.create(breakfast)
console.log(sunday.getDrink())//绿茶
console.log(Object.getPrototypeOf(sunday))//{ getDrink: [Function: getDrink] }
console.log(Object.getPrototypeOf(sunday) === breakfast) //true

Object.setPrototypeOf(sunday,dinner)//Reflect
console.log(sunday.getDrink())//啤酒

```



####  20.\_\_proto\_\_

```
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
```

#### 21.super
```
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

```

#### 22.迭代器 - Iterators
```

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

```

#### 23.生成器 - Generators
```
'use strict';

//定义一个生成器
// function* chef(foods) {
//     for(var i = 0; i<foods.length ;i++){
//         yield foods[i];
//     }
// }

let chef = function* (foods) {//使用函数表达式的方式来创建
    for(var i = 0; i<foods.length ;i++){
        yield foods[i];
    }
}

let res = chef(["apple",'lemon',"banana"])

console.log(res.next())//{ value: 'apple', done: false }
console.log(res.next())//{ value: 'lemon', done: false }
console.log(res.next())//{ value: 'banana', done: false }
console.log(res.next())//{ value: undefined, done: true }

```

#### 24.Classes - 类
```
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

```

#### 25.get 与 set
```
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


```

#### 26.静态方法-staitc
```
'use strict';
//静态方法

class Chef{
    constructor(){

    }

    static cook(food){
        console.log(food)
    }
}

Chef.cook("啤酒")


```

#### 27.继承-extends
```
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


```

#### 28.Set
```
'use strict';
//set 里没有冲重复的元素

let desserts = new Set(["apple","banana","lemon","orange"])
desserts.add("tom")
desserts.add("apple")
console.log(desserts)//Set { 'apple', 'banana', 'lemon', 'orange', 'tom' }
console.log(desserts.size)//set中元素的个数
console.log(desserts.has("apple"))//判断是否包含 true
desserts.delete("apple")//删除指定元素
console.log(desserts.has('apple'))//false

//遍历
desserts.forEach(dessert=>{
    console.log(dessert)
})

desserts.clear()//清空set
console.log(desserts.size)//0
```

#### 29.Map
```
'use strict';
//键值对
let food = new Map()
let fruit = {name:"apple"},cook = function () {},dessert = "甜点"

food.set(fruit,"lemon")
console.log(food)//Map { { name: 'apple' } => 'lemon' }

food.set(dessert,"cake")

console.log(food.get(fruit))//lemon

// food.delete() 删除
// food.has() 判断是否存在
// food.clear()清空

food.forEach((v,k)=>{
    console.log(`${k}:${v}`)
})

//[object Object]:lemon
// 甜点:cake
```

#### 30.Module
```
modules/chef.js
'use strict';

let fruit = "apple"
let dessert = "cake"


export {fruit,dessert}//不仅仅变量可以到处,还可以到处类,函数等


使用的时候
// import {fruit,dessert} from './modules/chef'
import * as chef from './modules/chef'
console.log(chef.fruit)
console.log(chef.dessert)

```

#### 31.重命名导出与导入的东西
```
modules/chef.js
'use strict';

let fruit = "apple"
let dessert = "cake"

function dinner(fruit,dessert) {
    console.log(`吃${fruit} 和${dessert}`)
}

export {fruit,dessert,dinner as supper}//不仅仅变量可以到处,还可以到处类,函数等

//dinner as supper 重命名 导出


使用的时候
'use strict';
import {fruit,dessert,supper as dinner} from './modules/chef' //重命名导入的东西

dinner(fruit,dessert)

```


#### 32.导出与导入默认
```
// export default function dinner(fruit,dessert) {//默认导出
//     console.log(`吃${fruit} 和${dessert}`)
// }

function dinner(fruit,dessert) {//默认导出
    console.log(`吃${fruit} 和${dessert}`)
}

export {dinner as default}



使用的时候
'use strict';
import dinner from './modules/chef'

dinner()
```
