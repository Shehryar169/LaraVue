import lodash from 'lodash';

import Vue from 'vue';

import axios from 'axios';

import VueRouter from 'vue-router';

import NProgress from 'vue-nprogress';

import Vuex from 'vuex';

window._ = lodash;

window.Vue = Vue;

window.Vuex = Vuex;

window.axios = axios;

window.NProgress = NProgress;

Vue.use(Vuex);

Vue.use(VueRouter);

Vue.use(NProgress)

// Use trans function in Vue (equivalent to trans() Laravel Translations helper). See htmlheader.balde.php partial.
Vue.prototype.trans = (key) => {
    return _.get(window.trans, key, key);
};

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};
