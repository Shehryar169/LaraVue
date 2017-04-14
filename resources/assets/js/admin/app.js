import '../bootstrap'
import App from './Ap'
import router from './router'
import store from './store'

const nprogress = new NProgress({parent: '.nprogress-container'})
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    nprogress,
    components: {App},
    created(){
    	this.$store.dispatch('sidebar:fetchSidebar');
    }
})