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
            cntrlIsPressed = true;
            block.classList.toggle('changeSize');
        }
        if(cntrlIsPressed && event.ctrlKey){
            switch(event.keyCode){
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
                    console.log('test');
                    block.style.top = data.top + data.step + 'px';
                    data.top += data.step;
                }
                break;
            // case 17:
            //     block.classList.toggle('changeSize');
            //     break;
        }
    }

    function noAction(){
        cntrlIsPressed = false;
        // block.classList.toggle('changeSize');
    }

    document.addEventListener('keydown', action);
    document.addEventListener('keyup', noAction);
}