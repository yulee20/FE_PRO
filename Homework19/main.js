console.log('Homework19');

//creating
var xhr = new XMLHttpRequest();

//config
var url = '/registration';

xhr.open('GET', url, true);

xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    
    // formValidation();
}

//send
xhr.send();

function formValidation(){
    var name = document.forms["form"]["name"].value; 
    console.log(name);
    var age = document.forms["form"]["age"].value;
    console.log(age);
    
    if (name.length==0){
        alert('Input name');
        return false;
     }
     if (age.length==0){
        alert('Input age');
        return false;
     }
    
    document.forms["form"].submit();
}