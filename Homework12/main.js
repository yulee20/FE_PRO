function Field (width, hight){
    var arr = new Array (width);

    for (var i = 0; i < arr.length; i++){
        arr[i] = new Array (hight);

        for (var j = 0; j < arr[i].length; j++){
            arr[i][j] = 0;
        }
    }

    this.getArr = function(){
        return arr;
    }

    this.setArr = function(newArr){
        arr = newArr;
    }
}

Field.prototype.renderField = function(){
    var arr = this.getArr();

    document.write('<hr />');
    
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            document.write(arr[i][j] + ' ');
        }
        document.write('<br />')
    }
    document.write('<hr />');
}

Field.prototype.clearField = function(){
    var arr = this.getArr();

    // arr[this.obj.x][this.obj.y] = 0;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            arr[i][j] = 0;
        }
    }
    this.setArr(arr);
}

Field.prototype.changeSize = function(newWidth, newHight){
    arr = this.getArr();
    delete arr;

    var newArr = new Array (newWidth);

    for (var i = 0; i < newArr.length; i++){
        newArr[i] = new Array(newHight);
        for (var j = 0; j < newArr[i].length; j++){
            newArr[i][j] = 0;
        }       
    }
    this.setArr(newArr);
}

function Person (name, xPosition, yPosition){
    this.name = name;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.obj = {};
    this.startPosition = {xPosition, yPosition};
}

Person.prototype = new Field();

Person.prototype.start = function(){   
    var arr = this.getArr();

    this.obj = {x: this.xPosition, y: this.yPosition, name: this.name};
    // console.log(JSON.stringify(this.obj));
    arr[this.obj.x][this.obj.y] = this.obj.name;

    this.setArr(arr);
}

Person.prototype.go = function(direction, step){
    var arr = this.getArr();
    var temp = this.obj;
    var strategy = {
        top: function(){
            if ((temp.x - step) >= 0){
                arr[temp.x][temp.y] = 0;
                arr[temp.x-step][temp.y] = temp.name;
                temp.x = temp.x-step;
            } else {
                document.write('First element in row!' + '<br />');
            }
        },
        bottom: function(){
            if ((temp.x + step ) <= arr.length){
                arr[temp.x][temp.y] = 0;
                arr[temp.x + step][temp.y] = temp.name;
                temp.x = temp.x + step;
            } else {
                document.write('Last element in row!' + '<br />');
            }
        },
        right: function(){
            if ((temp.y + step) <= arr[0].length - 1){
                arr[temp.x][temp.y] = 0;
                arr[temp.x][temp.y + step] = temp.name;
                temp.y = temp.y + step;
            } else {
                document.write('Last element in column!' + '<br />');
            }
        },
        left: function(){
            if ((temp.y - step) >= 0){
                arr[temp.x][temp.y] = 0;
                arr[temp.x][temp.y - step] = temp.name;
                temp.y = temp.y - step;
            } else {
                document.write('First element in column!' + '<br />');
            }
        }
    }
    strategy[direction]();
    this.setArr(arr);
}

Person.prototype.resetPosition = function(){
    var arr = this.getArr();

    arr[this.obj.x][this.obj.y] = 0;
    arr[this.startPosition.xPosition][this.startPosition.yPosition] = this.name;

    this.setArr(arr);
}

var field = new Field(10, 10);
var person = new Person('H', 2, 4);
var person1 = new Person('L', 1, 1);

Object.assign(person, field);
Object.assign(person1, field);

field.renderField();
person.start();
person1.start();

field.renderField();
person.go('top', 1);
field.renderField();
person.go('left', 2);
field.renderField();
person.go('bottom', 4);
field.renderField();
person.go('right', 7);
person1.go('bottom', 8);
field.renderField();

document.write('reset1');
person.resetPosition();
field.renderField();

document.write('clear');
person.clearField();
field.renderField();

document.write('reset2');
person.resetPosition();
person1.resetPosition();
field.renderField();

person.changeSize(5, 5);
field.renderField();

person.start();
field.renderField();
person.go('bottom', 1);
field.renderField();
person.go('right', 1);
field.renderField();