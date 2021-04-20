/*variables*/
var formLoginEmail = document.getElementById('form-login-email');
var formLoginPassword = document.getElementById('form-login-password');
var formLoginButton = document.getElementById('login-button');
var errorLoginContainer = document.getElementById('error-log-container');
var listOfErrors = document.getElementById('list-of-errors');
var listOfResults = document.getElementById('list-of-results');
var mainForm = document.getElementById('main-form');
var formLoginResetButton = document.getElementById('reset-login-button');
/*errors*/
var loginErrorEmail = document.getElementById('login-error-email');
var loginErrorPassword = document.getElementById('login-error-password');
/*counters*/
var formCounter = Array.from(document.getElementsByTagName('form'));
var labelsCounter = Array.from(document.getElementsByTagName('label'));
var inputsCounter = Array.from(document.getElementsByTagName('input'));
var buttonsCounter = Array.from(document.getElementsByTagName('button'));
/*validator for http request*/
var allValidationsComplete = false;
/*cleaner*/
var cleanFormLink = document.getElementById('clean-form-link');
/*Event listener*/
formLoginButton.addEventListener('click', submitLoginForm);
formLoginButton.addEventListener('click', handleLogin);
formLoginResetButton.addEventListener('click', resetLoginForm);
cleanFormLink.addEventListener('click', cleanFormFunction);
/*EL for email validation*/
formLoginEmail.addEventListener('focus', hideLoginEmailError);
formLoginEmail.addEventListener('blur', checkLoginEmail);
/*EL for pswrd validation*/
formLoginPassword.addEventListener('focus', hideLoginPasswordError);
formLoginPassword.addEventListener('blur', checkLoginPassword);
/*Functions*/
function createMenuItem(error){
    let newItem = document.createElement('li');
    newItem.textContent = error;
    return newItem;
}
function hideLoginEmailError(e) {
    loginErrorEmail.className = 'hidden';
}
function checkLoginEmail(e) {
    if ( formLoginEmail.value.includes('@') && formLoginEmail.value.includes('.com') ) {
        loginErrorEmail.className = 'hidden';
    } else {
        loginErrorEmail.className = 'error-message-shown';
    }   
}
function hideLoginPasswordError(e) {
    loginErrorPassword.className = 'hidden';
}
function checkLoginPassword(e) {
    if ( formLoginPassword.value.match(/^[0-9]+$/) 
        || formLoginPassword.value.match(/^[a-zA-Z]+$/) 
        || formLoginPassword.value.length < 8
        ) {
        loginErrorPassword.className = 'error-message-shown';
    }  else  {
        loginErrorPassword.className = 'hidden';
    }
}
function submitLoginForm(e) {
    /*validates that there is not a previous list of error*/
    if (listOfErrors.innerHTML.trim() === "") {        
        e.preventDefault();
        errorLoginContainer.classList.toggle('hidden');
        if (
            formCounter.length === 1 && labelsCounter.length === 2 && inputsCounter.length === 2 
            && buttonsCounter.length === 2 && formLoginEmail.value.length !==0
            && formLoginEmail.value.includes('@') && formLoginEmail.value.includes('.com')  
            && !formLoginPassword.value.match(/^[0-9]+$/) 
            && !formLoginPassword.value.match(/^[a-zA-Z]+$/)
            && formLoginPassword.value.length >= 8 
            ) {
                allValidationsComplete = true;
                listOfErrors.appendChild(createMenuItem('Every validation has passed'));
                listOfResults.appendChild(createMenuItem('The email is: '+formLoginEmail.value));
                listOfResults.appendChild(createMenuItem('Password is: '+formLoginPassword.value));                
                
            } else {
                if (formCounter.length === 0) {
                    listOfErrors.appendChild(createMenuItem('There is no form in the DOM')).
                    classList.toggle('error-message'); 
                } else {
                    listOfErrors.appendChild(createMenuItem('There is a form in the DOM'))
                }
                if (labelsCounter.length === 0) {
                    listOfErrors.appendChild(createMenuItem('There are no labels in the form')).
                    classList.toggle('error-message'); 
                } else if (labelsCounter.length < 2) {
                    listOfErrors.appendChild(createMenuItem('There are missing labels in the form')).
                    classList.toggle('error-message'); 
                }  else if (labelsCounter.length >= 2) {
                    listOfErrors.appendChild(createMenuItem('There are ' 
                    + labelsCounter.length + ' labels in the form'));
                }
                if (inputsCounter.length === 0) {
                    listOfErrors.appendChild(createMenuItem('There are no inputs in the form')).
                    classList.toggle('error-message'); 
                } else if (inputsCounter.length < 2) {
                    listOfErrors.appendChild(createMenuItem('There are missing inputs in the form')).
                    classList.toggle('error-message'); 
                }  else if (inputsCounter.length >= 2) {
                    listOfErrors.appendChild(createMenuItem('There are ' 
                    + inputsCounter.length + ' inputs in the form'));
                }
                if (buttonsCounter.length === 0) {
                    listOfErrors.appendChild(createMenuItem('There are no buttons in the form')).
                    classList.toggle('error-message'); 
                } else if (buttonsCounter.length < 2) {
                    listOfErrors.appendChild(createMenuItem('There are missing buttons in the form')).
                    classList.toggle('error-message');; 
                }  else if (buttonsCounter.length >= 2) {
                    listOfErrors.appendChild(createMenuItem('There are ' 
                    + buttonsCounter.length + ' buttons in the form'));
                }            
                if (
                    formLoginEmail.value.length === 0 
                    || !formLoginEmail.value.includes('@') 
                    || !formLoginEmail.value.includes('.com')
                ) {
                    listOfErrors.appendChild(createMenuItem('The e-mail format is incorrect')).
                    classList.toggle('error-message');
                    listOfResults.appendChild(createMenuItem('The email is: '+formLoginEmail.value)).
                    classList.toggle('error-message');
                } else {
                    listOfErrors.appendChild(createMenuItem('The e-mail format is correct'));
                    listOfResults.appendChild(createMenuItem('The email is: '+formLoginEmail.value));
                }
                if (
                    formLoginPassword.value.match(/^[0-9]+$/) 
                    || formLoginPassword.value.match(/^[a-zA-Z]+$/)
                    || formLoginPassword.value.length < 8
                ) {
                    listOfErrors.appendChild(createMenuItem('Password is invalid')).
                    classList.toggle('error-message');
                    listOfResults.appendChild(createMenuItem('Password is: '+formLoginPassword.value)).
                    classList.toggle('error-message');
                } else {
                    listOfErrors.appendChild(createMenuItem('Password has the correct format'));
                    listOfResults.appendChild(createMenuItem('Password is: '+formLoginPassword.value));
                }
            }    
    } else {
        alert('make sure you finish with the validations first')
        e.preventDefault();
    }
}
/*Form cleaner*/
function cleanFormFunction(e) {    
    listOfErrors.innerHTML = '';
    listOfResults.innerHTML = '';
    errorLoginContainer.classList.toggle('hidden');
}
function resetLoginForm(e) {
    mainForm.reset();
}
/*Handle*/
async function handleLogin(){
    const data = {
        email: formLoginEmail.value,
        password: formLoginPassword.value
        
    }
    fetch('http://localhost:4000/login',{
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then (a => console.log (a))
    .catch(err => console.log(err))
}