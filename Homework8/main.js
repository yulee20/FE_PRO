//Task1

function inArray(text, obj){
    var flag = 0;
    for (var key in obj){
        if (obj[key] === text){
            flag = 1;
        }
    }
    if(flag) return true;
    else return false;
}

console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));
console.log(inArray('hello', ['svnj', 'h22ello', 'cvpoq']));
console.log(inArray('sun', ['sun', 'h22ello', 'ssdfsun']));
console.log(inArray('sun', ['svnj', 'h22ello', 'cvpoq']));

//Task2
var data = {
    assignObjects: assignObjects
};

function assignObjects(){
    var flag = false;

    if (typeof arguments[arguments.length - 1] === 'boolean'){
        flag = arguments[arguments.length - 1];
    }

    for (var i = 0; i < arguments.length; i++){
        for (var key in arguments[i]){
            if (flag && this[key]){
                continue;
            } 
            this[key] = arguments[i][key]; 
        } 
    }
    return this;
}

//data.assignObjects({x: 10, y: 20}, {y: 40, z: 30}, false); //{x: 10, y: 40, z: 30}
data.assignObjects({x: 10}, {x: 20, y: 30}, true); //{x: 10, y: 30}

//Task3
var data1 = {
    assignObjects1: assignObjects1
};

function assignObjects1(){
    var flag;
    if (typeof arguments[arguments.length - 1] != 'boolean') flag = false;
    else flag = arguments[arguments.length - 1];

    for (var i = 0; i < arguments.length; i++){
        for (var key in arguments[i]){
            if (flag && this[key]){
                continue;
            } 
            this[key] = arguments[i][key]; 
        } 
    }
    return this;
}

data1.assignObjects1({x: 10, y: 20}, {y: 40, z: 30}); //{x: 10, y: 40, z: 30}
//data.assignObjects1({x: 10}, {x: 20, y: 30}, true); //{x: 10, y: 30}