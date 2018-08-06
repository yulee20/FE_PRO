window.onload = function(){
    var block = document.createElement('DIV');
    block.classList.add('person');
    document.body.appendChild(block);
    
    var personCoords = block.getBoundingClientRect();
    // console.dir(personCoords);

    var data = {
        h: 70,
        step: 20,
        left: personCoords.left,
        top: personCoords.top,
        right: personCoords.righ,
        bottom: personCoords.bottom,
        width: personCoords.width,
        height: personCoords.height
    }
    // console.dir(data);
    
    var cntrlIsPressed = false;

    function action(event){
        // console.log(event.keyCode);
        if(event.ctrlKey){
            block.classList.toggle('changeSize');
            cntrlIsPressed = true;
        }

        if(cntrlIsPressed){
            switch(event.keyCode){
                case 39:
                    block.classList.remove('changeSize');
                    if (data.left + data.width + data.step <= window.innerWidth){
                        block.style.left = data.left + data.step + 'px';
                        data.left += data.step;
                    }  
                    break;
                case 37:
                    block.classList.remove('changeSize');
                    if (data.left - data.step >= 0){
                        block.style.left = data.left - data.step + 'px';
                        data.left -= data.step;
                    }   
                    break;
                case 38:
                case 40:
                case 32: 
                    block.classList.remove('changeSize');
                    return;
            }
        }

        switch (event.keyCode){
            case 32:
                if (data.top - data.h >= 0){
                    block.style.top = data.top - data.h + 'px';
                    data.top -= data.h;

                    setTimeout(function(){
                        block.style.top = data.top + data.h + 'px';
                        data.top += data.h;
                    },1000);
                }                
                break;
            case 39:
               if (data.left + data.width + data.step <= window.innerWidth){
                   block.style.left = data.left + data.step + 'px';
                   data.left += data.step;
               } 
                break;
            case 37:
                if (data.left - data.step >= 0){
                    block.style.left = data.left - data.step + 'px';
                    data.left -= data.step;
                }
                break;
            case 38:
                if (data.top - data.step >= 0){
                    block.style.top = data.top - data.step + 'px';
                    data.top -= data.step;
                }
                break;
            case 40:
                if (data.top + data.height + data.step <= window.innerHeight){
                    block.style.top = data.top + data.step + 'px';
                    data.top += data.step;
                }
                break;
        }
    }

    function noAction(){
        cntrlIsPressed = false;
    }

    document.addEventListener('keydown', action);
    document.addEventListener('keyup', noAction);
}