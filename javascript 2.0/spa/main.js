document.addEventListener('DOMContentLoaded', async function(){
    let error = await axios.get("templates/404.html");
    let home = await axios.get("templates/home.html");
    let product = await axios.get("templates/phone.html");

    const info = {
        test:'perevirka',
        currentPath: window.location.hash,
        product:[]
    }
    const Product = {
        templates: product.data,
        methods:{
       getTovars(){
        ddb.collection('tovari').get().then(res => {
            res.forEach(docum => {
             let product = docum.data();
             product.id = docum.id;

            this.$root.product.push(product)
        
        })
        })
       }
    }
    }
    
    const Home = {
        template: home.data
    };

    const Error = {
        template: error.data
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/error': Error,
    }
    


const aplic = {
    data(){
        return info;
    },
    methods:{

    },
    components: { },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || Error
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
  
}
Vue.createApp(aplic).mount('#first_spa')
})