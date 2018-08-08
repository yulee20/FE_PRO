window.onload = function(){

    var buttons = document.querySelectorAll('.button');
    var counters = document.querySelectorAll('.counter');
    var counter1 = document.querySelector('#counter1');
    var counter2 = document.querySelector('#counter2');
    var clearCounter = document.querySelector('#clearCounter');
    var setCounter = document.querySelector('#setCounter');
    var result = document.querySelector('#result');

    updateValues();

    for(var i = 0; i < counters.length; i++){
        var color = setColor();
        var id = counters[i].id;
        localStorage["color_id_"+id] = color;
        counters[i].style.backgroundColor = color;
    }

    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            var id = this.id;
            if(localStorage["block_id_"+id]){
                localStorage["block_id_"+id]++;
            }
            else{
                localStorage["block_id_"+id] = 0;
            }
            updateValues();
        })
    }

    clearCounter.addEventListener("click", clearCounters);

    setCounter.addEventListener("click", setCounters);
    
    // console.log(localStorage);

    function setColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setCounters(){
        id = prompt('Set id: ');       
        if (id == 1 || id == 2){
            value = +prompt('Set value: ');
            localStorage["block_id_button"+id]= value;
            var counter = "counter"+id;
            counter.value = value;
            updateValues();
        }
        else{
            alert('Wrong number');
        }
    }
    
    function clearCounters(){
        // localStorage.clear();
        for (var key in localStorage){
            localStorage[key] = 0;
        }
        counter1.value = "";
        counter2.value = "";
        result.innerHTML = "";
    }

    function updateValues(){
        var sum = 0;
        counter1.value = localStorage.block_id_button1;
        counter2.value = localStorage.block_id_button2;
        for (var i = 0; i < localStorage.length; i++){
            var item = parseInt(localStorage.getItem(localStorage.key(i)));
            if (isNaN(item)){
                continue;
            }
            else{
                sum += item;
            }
        }
        result.innerHTML = '<br/>Result: ' + sum;
    }
}