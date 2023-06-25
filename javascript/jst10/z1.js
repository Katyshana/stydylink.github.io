let imya =prompt(`Відіть Своє Імя`)
let gmail = prompt(`Відіть Свой емаіл`)
let username = document.getElementById(`username`)
username.innerHTML = `<a>${imya}</a>`;






let ZMINA = document.getElementById(`list`)
ZMINA.innerHTML = `<br><br><br><h2 align-center>Вітаю ${imya}! На Вашу Поштову  Скриньку ${gmail}
відправлено лист Із підверженя</h2>`;

