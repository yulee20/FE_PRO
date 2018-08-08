//Task1

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(key){
    // this => characters
    var newArr = [];
    for (var i = 0; i < this.length; i++){
        newArr.push(this[i][key]);        
    }
    return newArr;   
}
console.log(pluck.call(characters, 'name'));;

// Task2

var input = [1, 2, 3, 4, 5, 6];

function isEven(x){ 
    return x % 2 == 0; 
}

function filter(func){
    var newArr = [];
    // this => input
    for (var i = 0; i <= this.length; i++){
        if(func(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
console.log(filter.call(input, isEven)); // [2, 4, 6]

 //Task3

var obj = {
    id: 1234,
    name: 'name',
    address: 'address',
    status: 'status',
    gender: 'gender'
};

Object.prototype.countProperties = function(){
    var count = 0;
    // console.log(this);
    for (var key in this){
        if (this.hasOwnProperty(key)) 
            count++;
    } 
    // count = Object.keys(this).length;
    return count;
}
console.log(countProperties.call(obj));
console.log(countProperties.call(characters));