'use strict';

const form = document.forms['contact-form'];

// Handle the submit event
form.addEventListener('submit', (event) => {
  // Reference to the form elements
  const name = form.getElementById['name'];
  const email = form.getElementById['email'];
  const veremail = form.getElementById['veremail'];
  const email_re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
  const phone = form.getElementById['phone'];
  const message = form.getElementById['message'];

  let isValid = true;
  let errorMessages = [];

  // Name checks
  if (name.value.trim().length < 3) {
    // Required
    console.error('Please enter a valid name');
    errorMessages.push('Please eneter a valid name');
    isValid = false;
  }

  // E-mail checks
  if (email.value.trim().length === 0) {
    // Required
    console.error('E-mail is missing');
    errorMessages.push('E-mail is missing');
    isValid = false;
  } else if (email_re.test(email.value)) {
    // Valid Value
    console.error('Please enter a valid email');
    errorMessages.push('Please enter a valid email');
    isValid = false;
  }

  //Verification email test
  if (email.test(veremail)) {
    // Valid Value
    console.error('Please enter a valid email');
    errorMessages.push('Please enter a valid email');
    isValid = false;
  }

  //Phone check
  if(isNaN(phone) || phone.value.trim().length != 10) {
    //Required
    console.error('Please Enter a valid phone');
    errorMessages.push('Please Enter a valid phone');
    isValid = false;
  }

  //Message check
  if(message.value.trim().length <= 20) {
    //Required
    console.error('Please Enter More Than 20 Characters');
    errorMessages.push('Please Enter More Than 20 Characters');
    isValid = false;
  }

  // Prevent submit, if any validation failed
  if (!isValid) event.preventDefault();
});
