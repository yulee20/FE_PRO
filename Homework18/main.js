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
    var add = document.querySelectorAll('.add');
    var remove = document.querySelectorAll('.remove');
    
    var removeAll = document.querySelector('#removeAll');
    removeAll.addEventListener('click', remove_All);

    updateData();

    //add to cart
    for(var i = 0; i < add.length; i++){
        add[i].addEventListener('click', function(pos){
            data[pos].amount++;
            saveData(data); 
            cart.innerHTML = '';
            updateData(data);
        }.bind(null, i))
    }

    //remove from cart
    for(var i = 0; i < remove.length; i++){
        remove[i].addEventListener('click', function(pos){
            if (data[pos].amount != 0 ){
                data[pos].amount--;
                saveData(data);
                cart.innerHTML = '';
                updateData(data);
            } else {
                return;
            }
        }.bind(null, i))
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
    }
    
    function saveData(value){
        var newJSON = JSON.stringify(value); // to string
        localStorage.data = newJSON;
    }
}