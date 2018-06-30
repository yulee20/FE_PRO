//Task1

obj = {
    copy: function(buffer){
        var key = buffer;
        this[key] = '';
        return this;
    },
    remove: function(buffer){
        var key = buffer;
        delete this[key];
        return this;
    },
    clear: function(){
        this.result = 0;
        return this;
    },
    doFunction: function(func, a, b){
        this.result = func(a, b);
        return this;
    },
    result: 0
};

function sum (x, y){
    return x + y;
};

function mul (x, y){
    return x * y;
};

obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear();
obj.copy('name');
obj.remove('name');
obj.doFunction(sum, 5, 4).clear().copy('word');
obj.doFunction(mul, 5, 4).remove('word');

//Task2

function doConvertion(str){
    var arr = str.split('_');
    //console.log(arr);

    var res = arr[0];
    //console.log('res: ', res);

    var word = '';

    for (var i = 1; i < arr.length; i++){
        word = arr[i];
        res += word[0].toUpperCase() + word.slice(1);
    }
    return res; 
    //console.log(res);
}

// console.log('var_text_hello');
doConvertion('var_text_hello');
doConvertion('do_object_assign_function_array_arguments');

//Task3

function inArray(word, arr){
    var res = false;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i].indexOf(word) >= 0){
            res = true;
        }
    }
    return res;
}

inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']);