let names = [`Артем`, `Марк`, `Влад`, `Макс`];
let table = document.getElementById(`table`); 


let data = `<tr>
<th>№</th>
<th>Користувач</th>
<th>Відправтити листа</th>
</tr>`;
data += `<tr>
<td>1</td>
<td>${names[0]}</td>           
<td><input type="checkbox"></td>
</tr>`;



table.innerHTML = data;
