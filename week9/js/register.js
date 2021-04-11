/*VARIABLES*/ 
var formRegisterName = document.getElementById('form-register-name');
var formRegisterEmail = document.getElementById('form-register-email');
var formRegisterFirstPassword = document.getElementById('form-register-first-password');
var formRegisterSecondPassword = document.getElementById('form-register-second-password');
/*error messages variables*/
var registerErrorName = document.getElementById('register-error-name');
var registerErrorEmail = document.getElementById('register-error-email');
var registerErrorFirstPassword = document.getElementById('register-error-first-password');
var registerErrorSecondPassword = document.getElementById('register-error-second-password');

/*fields and containers */
var errorLoginContainer = document.getElementById('error-log-container');
var formRegisterSubmitButton = document.getElementById('submit-button');
var formRegisterResetButton = document.getElementById('reset-fields-button');
var listOfErrors = document.getElementById('list-of-errors');

/*convert some collections to arrays */
var formCounter = Array.from(document.getElementsByTagName('form'));
var labelsCounter = Array.from(document.getElementsByTagName('label'));
var inputsCounter = Array.from(document.getElementsByTagName('input'));
var buttonsCounter = Array.from(document.getElementsByTagName('button'));



/*EVENT LISTENERS*/
formRegisterSubmitButton.addEventListener('click', submitRegisterForm);
formRegisterResetButton.addEventListener('click', resetRegisterForm);
/*ev listener for name field*/
formRegisterName.addEventListener('focus', hideRegisterNameError);
formRegisterName.addEventListener('blur', checkRegisterNameError);



/*FUNCTIONS*/
function createMenuItem(error) {
    let newListItem = document.createElement('li');
    newListItem.textContent = error;
    return newListItem;
}


/*toggle function error hide and shown*/
function hideRegisterNameError(e) {
    registerErrorName.className = 'hidden';
}
function checkRegisterNameError(e) {
    if ( formRegisterName.value.includes(' ') && formRegisterName.value.length >= 6) {
        registerErrorName.className = 'hidden';
    } else {
        registerErrorName.className = 'error-message-shown';
    }   
}

function submitRegisterForm(e) {    
    e.preventDefault();
    errorLoginContainer.classList.toggle('hidden');
    /*validation for elements*/
    if ( 
        formCounter.length === 1 && labelsCounter.length === 4 && inputsCounter.length === 4 
        && buttonsCounter.length === 2 
        && formRegisterName.value.length >= 6 && formRegisterName.value.includes(' ')
        && formRegisterEmail.value.length !==0
        && formRegisterEmail.value.includes('@') && formRegisterEmail.value.includes('.com') 
        && formRegisterFirstPassword.value.length !==0 
        && formRegisterSecondPassword.value.length !== 0 
        && formRegisterFirstPassword.value === formRegisterSecondPassword.value
        ) {
            listOfErrors.appendChild(createMenuItem('Every validation has passed')); 
        } else {            
            if (!formCounter) {
                listOfErrors.appendChild(createMenuItem('There is no form in the DOM')).
                classList.toggle('error-message'); 
            }
            if (labelsCounter.length === 0) {
                listOfErrors.appendChild(createMenuItem('There are no labels in the form')).
                classList.toggle('error-message'); 
            } else if (labelsCounter.length < 4) {
                listOfErrors.appendChild(createMenuItem('There are missing labels in the form')).
                classList.toggle('error-message'); 
            }  else if (labelsCounter.length >= 4) {
                listOfErrors.appendChild(createMenuItem('There are ' 
                + labelsCounter.length + ' labels in the form'));
            }
            if (inputsCounter.length === 0) {
                listOfErrors.appendChild(createMenuItem('There are no inputs in the form')).
                classList.toggle('error-message'); 
            } else if (inputsCounter.length < 4) {
                listOfErrors.appendChild(createMenuItem('There are missing inputs in the form')).
                classList.toggle('error-message'); 
            }  else if (inputsCounter.length >= 4) {
                listOfErrors.appendChild(createMenuItem('There are ' 
                + inputsCounter.length + ' inputs in the form'));
            }
            if (buttonsCounter.length === 0) {
                listOfErrors.appendChild(createMenuItem('There are no buttons in the form')).
                classList.toggle('error-message'); 
            } else if (buttonsCounter.length < 2) {
                listOfErrors.appendChild(createMenuItem('There are missing buttons in the form')).
                classList.toggle('error-message'); 
            }  else if (buttonsCounter.length >= 2) {
                listOfErrors.appendChild(createMenuItem('There are ' 
                + buttonsCounter.length + ' buttons in the form'));
            }
            if (formRegisterName.value.length < 6 || !formRegisterName.value.includes(' ')) {
                listOfErrors.appendChild(createMenuItem('The Name input does not have the correct format')).
                classList.toggle('error-message');
            } else {
                listOfErrors.appendChild(createMenuItem('The Name input has the correct format')); 
            }
            if (formRegisterEmail.value.length === 0) {
                listOfErrors.appendChild(createMenuItem('The e-mail field is empty')).
                classList.toggle('error-message');
            } else {
                listOfErrors.appendChild(createMenuItem('The e-mail field is not empty')); 
            }
            if (!formRegisterEmail.value.includes('@') || !formRegisterEmail.value.includes('.com')) {
                listOfErrors.appendChild(createMenuItem('The e-mail format is incorrect')).
                classList.toggle('error-message');
            }
            if (formRegisterFirstPassword.value.length === 0) {
                listOfErrors.appendChild(createMenuItem('The first password field is empty')).
                classList.toggle('error-message');
            } else {
                listOfErrors.appendChild(createMenuItem('The first password field is not empty')); 
            }
            if (formRegisterSecondPassword.value.length === 0) {
                listOfErrors.appendChild(createMenuItem('The second password field is empty')).
                classList.toggle('error-message');
            } else {
                listOfErrors.appendChild(createMenuItem('The second password field is not empty')); 
            }
            if (formRegisterFirstPassword.value === formRegisterSecondPassword.value) {
                listOfErrors.appendChild(createMenuItem('Passwords match'));                 
            } else {
                listOfErrors.appendChild(createMenuItem('Passwords do not match')).
                classList.toggle('error-message');
            }
        }
}
function resetRegisterForm(e) {
    formCounter.reset();
}








/*Comment for now*/
// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }