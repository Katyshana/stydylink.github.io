let user = {
name:"Перто",
lastname:"Іванов",
age: 14,
email:" petro007@gmail.com",
city:"hmelnitskyi"
}
let body = document.getElementById(`body`)
function snowUser(){
    body.innerHTML = `<thead>
    <tr>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.city}</td>
    </tr>
    <tbody id="body"
</thead>`;
}
{
    function changeName(x){
        user.name = x;
        showUser()
    }
}
function changeLastName(x){
    user.lastname = x;
    showUser()
}
function changeAge(x){
    user.age = x;
    showUser()
}
function changeEmail(x){
    user.Email = x;
    showUser()
}

function changeCity(x){
    user.city = x;
    showUser()
}