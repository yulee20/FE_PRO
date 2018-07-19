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

Level3.prototype.reInit = function (){    
    var max = 50,
        min = 0;
    var arr = this.getArr();
    for (var i = 0; i < arr.length; i++){
        arr[i] =  Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.setArr(arr);
}

function Level4() {}

Level4.prototype = new Level3();

var calc = new Level4();
console.log(calc.getArr());
// calc.setArr([2, 6, 1, 3]);
// console.log(calc.getArr());
calc.reInit();
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

function SuperMath(){
}

SuperMath.prototype.check = function(object){        
    test = confirm('Do you want to run it?' + JSON.stringify(object));
    if (test) console.log(this.znak(object.x, object.y, object.znak));
        else {
            var obj = this.input();
            console.log(this.znak(obj.x, obj.y, obj.znak));
        }
}

SuperMath.prototype.input = function(){
    var obj = {};
    obj.x = +prompt('Input x: ');
    obj.y = +prompt('Input y: ');
    obj.znak = prompt('Input znak: ');
    temp = ['*', '/', '-', '+', '%'];
    if(!temp.includes(obj.znak)){
        return this.input();
    }
    return obj;
}

SuperMath.prototype.znak = function(x, y, operator){
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
obj = { x:2, y:3, znak: '+'};
p.check(obj);

obj = { x:12, y:10, znak: '-'};
p.check(obj);

obj = { x:12, y:3, znak: '/'};
p.check(obj);

obj = { x:2, y:5, znak: '*'};
p.check(obj);

obj = { x:12, y:5, znak: '%'};
p.check(obj);