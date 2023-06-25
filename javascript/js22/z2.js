function card(){


    let number=document.getElementById('cards_num').value ;
    let cards=document.getElementById('cards');
    let korzina =``;
    for(i=0;i<number;i++){
        korzina+= `
        <div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card 1</h5>
		  </div>
		</div>
        `    
     cards.innerHTML = korzina;
    }
       
}
