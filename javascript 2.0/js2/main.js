const firebaseConfig = {
    apiKey: "AIzaSyBx1CTo-Cjla5mVJ599lzN8gveBrcrl9Os",
    authDomain: "black-kirill.firebaseapp.com",
    projectId: "black-kirill",
    storageBucket: "black-kirill.appspot.com",
    messagingSenderId: "1004907917915",
    appId: "1:1004907917915:web:d0b4c768c523c0a649457e"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

let spiner = document.getElementById(`spiner`)
let list = document.getElementById(`list`)
let statti = [];

db.collection('articles').get().then(function(res){
    res.forEach(function(title){
        statti.push(title.data())
        spiner.innerHTML = '';
        drawArticle(title.data())
    })
})

console.log(statti)

function drawArticle(data){
    let article = document.createElement(`article`)

    let title = document.createElement(`h2`)
    let text = document.createElement(`div`)
    let avtor = document.createElement(`a`)

    title.innerHTML = data.title;
    text.innerHTML = data.article;

    avtor.innerHTML = `оригинальна статья`
    avtor.href = data.author
    
    article.appendChild(title)
    article.appendChild(text)
    article.appendChild(avtor)

    list.appendChild(article)
    

}