async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function importPage(target, url) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(url + '.html');
}

export {importPage, fetchHtmlAsText}