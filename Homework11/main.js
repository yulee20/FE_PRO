//Task1

function Level1() {
    this.x = 0;
}

Level1.prototype.render = function(){
    console.log('x = ', this.x);
}

Level1.prototype.clear = function(){
    this.x = 0;
}

Level1.prototype.setValue = function(value){
    this.x = value;
}

function Level2() {}

Level2.prototype = new Level1();
Level2.prototype.sum = function(x, y){
    return Math.pow(x + y, 2);
}

Level2.prototype.div = function(x, y){
    return Math.pow(x / y, 2);
}

Level2.prototype.mul = function(x, y){
    return Math.pow(x * y, 2);
}

function Level3() {
    var max = 50,
        min = 0;

    var arr = [];
    arr.length = 200;
    
    for (var i = 0; i < arr.length; i++){
        arr[i] =  Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.getArr = function(){
        return arr;
    }
    this.setArr = function(newArr){
        arr = newArr;
    }
}

Level3.prototype = new Level2();

Level3.prototype.reInit = function(newArr){    
    this.setArr(newArr);
}

function Level4() {}

Level4.prototype = new Level3();

var calc = new Level4();
console.log(calc.getArr());
calc.setArr([2, 6, 1, 3]);
console.log(calc.getArr());
calc.reInit([0, 3, 5, 9, 1, 7]);
console.log(calc.getArr());

calc.render();
calc.setValue(15);
calc.render();
calc.clear();
calc.render();
calc.setValue(calc.sum(2, 2));
calc.render();
calc.setValue(calc.div(9, 3));
calc.render();
calc.setValue(calc.mul(5, 2));
calc.render();

//Task2

function superMath(){
    this.obj = {
        x: x,
        y: y,
        znak: function(){}
    } 

    this.check = function(object){
        
        test = confirm('Do you want to run it?' + object);
        if (test) znak();
            else {
                this.input();
            }
    }

    this.input = function(){
        obj.x = +prompt('Input x: ');
        obj.y = +prompt('Input y: ');
        obj.znak = prompt('Input znak: ');
    }
}

superMath.prototype.znak = function(x, y, operator){
    switch (operator){
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
    }    
}

p = new SuperMath();
obj = { X:12, Y:3, znak: '+'};
p.check(obj);

// obj = { X:12, Y:3, znak: '/'};
// p.check(obj);

// obj = { X:12, Y:3, znak: '-'};
// p.check(obj);

// obj = { X:2, Y:3, znak: '*'};
// p.check(obj);

// obj = { X:12, Y:3, znak: '%'};
// p.check(obj);