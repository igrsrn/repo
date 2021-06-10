'use strict'

function showUnit1() {
        let a = 1, b = 1, c, d;
    /*Префиксный инкремент увеличивает значение на единицу на данной строке,
        новое значение записывается в переменную с*/
    c = ++a;
    alert(c);

    /* постфиксный инкремент увеличит операнд b на единицу при следующем
        вызове данного операнда
    */
    d = b++;
    alert(d);

    /*1-й операнд суммируется со 2-м, префиксный инкремент увеличивает
        2-й операнд на единицу на данной строке
    */
    c = 2 + ++a;
    alert(c);

    /*1-й операнд суммируется со вторым, на данной строке 2-й операнд
        увеличивается на единицу из прошлого постфиксного инкремента,
        постфиксный инкремент увеличит 2-й операнд на единицу при
        следующем вызове операнда;
    */
    d = 2 + b++;
    alert(d);

    alert(a);
    alert(b);
}


a = 2;
/*1-м выполняется оператор в скобках, 2 умножается на 2, результат
    присваивается в переменную a, затем 1-й операнд суммируется со
    значением которое хранится в переменной a */
let x = 1 + (a *= 2);

function showUnit3() {
    let a = +prompt('Введите 1-е целое число');
    let b = +prompt('Введите 2-е целое число');
    if(a >= 0 && b >= 0) {
        alert(a - b);
    } else if(a < 0 && b < 0) {
        alert(a * b);
    } else if(a >= 0 || a < 0 && b >= 0 || b < 0) {
        alert(a + b);
    }
}



function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return  a / b;
}


function showUnit5() {
    function mathOperation(arg1, arg2, operation) {
        arg1 = +prompt('Введите 1-е число');
        arg2 = +prompt('Введите 2-е число');
        operation = prompt('Введите название операции');
        switch(operation) {
            case 'плюс':
                return sum(arg1, arg2);
            case 'минус':
                return sub(arg1, arg2);
            case 'умножение':
                return mul(arg1, arg2);
            case 'деление':
                return div(arg1, arg2);
        }
    }
    
    alert(mathOperation());
}