import sidebarModule from './modules/sidebar'

const store = new Vuex.Store({
    modules: {
        sidebar: sidebarModule,
    }
})
export default store;