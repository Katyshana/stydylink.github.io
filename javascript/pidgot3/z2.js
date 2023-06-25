function enter(){
 localStorage.getItem

let email = document.getElementById.value
let password = document.getElementById.value
let user = JSON.parse(localStorage.getItem("user"))




if(email == user.email.value && password == user.password.value ){
    document.getElementById("message").innerHTML=`
    <div class="alert alert-success col-6">Успіх</div>`
    user.loged = true;
    localStorage.setItem("user",JSON.stringify(user))
}else{
    document.getElementById("message").innerHTML=`
    <div class="alert alert-danger col-6">Помилка</div>`
}


}