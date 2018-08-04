window.onload = function(){
    var block = document.querySelector('.block');
    var range = document.querySelector('#range');
    var number = document.querySelector('#number');
    var red = document.querySelector('.red');
    var green = document.querySelector('.green');
    var res = document.querySelector('.res');

    range.oninput = function (){
        number.value = range.value;
        green.style.height = range.value + 'px'; 
        red.style.bottom = range.value + 'px';
        
        calculate();
        showRes();
    }   

    number.oninput = function(){
        range.value = number.value;
        green.style.height = range.value + 'px'; 
        red.style.bottom = range.value + 'px';

        calculate();
        showRes();
    }

    function calculate(){
        if (range.value == 0){
            red.style.height = '0px';
        }
        if (range.value > 0 && range.value < 20){
            red.style.height = '2px';         
        }
        if (range.value >= 20 && range.value < 50){
            red.style.height = '4px';         
        }
        if (range.value >= 50 && range.value < 75){
            red.style.height = '6px';         
        }
        if (range.value >= 75 && range.value <= 100){
            red.style.height = '8px';         
        }
    }

    function showRes(){
        var result = parseInt(range.value) + parseInt(red.style.height);
        res.innerHTML = result;
    }

}