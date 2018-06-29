//Task1

//  var obj = {
//      x: 10,
//      y: 20,
//      inner: {
//         x: 20,
//         z: 30
//      },
//      foo2: {
//          k: 23,
//          p: 13
//      }
//  };

//  function convert(data){
//      var newData = {};

//     for (var key in data){
//         if (typeof data[key] === 'object'){
//             for (var innerKey in data[key]){
//                 newData[innerKey] = data[key][innerKey];
//             }
//             continue;
//         }
//         newData[key] = data[key];
//     } 
//     return newData;
//  };

//  console.log(convert(obj));

 //Task2

//  function map(fn, array){
//     var arrNew = [];

//     for (var i = 0; i < array.length; i++){
//         arrNew.push(fn(array[i])); 
//         //console.log(fn(array[i]));   
//     }
//     return arrNew;
//  }

//  function square(x){
//     return x * x;
//  }

//  console.log(map(square, [1, 2, 3, 4]));

//Task3

function assignObjects(){
    var newObj = {};
    for (var i = 0; i < arguments.length; i++){
        for (var key in arguments[i]){
            newObj[key] = arguments[i][key];
        } 
    }
    console.log(newObj);
    return newObj;
}

assignObjects({x: 10, y: 20}, {z: 30}); //{x: 10, y: 20, z: 30}
assignObjects({x: 10}, {x: 20, y: 30}); //{x: 20, y: 30}