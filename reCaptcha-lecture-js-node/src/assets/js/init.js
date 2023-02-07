window.addEventListener('load', () => {
  "use strict";
  
  const form = document.querySelector('.contact');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let fields = document.querySelectorAll('.contact .form-control');
    let valid  = true;

    for(let i = 0; i < fields.length; i++) {
      fields[i].classList.remove('no-error');
      if(fields[i].value === '') {
        fields[i].classList.add('has-error');
        fields[i].nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        fields[i].classList.remove('has-error');
        fields[i].classList.add('no-error');
        fields[i].nextElementSibling.style.display = 'none';
      }
    }

    if(valid) {
      document.querySelector('.formFields').style.display = 'none';
      document.querySelector('#alert').innerText = 'proccessing your submission, please wait...';

      grecaptcha.ready(() => {
        grecaptcha
        .execute("6LeGTEYkAAAAAM2SkehKs4YSne_MdcH2lK7xCik0", 
        {action : "contact"})
        .then((token) => {
          let recaptchaResponse = document.getElementById('recaptchaResponse');
          recaptchaResponse.value = token;

          fetch("/send.php", {
            method : "POST",
            body : new FormData(form),
          })
          .then((response) => response.text())
          .then((response)=> {
            // const responseText = JSON.parse(response)
            console.log(response)
          })
        })
      })
    }

  })

})