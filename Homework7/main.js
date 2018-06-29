//Task1

function centerElements(){
    var newArr = [];
    console.log('default:', arguments);

    for (var i = 0; i < arguments.length; i++ ){
            if (!(arguments[i].length % 2)){
                newArr.push(arguments[i][arguments[i].length/2 - 1], arguments[i][arguments[i].length/2]);
            } else {
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
 
function doNewFunction(a, func){   
    
    /*version 1*/
    var counter = 0;
    for (var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) === 'number'){
            counter++;
        }        
    }
    
    if (counter && arguments[1].name == 'factorial'){
        func = arguments[1];
        return func(a);
    }

    /*version 2*/
    if(typeof arguments[1] == 'function'){
        return arguments[1](a);
    }
}

function factorial (x){
    var res = 1; 
    for (var i = 1; i <= x; i++){
        res *= i;
    }
    return res; 
}

console.log('Factorial: ', doNewFunction(7, factorial));