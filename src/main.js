import {toggle} from './toggleHandler'

const sayName = function(value) {
    const statement = "hello " + value;
    console.log(statement)
}

toggle();
sayName("Israel")