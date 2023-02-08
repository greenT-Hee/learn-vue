const dropdownItem = document.querySelectorAll('.dropdown-item');

for(let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener('click', (e)=> {
    e.preventDefault();
    dropdownItem[i].value = e.target.textContent;
  })
}

