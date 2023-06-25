let user={
    name:`петро`,
    lastname:`Бочка`,
    Age:`0.10`,
    Email:`petyha331@gmail.com`,
    misto:`Хмельницький`
}

console.log(user);

function showuser(){
 document.getElementById(`table`).innerHTML = `<table>
 <tr>
     <th>Ім'я</th>
     <th>Призвічще</th>
     <th>вік</th>
     <th>емейл</th>
     <th>Місто</th>
    </tr>
 <tr>
     <td>${user.name}</td>
     <td>${user.lastname}</td>
     <td>${user.Age}</td>
     <td>${user.Email}</td>
     <td>${user.misto}</td>
 </tr>
 
 </table>`;

}
;
 function changename(name){
    user.name= name;
    showuser()
 }
;
 function changeage(name){
    user.Age= name;
    showuser()
 }
;
 function changelastname(name){
    user.lastname= name;
    showuser()
    
 }
 function changeCity(name){
    user.misto= name;
    showuser()
 }
 function changeEmail(name){
    user.Email = name;
    showuser()
    
 }

 
 function changeuserDate(name,age,last,city,ema){
    user.name=name;
    user.Age=age;
    user.lastname=last;
    user.misto=city;
    user.Email=ema;

    showuser()

 console.log()
 }
 function deluser(){
   document.getElementById(`table`).innerHTML =``;
 }
