/*variables*/
var formLoginEmail = document.getElementById('form-login-email');
var formLoginPassword = document.getElementById('form-login-password');
var errorLoginContainer = document.getElementById('error-login');
var formLoginButton = document.getElementById('login-button');
var listOfErrors = document.getElementById('list-of-errors');
var labelsCcounter = document.getElementsByTagName('label');
var inputsCounter = document.getElementsByTagName('inputs');
var buttonsCounter = document.getElementsByTagName('buttons');
var formCounter = document.getElementsByTagName('form');
/*event listener*/
formLoginButton.addEventListener('click', sumitLoginForm);
/*Functions*/
function createMenuItem(error;){
    let newItem = document.createElement('li');
    newItem.textContent = error;
    return newItem;
}
function submitLoginForm(e) {
    e.preventDefault();
    errorLoginContainer.classList.toggle('hidden');
}
/*Validation*/
if(
    formCounter && labelsCcounter.length === 2 && inputsCounter.length === 2
    && buttonsCounter.length === 2 && formLoginEmail.nodeValue.length !== 0
    && formLoginPassword.nodeValue.length !== 0
){
    listOfErrors.appendChild(createMenuItem('All is correct'));
}
else{
    if (!formCounter) {
        listOfErrors.appendChild(createMenuItem('There is no form in the DOM'));
        classList.toggle('error-message');
    }
    if (labelsCcounter.length === 0) {
        listOfErrors.appendChild(createMenuItem('There are no labels in the form'));
        classList.toggle('error-message');
    }
    else if (labelsCcounter.length === 0){
        listOfErrors.appendChild(createMenuItem('There is no missing label in the form'));
        classList.toggle('error-message');
        }
    } else if (buttonsCounter.length < 2) {
        listOfErrors.appendChild(createMenuItem('There are missing buttons in the form')).
        classList.toggle('error-message');; 
    }  else if (buttonsCounter.length >= 2) {
        listOfErrors.appendChild(createMenuItem('There are ' 
        + buttonsCounter.length + ' buttons in the form'));
    }
    if (formLoginEmail.value.length === 0) {              
        listOfErrors.appendChild(createMenuItem('The e-mail field is empty')).
        classList.toggle('error-message');        
    } else {
        listOfErrors.appendChild(createMenuItem('The e-mail field is not empty'));                
    }
    if (!formLoginEmail.value.includes('@') || !formLoginEmail.value.includes('.com')) {
        listOfErrors.appendChild(createMenuItem('The e-mail format is incorrect')).
        classList.toggle('error-message');
    }
    if (formLoginPassword.value.length === 0) {
        listOfErrors.appendChild(createMenuItem('Password is invalid')).
        classList.toggle('error-message');
    } else {
        listOfErrors.appendChild(createMenuItem('Password is not empty'));
    }
    }
}