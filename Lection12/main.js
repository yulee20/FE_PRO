//Task1

function SuperArray (n, m, options){
    var arr = new Array(n);

    for (var i = 0; i < arr.length; i++){
        arr[i] = new Array(m);

        for (j = 0; j < arr[i].length; j++){
            arr[i][j] = Math.floor(Math.random() * (options.max - options.min + 1)) + options.min;
        }
    }
    
    this.obj = {};
    //this.arr = arr;
    this.getArr = function(){
        return arr;
    }

    this.setArr = function(value){
        arr = value;
    }
}

//Task2

SuperArray.prototype.render = function(separator){
    var arr = this.getArr();
    
    for (var i = 0; i < arr.length; i++){

        for(var j = 0; j < arr[i].length; j++){
            document.write(arr[i][j] + ' ');
        }
        document.write('<br />');
    }
    for (var i = 0; i < arr[0].length; i++){
        document.write(separator);
    }
    document.write('<br />');
}

//Task3

SuperArray.prototype.clear = function(direction, k){
    var arr = this.getArr();

    if(direction == 'row'){
        for (var i = 0; i < arr[k].length; i++){
            arr[k][i] = 0;
        }
    } 
    
    else{
        for (var i = 0; i < arr.length; i++){  
            for (var j = k; j < arr[i].length; j++){
                arr[i][k] = 0;
           }
        }
    }
    this.setArr(arr);
}

//Task4

SuperArray.prototype.setMarker = function(coordinate){
    var arr = this.getArr();

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if (i == coordinate.x && j == coordinate.y){
                this.obj = {x: i, y: j, value: arr[i][j]};
                arr[i][j] = '&';
            }
        }
    }
    console.log('Object: ', this.obj);
    this.setArr(arr);
}

//Task5

SuperArray.prototype.goTo = function(coordinate){
    var arr = this.getArr();

    if (this.obj.x && this.obj.y && this.obj.value){
        arr[this.obj.x][this.obj.y] = this.obj.value;
    }

    this.obj = {x: coordinate.x , y: coordinate.y, value: arr[coordinate.x][coordinate.y]};
    arr[coordinate.x][coordinate.y] = '&';
    
    console.log('Object: ', this.obj);
    
    this.setArr(arr);
}

//Task6

SuperArray.prototype.shift = function(direction){
    var arr = this.getArr();
    //console.log(this.obj);
    var temp = this.obj;   
    
    var strategy = {
        left: function(){
            if (temp.y != 0){
                arr[temp.x][temp.y] = temp.value;
                temp.value = arr[temp.x][temp.y-1];
                arr[temp.x][temp.y-1] = '&';
                temp.y = temp.y-1;
            } else {
                document.write('First element in row!' + '<br />');
            }
        },
        right: function(){
            if (temp.y != arr[0].length-1){
                arr[temp.x][temp.y] = temp.value;
                temp.value = arr[temp.x][temp.y+1];
                arr[temp.x][temp.y+1] = '&';
                temp.y = temp.y+1;
            } else {
                document.write('Last element in row!' + '<br />');
            }
        },
        top: function(){
            if (temp.x != 0){
                arr[temp.x][temp.y] = temp.value;
                temp.value = arr[temp.x-1][temp.y];
                arr[temp.x-1][temp.y] = '&';
                temp.x = temp.x-1;
            } else {
                document.write('First element in column!' + '<br />');
            }
        },
        bottom: function(){
            if (temp.x != arr.length-1){
                arr[temp.x][temp.y] = temp.value;
                temp.value = arr[temp.x+1][temp.y];
                arr[temp.x+1][temp.y] = '&';
                temp.x = temp.x+1;
            } else {
                document.write('Last element in column!' + '<br />');
            }
        }

    }
    strategy[direction]();
    this.setArr(arr);
}

var list = new SuperArray(5, 10, {min: 10, max: 55});

console.log(list.getArr());

list.render('_ ');
// list.clear('row', 2);
// list.render('* ');
// list.clear('column', 0);
// list.render('- ');

// list.setMarker({x: 1, y: 2});
// list.render('* ');

list.goTo({ x: 3, y: 4 });
list.render('-- ');
list.goTo({ x: 1, y: 1 });
list.render('** ');
list.goTo({ x: 2, y: 2 });
list.render('++ ');

// list.shift('left');
// list.render('-- ');
// list.shift('left');
// list.render('-- ');

// list.goTo({ x: 1, y: 7 });
// list.render('-- ');
// list.shift('top');
// list.shift('top');
// list.render('** ');

// list.goTo({ x: 3, y: 7 });
// list.render('-- ');
// list.shift('bottom');
// list.shift('bottom');
// list.render('++ ');

// list.goTo({ x: 0, y: 7 });
// list.shift('right');
// list.render('++ ');
// list.shift('right');
// list.render('++ ');