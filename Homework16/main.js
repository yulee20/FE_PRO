window.onload = function(){

    list = [
        {
            title: 'Jump',
            action: 'jump'
        },
        {
            title: 'Remove',
            action: 'remove'
        },
        {
            title: 'ChangeColor',
            action: 'changeColor'
        }
    ];

    list.actions = {
        jump: jumpAction,
        remove: removeAction,
        changeColor: changeColorAction
    }

    var block = document.createElement('DIV');
    block.classList.add('person');
    document.body.appendChild(block);
    
    var personCoords = block.getBoundingClientRect();
this.console.log(personCoords);
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
                    jump(block); 
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

    function jump(element){
        if (data.top - data.h >= 0){
            element.style.top = data.top - data.h + 'px';
            data.top -= data.h;

            setTimeout(function(){
                element.style.top = data.top + data.h + 'px';
                data.top += data.h;
            },1000);
        }           
    }

    function noAction(){
        cntrlIsPressed = false;
    }

    document.addEventListener('keydown', action);
    document.addEventListener('keyup', noAction);

//contextMenu

    var menuFirst = createMenu(document.body, list);

    document
        .addEventListener('contextmenu', onContext)

    document
        .addEventListener('click', function(e){
            hideMenu(menuFirst);
            document.addEventListener('contextmenu', onContext);
            document.removeEventListener('contextmenu', preventDefault);
        })


    function onContext(e){
        e.preventDefault();

        document.removeEventListener('contextmenu', onContext);
        document.addEventListener('contextmenu', preventDefault);

        menuFirst.style.left = e.offsetX + "px";
        menuFirst.style.top = e.offsetY + "px";
        showMenu(menuFirst, e.clientX, e.clientY);
    }

    function preventDefault(ev) {
        ev.preventDefault();
    }

    function showMenu(target, clientX, clientY) {
        target.classList.add('show');

        if(clientX + target.offsetWidth > window.innerWidth){
            target.style.left = clientX - target.offsetWidth + 'px';
        } else{
            target.style.left = clientX + 'px';
        }

        if(clientY + target.offsetHeight > window.innerHeight){
            target.style.top = clientY - target.offsetHeight + 'px';
        } else{
            target.style.top = clientY + 'px';
        }
    }

    function hideMenu(target) {
        target.classList.remove('show');
    }

    function createMenu(target, list){
        if (!target || !list) {
            return;
        }

        menu = document.querySelector('.menu.pattern').cloneNode();
        menu.classList.remove('pattern');

        for(var i = 0; i < list.length; i++){
            item = document
                .querySelector('.menu__item.pattern')
                .cloneNode(true);
            item.classList.remove('pattern');

            item
                .querySelector('.menu__title')
                .innerHTML = list[i].title;

            item.addEventListener('click', list.actions[list[i].action]);

            menu.appendChild(item);
        }
        target.appendChild(menu);

        return menu;
    }

    function jumpAction(){
        jump(block);
    }

    function removeAction(){
        block.classList.toggle('hide');
    }

    function changeColorAction(){
        block.style.backgroundColor = setColor();
    }

    function setColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}