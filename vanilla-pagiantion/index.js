let noticeData;
const MAX_DATA = 10;
const MAX_Page= 5;

async function followListData() {
  try {
    const res = await fetch('./data.json');
    const resJson = await res.json();
    console.log(resJson);
    
  } catch (err) {
    console.error(err);
  }
}

followListData();