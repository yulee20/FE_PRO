window.onload = function(){

    var data = [
        {
            "id": "id1",
            "title": "Product1",
            "amount": 0
        },
        {
            "id": "id2",
            "title": "Product2",
            "amount": 0
        },
        {
            "id": "id3",
            "title": "Product3",
            "amount": 0
        },
        {
            "id": "id4",
            "title": "Product4",
            "amount": 0
        },
        {
            "id": "id5",
            "title": "Product5",
            "amount": 0
        }
    ]
    
    var cart = document.querySelector('.cart');
    var products = document.querySelectorAll('.products');
    var add = document.querySelectorAll('.add');
    var remove = document.querySelectorAll('.remove');
    var product1 = document.querySelector('#product1');
    var add1 = document.querySelector('#add1');
    var remove1 = document.querySelector('#remove1');
    
    var removeAll = document.querySelector('#removeAll');
    removeAll.addEventListener('click', remove_All);

    updateData();

    for(var i = 0; i < add.length; i++){
        add[i].addEventListener('click', function(){
            // console.log(this);
            // console.log(data);
            
            data[i].amount++;
            cart.innerHTML = data[i].title + ': ' + data[i].amount; 
            saveData(data); 
        })
        
    }

    for(var i = 0; i < remove.length; i++){
        remove[i].addEventListener('click', function(){
            
            // saveData(data);
        })
    }

    function remove_All(){
        cart.innerHTML = '';
        localStorage.clear();
    }
    
    function updateData(){
        if(localStorage.data){
            var newData = JSON.parse(localStorage.data); // parse it
            for(var i = 0; i < newData.length; i++){
                if(newData[i].amount != 0)
                    cart.innerHTML += newData[i].title + ': ' + newData[i].amount + '<br/>';
            }
        }
        // return newData;
    }
    
    function saveData(value){
        var newJSON = JSON.stringify(value); // to string
        localStorage.data = newJSON;
    }
}