/**
 * Created by mudy on 18/4/8.
 */
'use strict';

function breakfast() {
    return {dessert:'cake',drink:'tea',fruit:"apple"}
}

//{属性值:我们自己的值}
let {dessert:myDessert,drink:myDrink,fruit:myFruit} = breakfast()

console.log(myDessert,myDrink,myFruit)


