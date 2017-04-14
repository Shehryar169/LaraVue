import types from './types'

const state = {
    sidebars: []
};

const actions = {
    [types.actions.fetchSidebar]: context => {
        return new Promise(() => {
            axios.get('api/menus')
                .then(response => {
                    context.commit(types.mutations.receiveSidebar, response)
                });
        });
    }
};

const getters = {
    [types.getters.getSidebar]: state => state.sidebars
};

const mutations = {
    [types.mutations.receiveSidebar]: (state, apiResponse) => {
        state.sidebars = apiResponse.data;
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};