//Task1

obj = {
    x: 20,
    y: 30,
    f1: renderObject
}

function renderObject (){ 
    console.log(arguments.callee); //console.log(arguments.callee === renderObject);
    for (var key in this){
        if(this[key] != renderObject){
            document.write(key + ': ' + this[key] + '<hr />');
        }
    }    
}

obj.f1();

//Task2

obj = {
    m1: m1,
    m2: m2,
    m3: m3
}

function m1(){
    console.log('m1');
    return this;
}

function m2(){
    console.log('m2');
    return this;
}

function m3(){
    console.log('m3');
    return this;
}

obj.m1().m2().m3();
obj.m2().m1().m3();
obj.m2().m1().m3().m1().m1();

//Task3

data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
}

function addRecord(){
    for(var i = 0; i < arguments.length; i++){
        for (var key in arguments[i]) {
            this[key] = arguments[i][key]; 
        }        
    }
    return this; //console.log(this);
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

//Task4

data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
}

function addRecord(){
    var flag = false;
    
    if (typeof arguments[arguments.length - 1] === 'boolean'){
        flag = arguments[arguments.length - 1];
    }
    
   
    for(var i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === 'boolean'){
            continue;
        }

        /* version1 */
        // for (var key in arguments[i]) {
        //     if (flag && this[key]){
        //         continue;
                
        //     } 
        //     this[key] = arguments[i][key]; 
        // }        

        /* version2 */
        var res = {};

        // var res = 
        //     flag ? 
        //     Object.assign({}, arguments[i], this)
        //     :
        //     Object.assign({}, this, arguments[i])

        if (flag){
            res = Object.assign({}, arguments[i], this);
        } else {
            res = Object.assign({}, this, arguments[i]);
        }
        Object.assign(this, res);
    }
    return this; //console.log(this); //this;

}
console.log('******************');
//data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, false);
data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);