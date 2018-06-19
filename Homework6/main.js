//Task1

function fillInArray (arr) {  
var min = 1,
    max = 100;  
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++)
            arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function outputArray(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            document.write(arr[i][j] + ' ');
        }
        document.write("<br />");
    }
}

var list = new Array(5);
for (var i = 0; i < list.length; i++){
    list[i] = new Array(5);
}

fillInArray(list);
outputArray(list);

//Task2

var arr1 = [50, 3, 6, 'er', 'wsee', 7, 'cvb', 8, 2],
    arr2 = ['v', 9, 20, 'sd', 1, 4, 'rty'];

function compareArrays (A, B){
    var sum1 = 0,
        sum2 = 0;

    for (var i = 0; i < A.length; i++){
        if (!isNaN(A[i])){
            sum1 += A[i];
        }
    }
    for (var i = 0; i < B.length; i++){
        if (!isNaN(B[i])){
            sum2 += B[i];
        }
    }

    console.log('sum A: ', sum1, ' sum B: ', sum2);
    
    if (sum1 > sum2){
        console.log('A');
        return A;
    } else {
        console.log('B');
        return B;
    }
}

console.log(compareArrays (arr1, arr2));

//Task3

function doMath (x, znak, y){
    switch (znak){
        case '+': 
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*': 
            return x * y;
            break;
        case '/':
            if (y != 0){
                return x / y;
            }
            else {
                console.log('no division by zero!');            
            }
            break; 
        case '%': 
            return x % y;
            break;
        case '^':
            return Math.pow(x, y);
            break;               
    }
}

var a = +prompt('Input a: '),
    operator = prompt('Input znak: '),
    b = +prompt('Input b: ');

console.log(doMath(a, operator, b));