window.onload = function(){
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
    }   

    number.oninput = function(){
        range.value = number.value;
        green.style.height = range.value + 'px'; 
        red.style.bottom = range.value + 'px';

        calculate();
    }

    function calculate(){
        var rangeValue = [20, 50, 75, 100];
        var commValue = [2, 4, 6, 8];

        for (var i = 0; i < rangeValue.length; i++){
            if (range.value <= rangeValue[i]){
                var commNum = range.value * commValue[i] / 100;
                red.style.height = commNum + 'px';
            }
        }
        res.innerHTML = parseInt(range.value) + commNum;
    }
}