// 유효성 검사
const inputs = document.querySelectorAll('input')
const koreanInput = document.querySelector('#korean');
const englishInput = document.querySelector('#english');
const birthInput = document.querySelector('#birth');
const emailInput = document.querySelector('#email');
const contactInput = document.querySelector('#contact');
const nationInput = document.querySelector('#nation');
const launchDateInput = document.querySelector('#launchDate');
const valEmail = document.querySelector('.valEmail');
const valContact = document.querySelector('.valContact');
const emailPattern = /[\w\d]+@[\w\d]+.[a-zA-z]+[.]+[a-zA-z]+/g;
const contactPattern = /[\d]{3}[\d]{4}[\d]{4}/gm;

const createErrorMsg = (appendTag, errorSpan, msg) => {
  errorSpan.classList.add('errorMsg');  
  appendTag.appendChild(errorSpan);
  errorSpan.textContent = msg;
}


const  checkEmailValidation = () => {
  if (!emailPattern.test(emailInput.value) && valEmail.childElementCount == 1 && !emailInput.value == '') {
    const errorSpan = document.createElement('span'); 
    createErrorMsg(valEmail, errorSpan, "올바른 이메일 형식이 아닙니다.")
  } else {
    if(valEmail.childElementCount == 2) {
      emailInput.nextElementSibling.remove();
    }
  }

}

const checkContactValidation = () => {
  if(contactInput.value != '') contactInput.value = contactInput.value.replace(/[-.*_,+" "$%^&!@()~]/g,"");

  if (!contactPattern.test(contactInput.value) && valContact.childElementCount == 1 && !contactInput.value == '') {
    const errorSpan = document.createElement('span'); 
    createErrorMsg(valContact, errorSpan, "올바른 연락처 형식이 아닙니다.");
  } else {
    if(valContact.childElementCount == 2) {
      contactInput.nextElementSibling.remove();
    }
  }
}


const setValue = () => {
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', (e) => {
      inputs[i].value = e.target.value;
      console.log(inputs[i], ":", inputs[i].value);

      if (inputs[i].id === 'email') checkEmailValidation();
      if (inputs[i].id === 'contact') checkContactValidation();
    })
  }
}
setValue()

// 버튼 클릭했을 때
const submitBtn = document.querySelector(".submitBtn");
const clickSubmitBtn =  () => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target);
    e.target.disabled = false;
  })
}

clickSubmitBtn();

