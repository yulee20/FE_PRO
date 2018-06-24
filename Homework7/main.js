//Task1

function centerElements(){

    var newArr = [];

    console.log('default:', arguments);

    for (var i = 0; i < arguments.length; i++ ){
            if (!(arguments[i].length % 2)){
                newArr.push(arguments[i][arguments[i].length/2 - 1], arguments[i][arguments[i].length/2]);
            }
            if (arguments[i].length % 2 != 0){
                newArr.push(arguments[i][Math.floor(arguments[i].length/2)]);
            }
    }
    return newArr;
}

console.log('newArray: ', centerElements([3, 2, 6, 7, 4, 8], [4, 7, 10, 2, 5], [3, 6, 9], [1, 2, 3, 4], [10, 15, 4]));

//Task2 + Task3

function doFunction(a, b, func){
    return func(a, b);
}

function power (x, y){
    return  Math.pow(x, y);
}

function sum (x, y){
    return x + y;
}

function div (x, y){
    if (y != 0){
        return x / y;
    }
    else {
        console.log('no division by zero!');      
    };
}

function mul (x, y){
    return x * y;
}

console.log('Power: ', doFunction(2, 3, power));
console.log('Sum: ', doFunction(2, 3, sum));
console.log('Div: ', doFunction(9, 3, div));
console.log('Mul: ', doFunction(2, 3, mul));

//Task4
console.log('----------Task 4-----------');

function doNewFunction(a, b, func){    
    var flag = 0,
        counter = 0;
    for (var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) === 'number'){
            counter++;
        }        
        if(arguments[i].name === 'factorial'){
            flag = 1;
            func = b; //переприсвоила ссылку на функцию, т.к. она была в b, func = undefined без этого присваивания
        }
    }
    
    if (flag && counter){
        return func(a); //или b(a); если убрать 65 строку
    }
    else {
        //console.log('Not a factorial!');
        return func (a, b);
    }
}

function factorial (x){
    var res = 1; 
    for (var i = 1; i <= x; i++){
        res *= i;
    }
    return res; //console.log('res: ', res);
}

function newMul (x, y){
    return x * y;
}

console.log('Factorial: ', doNewFunction(7, factorial));
console.log('Mul: ', doNewFunction(4, 3, newMul));