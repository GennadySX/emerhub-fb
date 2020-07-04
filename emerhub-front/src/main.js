import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "./App";
import {routes} from "./routes";
import Fragment from 'vue-fragment'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Fragment.Plugin)

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");