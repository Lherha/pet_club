/* Form Validation */



const form = document.getElementById('myForm');
const name = document.getElementById('nameBox');
const email = document.getElementById('eMailBox');
const phone = document.getElementById('phoneBox');
const letter = document.getElementById('textBox');

//error function
function showError(name, message) {
  const formControl = name.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success
function showSuccess(name){
formControl = name.parentElement;
formControl.className = 'form-control success';
}


//event listeners
form.addEventListener('submit', function(e){
  e.preventDefault();

  if (nameBox.value === ''){
    showError(nameBox, 'Name is required');
  }else{
    showSuccess(nameBox);
  }

  if (eMailBox.value === ''){
    showError(eMailBox, 'Email is required');
  }else{
    showSuccess(eMailBox);
  }
  
  if (phoneBox.value === ''){
    showError(phoneBox, 'Phone is required');
  }else{
    showSuccess(phoneBox);
  }

  if (textBox.value === ''){
    showError(textBox, 'Leave a note here');
  }else{
    showSuccess(textBox);
  }
})