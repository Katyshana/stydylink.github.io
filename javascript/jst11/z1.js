let month = document.getElementById(`month`);
let month1 = prompt('Який місяць показати?');
let day = ``;
let zag = document.getElementById(`zag`);
zag.innerHTML =`Календарь місяця ${month1}`

let x = 0;
if(month1 == 'Січень' || month1 == 'Березень' || month1 == 'Травень'|| month1 =='Липень' || month1 == 'серпень' || month1 == 'Жовтень' || month1 == 'Грудень' ){
    x = 32;
}else if(month1 == 'Лютий'){
x = 29;
}else if(month1 ==  'Квітень' || month1 == 'Червень '|| month1 == 'Вересень '|| month1 == 'Листопад'){
x = 31;    
}else {} 

















for(i=1; i<x; i++){

if(i % 7 == 0 || (i+1) % 7 == 0){  
day += `<div class="day vihidni">${i} <br>${month1}</div>`;
}else{
    day += `<div class="day">${i} <br>${month1}</div>`;

}
}

month.innerHTML = day;
