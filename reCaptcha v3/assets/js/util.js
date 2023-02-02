// 유효성 검사
const inputs = document.querySelectorAll('input')
const koreanInput = document.querySelector('#korean');
const englishInput = document.querySelector('#english');
const birthInput = document.querySelector('#birth');
const emailInput = document.querySelector('#email');
const contactInput = document.querySelector('#contact');
const nationInput = document.querySelector('#nation');
const launchDateInput = document.querySelector('#launchDate');

const emailPattern = /[\w\d]+@[\w\d]+.[a-zA-z]+[.]+[a-zA-z]+/gm;
const contactPattern = /[\d]{3}[-][\d]{4}[-][\d]{4}/gm;

const createErrorMsg = (appendTag, newSpan, msg) => {
  newSpan.classList.add('errorMsg');  
  appendTag.appendChild(newSpan);
  newSpan.textContent = msg;
}

const checkValidation = () => {
  const valEmail = document.querySelector('.wrapInput.valEmail');
  const valContact = document.querySelector('.wrapInput.valContact');

  if((!emailPattern.test(emailInput.value) && emailInput != '') && valEmail.childElementCount == 1 ) {
    const errorSpan = document.createElement('span');
    createErrorMsg(valEmail, errorSpan, "올바른 이메일 형식이 아닙니다.");
  } else if((emailPattern.test(emailInput.value)|| emailInput.value == '') && valEmail.childElementCount == 2) {
    valEmail.lastElementChild.remove();
  }
  
  console.log("emailvalid 자식 수: ", valEmail.childElementCount)
  console.log("이메일 유효성 검사: ", emailPattern.test(emailInput.value))
  console.log("emailInput.value: ", emailInput.value)
  
  // if (!contactPattern.test(contactInput.value) && contactInput.value != '' && valContact.childElementCount == 1) {
  //   const errorSpan = document.createElement('span');
  //   createErrorMsg(valContact, errorSpan, "휴대폰 형식을 맞춰주세요"); 
  // }  
  
}

const setValueInput = () => {
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', (e) => {
      inputs[i].value = e.target.value;
      checkValidation();
    })
  }
}
setValueInput();

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

