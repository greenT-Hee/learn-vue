let noticeData;
const MAX_DATA = 10;
const MAX_Page= 5;

async function followListData() {
  try {
    const resJson = await (await fetch('./data.json')).json();
    noticeData = resJson.chelseaPlayer;
    console.log(noticeData);
    if(noticeData.length != 0) {
      createListHTML(1);
    }
    
  } catch (err) {
    console.error(err);
  }
}

followListData();


const createListHTML = (selectedPage) => {
  let dataStart = (selectedPage - 1) * MAX_DATA;
  const tbody = document.querySelector('tbody');
  
  let listHtml = '';
  for(let i = dataStart; i < dataStart + MAX_DATA; i++) {
    if(noticeData[i] === null) break;
    listHtml += `<tr>`;
    listHtml += `<td>${noticeData[i].name}</td>`;
    listHtml += `<td>${noticeData[i].nation}</td>`;
    listHtml += `<td>${noticeData[i].position}</td>`;
    listHtml += `<td>${noticeData[i].score}</td>`;
    listHtml += `</tr>`;

    tbody.innerHTML = listHtml;
  }  
}
