let klava1 = {
    name:"Клавіатура дротова Logitech G209 Prodigy USB",
    otziv:204,
    price:1399,
    acki:true,
    img: "z1-2 (1).jpg"
}
let klava2 ={ 
    name:"Cougar vantar",
    otziv:6,
    price:1286,
    acki:false,
    img:"z1.jpg"
}

let bal1 = 0;
let bal2 = 0;
if(klava1.price < klava2.price){
    ball = klava2.price - klava1.price;

}else{
bal2 = klava1.price - klava2.price;
}
bal1= bal1 +klava1.otziv*0.5;
bal2= bal2 +klava2.otziv*0.5;
let products = document.getElementById(`products`);
let info = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava1.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
       ${klava1.name}
    </div>
    
    <div class="reviews">
        ${klava1.otziv} відгутки
    </div>
    
    <div class="1399">
        ${klava1.price}&#8372;<br>${bal1}
    </div>
</div>
</div>`;
info += `<div class="card">
<div class="header">
    
</div>

<div class="card_image">
    <img src="${klava2.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
       ${klava2.name}
    </div>
    
    <div class="reviews">
        ${klava2.otziv} відгутки
    </div>
    
    <div class="1286">
        ${klava2.price}&#8372;<br>${bal2}
    </div>
</div>
</div>`


products.innerHTML = info;

