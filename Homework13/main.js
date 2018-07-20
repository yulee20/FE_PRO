window.onload = function(){
    var inputs = document.querySelectorAll('input');
    var textarea = document.querySelector('textarea');

    setInterval(function(){
        for(var i = 0; i < inputs.length; i++){
            textarea.value = textarea.value + inputs[i].value + ', ';
        }
    }, 5000);
}

