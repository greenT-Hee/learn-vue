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
      const alert = document.querySelector('#alert')
      alert.innerHTML = `<img src="./assets/img/loading.gif" alt="로딩 중">`

      grecaptcha.ready(() => {
        grecaptcha
        .execute("6LeGTEYkAAAAAM2SkehKs4YSne_MdcH2lK7xCik0", 
        {action : "contact"})
        .then((token) => {
          let recaptchaResponse = document.getElementById('recaptchaResponse');
          recaptchaResponse.value = token;
          let captcha = recaptchaResponse.value;

          const fname = document.querySelector('#fname');
          const lname = document.querySelector('#lname');
          const email = document.querySelector('#email');
          const message = document.querySelector('#message');

          fetch("/subscribe", {
            method : "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            
            body : JSON.stringify(
              {
                fname: fname.value,
                lname: lname.value,
                email: email.value,
                message: message.value,
                recaptchaResponse : captcha, 
                captcha: captcha
              }
            )
          })
          .then((response) => response.json())
          .then((data)=> {
            console.log("✉️msg:", data.msg, "/🐰success:", data.success, "/🔢score:",data.score)
            const grecaptchaBadge = document.querySelector('.grecaptcha-badge');

            if(data.success) {
              grecaptchaBadge.style.display= "none";
              alert.innerText = "룰루 멤버십 서비스 가입을 축하드립니다🎉, 3초 뒤 페이지 이동";

              setTimeout(() => {
                window.location.href = "./page/welcome.html"
              }, 3000)
            }

            if(!data.success) {
              grecaptchaBadge.style.display= "none";
              alert.innerText = "당신은 로봇입니다. 🤖 3초 뒤 홈으로 이동";
              
              setTimeout(() => {
                window.location.reload();
              }, 3000)
            }

          })
        })
      })
    }

  })

})