const data = {
    test: `павпщлркщзгогкщз`,
    socials:[
        {
            name:'Google',
            image:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'},
             
            { name:'Youtube',
            image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/AAD/////u7v/6+v/0ND/aWn/mZn/zc3/9fX/h4f/5ub/+Pj/tbX/t7f/oKD/ODj/Kir/3d3/wMD/MzP/UVH/1dX/yMj/qan/lJT/TU3/gID/Fxf/PT3/eHj/Dg7/jY3/ZWX/Q0P/XV3/IiL/cXH/q6v/X1//eXnZjuaVAAAE20lEQVR4nO2d63aiQAyAOyKgXAVF0Lbrtbvv/4YLZ9didUDQQEjI9689RyffwcCQub0p7rxhB9A5YkgfMaSPGNJHDOkjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxi+jHEhml4Tff+/6wBeMXTdWU6SrD0/DQIry3Z709yEYbh4e45F/tmNae53WWYFQep76yQpmnDd3gxdw4mi2LPm27O5OZzenzRpy/vpsDHP27nlxVHkGO18Gxo6dmx9HjfLvpzqeF9ujp9WbDtQhnZqPvur65qFmdovGjrBCtviIaug/mLWGdp77Ogbsq+7ktWG0fAvX8kqam+4xQ66JduWhk6IHXFrwop01BuuscN9inVzQw871ifxmhr62JE+jd/MMMGO8wWSJoYudpQvcd9nvTc8Ygf5EsfHhlTvMhfu7ja3hu4JO8QXOd3+Tm8NA+wIXyZ4YIgdHwD1htSzsMCrNTxghwfAoc7QwI4OBKPGcIIdHAiTGsMzdnAgnGsMP7CDA+Gj2tDBjg0Ip9LQxg4NCLvS0MIODQir0vATOzQgPisNedxobm4114Yz7MjAmFUY8ujRFBgVhjRriDrWFYYpdmBgpBWGXB4WPx8X14Y8eqUF5wrDJXZgYCwrDLHjAmSshnwehz8eiFeGlMcrbkm0hjF0M4hTOGKtIfig2iRGm37jaw3Ba6UTpTLo72yIpzWcQzdT1LwMnG7EXGtoQjfzr6qXbKC/twGm1hB84PBSt4x/QX/zQ45aQ/A3/LIy23uf/kNrCH5zv6o9Gz2XgBa9GyoV9ZqOWsMZeLb8HD9QcY/Dy79mGIZ9pqPWMAJv5s5QGb3NB4yQDPub06kznIK3ojPM07GXDvkU0VCpoIcegM4QfuCpylDNwLvAd5TDTyiGSjldp6POEL7iXWOYN9dtZa+sepeGX+Ct1BoqlXaZjl8aQ/ia/gPDTtOxrOtjGubp2NlUT53hDryVx4Z5OnY0KrvTGML/ZJoY5vnfSTqWZQx8w27ScVCGeTr+Bm9bZwjf7W9smKcj9KTIcpFQaQheamtjqJQHm45lsW0whsBpMkhDZezh2h6mYf4GB5aOQzVUygcazBmuoVIwd5zhGnK/htzzkP29lPvzsIc+Da9+6R+NIf93C3k/bM/Q3vH512n419r410v517z5j1vwH3viP37IfwyY/zg+/7kY/OfT8J8TxX9eG/+5iSOYX8p/jjD/ed785+rzX2/Bf80M/3VP/Neu8V9/yH8NKf91wCMw5L8en/+eCvz3xeC/twn//Wn4PBCr9hjiv08U/72+RrBfG5fHRfWee/z3TeS/9yWTW03N/qVMeqZ1e9Dy30eYR6+mbi9o/vt5s9iT3a815FDJuDW6+Zv/2Qj8z7cgn4kPzygZwTkzIzgriPT4RaPznij33XSzsHSGZO82jc9do1pXbHF23gjOP1T8z7BUIziHVPE/S7aA+3nA/68k6zOdy4vJ+Vzuaxifra73dYvD65Nk7flpEFhZttub5ioMw2d/1Yv8syvT3O+yzAqC1PfsJCmacNs5wRk2wrgQTa+Jvv/fdQCdG6IjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxjSRwzpI4b0EUP6iCF9/gKCNIdvAhrz/wAAAABJRU5ErkJggg=='},

            { name:'facebook',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjuLsrugbrJCAwVCTq1IZqrLH9wZWhMkRUg&usqp=CAU'},

            { name:'Opera',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N5656gHbf3f3b7Ele0o8rAQWhYnxQ6GXKg&usqp=CAU'},

            { name:'twitter',
            image:'https://w7.pngwing.com/pngs/424/95/png-transparent-twitter-3d-twitter-twitter-logo-3d-twitter-logo-social-media-logo-3d-icon.png '
        }
        
    ],
    phones: []


}

const SocialsComponent = {
    props: ['social'],
    template:`<div class='card' style='width: 200px; padding: 10px; margin: 10px;'>
    <h2 class="text-center">{{social.name}}</h2>
    <img v-bind:src="social.image" style='width:100px; height: 100px; margin:0 auto;'></div>`
}

 const PhoneComponent={
    props:[`phone`],
    template:`
    <div class="card" style="width: 18rem;">
        <img 
        v-bind:src="phone.img" 
            class="card-img-top" 
            alt="..."
            style="max-height: 300px; width: fit-content;margin: 0 auto;">
        <div class="card-body">
            <h5 class="card-title">{{phone.name}}</h5>
            <p class="card-text">{{phone.opus}}</p>
            <p class="d-flex justify-content-between">
              <span>Price:</span>
              <span>{{phone.price}}грн.</span>
            </p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
    </div>  `
 }

const app = {
    data(){
        return data
    },
    methods: {

    },
    components: {
        SocialsComponent,PhoneComponent
    },
    mounted(){
        db.collection('tovari').get().then(res => {
           res.forEach(docum => {
            let phone = docum.data();
            phone.id = docum.id;
            this.phones.push(phone)

           }) 
        })
    }


}

Vue.createApp(app).mount(`#app`);