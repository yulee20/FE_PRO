//Task1

// function f(){
//     console.log(arguments);

//     for (var i = 0, arr = []; i < arguments.length; i++ ){
//         arr = arr.concat(arguments[i]);
//     }
    
//     console.log(arr);
// }

// f([1, 2, 3], [3, 6, 3223], [2, 8, 5, 7, 457, 457, 4]);

//Task2

// function factory(arr){
//     var i = 0;
    
//     return function (){
//         return arr[i++]; //arr.shift();
//     }
// }

// var step = factory([2, 8, 9, 2, 4]);

// var res = step();
// console.log(res);
// console.log(step());
// console.log(step());

//Task3

// function factory(arr){
//     var i = 0;
   
//     return function (func){
//         return func(arr[i++]);
//     }
// }

// var step = factory([2, 8, 9, 2, 4]);

// console.log(step(sqr));
// console.log(step(sqr));
// console.log(step(sqr));

// function sqr(x){
//     return x*x;
// }

//Task4

function getMax(){
    var arr = [];
    for (var i = 0; i < arguments.length; i++){
        arr.push(maxArr(arguments[i]));
    }
    var str = arr.join(', ');
    console.log('str: ', str);
}

function maxArr(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

getMax([3, 6, 8, 1], [5, 2, 4], [9, 10, 3], [7, 8, 2]);