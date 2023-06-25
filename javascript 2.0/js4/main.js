const users = []

db.collection('usersNEW').get().then(res => {
    res.forEach(function(doc){
        let User = doc.data()
        User.id = doc.id
        users.push(User)
    })
})
console.log(users)

function drawUsers(){
    let tbody = document.getElementById(`tbody`)
    let tbody_vidro = '';
users.map(function(mama,index){
    tbody_vidro += `
            <tr id=${mama.id} >
                <th>${index+1}</th>
                <th>${mama.name}</th>
                <th>${mama.lastname}</th>
                <th>${mama.email}</th>
                <th>${mama.password}</th>
                <th><button class="edit"  >Редагувати</button></th>
                <th><button class="delete"onclick=deleteDoc("${mama.id}")>Виділити</button></th>
                <th></th>
            </tr>`
})


   tbody.innerHTML = tbody_vidro
}
drawUsers()
function deleteDoc(id){
    db.collection('usersNEW').doc(id).delete().then(function(){
      console.log('туда бота')   
      drawUsers()
    })
    
}