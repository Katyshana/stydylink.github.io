document.addEventListener(`DOMContentLoaded`, async function(){
    let cardPhone = await axios.get("templetes/cardPhone.html");
   console.log(cardPhone.data)
    
    
    
    
   
    
    
    


 const ifal = {
        test: `proverka`,
        tovari:[
            
        ]

    }
    

    const cardProduct = {
        props:[`product`],
        template:cardPhone.data

    };
     
    const dodatok = {
        data(){
            return ifal
        },
        methods:{
            getTovari(){
                db.collection('tovari').get().then(res => {
                    res.forEach(docum => {
                     let phone = docum.data();
                     phone.id = docum.id;
                     this.tovari.push(phone)
         
                    }) 
                 })
             
         
            }
        },
        componets:{
            'cp': cardProduct
        },
        mounted(){
            this.getTovari()
        }
    }
    Vue.createApp(dodatok).mount(`#product`)















































}) 