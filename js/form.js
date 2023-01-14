'use strict';

const button = document.getElementById('submit-button');
const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const mail = document.getElementById('mail');
// const phone = document.getElementById('phone');


form.addEventListener ('submit', (e) => {
    if (name.value.trim() === '' || mail.value.trim() ==='') {
        e.preventDefault();
    }
})

button.addEventListener('click', () => {
    if (name.value === 'admin' && mail.value === 'admin') {
      alert('Thank you!');
    } else {
      alert('Wrong name or mail!');
    }
  });