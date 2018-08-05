window.onload = function() {

    var menu = document.querySelector('.menu');
    var submenu = menu.querySelector('.submenu');
    
    submenu.onclick = function(){
      submenu.classList.toggle('open');
    }
}