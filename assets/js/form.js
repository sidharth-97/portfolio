var nameError=document.getElementById('name');
var emailError=document.getElementById('email');
var subjectError=document.getElementById('subject');
var messageError=document.getElementById('message');
var submitError=document.getElementById('submit');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='Name required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Full name please';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}