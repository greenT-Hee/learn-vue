let noticeData;
const MAX_DATA = 10;
const MAX_PAGE= 5;

async function followListData() {
  try {
    const resJson = await (await fetch('./src/data.json')).json();
    noticeData = resJson.chelseaPlayer;
    console.log(noticeData);
    if(noticeData.length != 0) {
      createListHTML(1);
      createPagingHTML(1);
    }
    
  } catch (err) {
    console.error(err);
  }
}

followListData();


const createListHTML = (selectedPage) => {
  const tbody = document.querySelector('tbody');
  let dataStart = (selectedPage - 1) * MAX_DATA;
  let listHtml = '';
  
  for(let i = dataStart; i < dataStart + MAX_DATA; i++) {
    if(noticeData[i] == null) break;
    listHtml += `<tr>`;
    listHtml += `<td>${noticeData[i].name}</td>`;
    listHtml += `<td>${noticeData[i].nation}</td>`;
    listHtml += `<td>${noticeData[i].position}</td>`;
    listHtml += `<td>${noticeData[i].score}</td>`;
    listHtml += `</tr>`;

    tbody.innerHTML = listHtml;
  }  
}

const createPagingHTML = (currentPage) => {
  if(noticeData.length <= MAX_DATA) return;

  let totalPage = Math.ceil(noticeData.length / MAX_DATA); // 전체 숫자
  let pageGroup = Math.ceil(currentPage/ MAX_PAGE); // 1(1-5), 2(6-10), 3(11-15)
  let lastPage = pageGroup * MAX_PAGE; // 한 페이지 내의 마지막 번호 
  let firstPage = lastPage - (MAX_PAGE - 1) <= 0 ? 1 : lastPage - (MAX_PAGE - 1); 
  let next = lastPage + 1;
  let prev = firstPage - 1;
  let navUl = document.querySelector('#navUl');  
  let pagingHTML = '';

  if(lastPage > totalPage) lastPage = totalPage;

  if(prev > 0) {
    // 첫 번째 페이지가 아닐 때
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="first">First</a></li>`;
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="prev">Previous</a></li>`;
  }
  
  for(let i = firstPage; i < lastPage + 1; i++) {
    // 숫자 버튼들 (5개씩)
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id=${i}>${i}</a></li>`;
  }
  
  if (lastPage < totalPage) {
    // 한 그룹의 마지막 번호가 totalPage까지 아닐 때 (마지막 페이지가 아닐 때)
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="next">Next</a></li>`
    pagingHTML += `<li class="page-item"><a class="page-link" href="#" id="last">Last</a></li>`
  }

  navUl.innerHTML = pagingHTML;

  let pageLink = document.querySelectorAll('.page-link');
  for(let i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener('click', (e) => {
      e.preventDefault();
      navUl.innerHTML = '';
      let pagingId = e.target.id; 
      let selectedPage = pagingId;
      if(pagingId == "next") selectedPage = next;
      if(pagingId == "prev") selectedPage = prev;
      if(pagingId == "first") selectedPage = 1;
      if(pagingId == "last") selectedPage = totalPage;
      
      createListHTML(selectedPage);
      createPagingHTML(selectedPage);      
    })
  }
}

