// types.js

import namespace from '../utils/namespace'

export default namespace('sidebar', {
    getters: [
        'getSidebar'
    ],
    actions: [
        'fetchSidebar'
    ],
    mutations: [
        'receiveSidebar'
    ]
})
