let noticeData;
let MAX_DATA = 10;
const MAX_PAGE = 5;
const sanitizer = new Sanitizer()


const getDataList = async () => {
  try{
    const response = await (await fetch('../../src/data.json')).json();
    noticeData = response.chelseaPlayer;
    console.log(noticeData);

    if(noticeData.length != 0) {
      createListHTML(1);
      createPaginHTML(1);
      search();
    }
  } catch (err) {
    console.error(err)
  }
}
getDataList();

const createListHTML = (selectedPage) => {
  const tbody = document.querySelector('tbody');
  let dataStart = (selectedPage - 1) * MAX_DATA;
  let listHTML = '';

  for(let i = dataStart; i < dataStart + MAX_DATA; i++) {
    if (noticeData[i] == null) break;
    listHTML += `<tr id="list">`;
    listHTML += `<td>${noticeData[i].name}</td>`;
    listHTML += `<td>${noticeData[i].nation}</td>`;
    listHTML += `<td>${noticeData[i].position}</td>`;
    listHTML += `<td>${noticeData[i].score}</td>`;
    listHTML += `</tr>`;
  }

  // tbody.innerHTML = listHTML;
  tbody.setHTML(listHTML, sanitizer);
}

const createPaginHTML = (currentPage) => {
  if(noticeData.length <= MAX_DATA) return;

  let totalPage = Math.ceil(noticeData.length / MAX_DATA);
  let pageGroup = Math.ceil(currentPage / MAX_PAGE) // 1 (1-5), 2(6-10) ...
  let lastPage = pageGroup * MAX_PAGE;
  let firstPage = lastPage - (MAX_PAGE - 1) <= 0 ? 1 : lastPage - (MAX_PAGE - 1);
  let next = lastPage + 1;
  let prev = firstPage - 1;
  let navUl = document.querySelector('#navUl');
  let pagingHTML = '';

  if(lastPage > totalPage) lastPage = totalPage;
  
  if(prev > 0) {
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="first">first</a></li>`;
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="prev">prev</a></li>`;
  }

  for(let i = firstPage; i < lastPage + 1; i++) {
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id=${i}>${i}</a></li>`;
  }

  if(lastPage < totalPage) {
    pagingHTML += `<li onClick="alert()" class="page-item"><a class="page-link" href="#" id="next">next</a></li>`;
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="last">last</a></li>`;
  }

  const alert = () => {
    alert('hello world')
  }

  // navUl.innerHTML = pagingHTML;
  navUl.setHTML(pagingHTML, sanitizer)

  let pageLink = document.querySelectorAll('.page-link');
  for(let i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener('click', (e)=> {
      e.preventDefault();
      navUl.innerHTML = ``;

      let pageId = e.target.id; 
      let selectedPage = pageId; 
      
      if(pageId == "next") selectedPage = next;
      if(pageId == "prev") selectedPage = prev;
      if(pageId == "first") selectedPage = 1;
      if(pageId == "last") selectedPage = totalPage;
      
      createListHTML(selectedPage);
      createPaginHTML(selectedPage);
      search(selectedPage);
    })   
  }
}


const search = (selectedPage) => {
  const list = document.querySelectorAll('#list');
  const formControl = document.querySelector('.form-control');
  let inputValue ="";

  formControl.addEventListener('input', (e) => {
    inputValue = e.target.value.toUpperCase();
    
    for(let i = 0; i < list.length; i++) {
      if(list[i].innerText.toUpperCase().indexOf(inputValue) > -1) {
        list[i].style.display='';
      } else {
        list[i].style.display = "none";
      }  
    }
  })
}

