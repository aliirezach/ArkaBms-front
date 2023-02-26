import {createApp, defineAsyncComponent} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import axios from 'axios'
import {store} from './store/store'
import App from './App.vue'
import {Route} from "./routes/routes";
import VueSweetalert2 from 'vue-sweetalert2';



const app = createApp(App)


app.component('indexPage-component', defineAsyncComponent(() =>
    import('./components/index/index-page')
))
app.component('header-nav-component', defineAsyncComponent(() =>
    import('./components/index/header-nav')
))
app.component('footer-nav-component', defineAsyncComponent(() =>
    import('./components/index/footer-nav')
))
app.component('login-page-component', defineAsyncComponent(() =>
    import('./components/index/login-page')
))
app.component('menu-items-component', defineAsyncComponent(() =>
    import('./components/index/menu-items')
))
app.component('left-menu-nav-component', defineAsyncComponent(() =>
    import('./components/index/left-menu-nav')
))
// axios.defaults.baseURL = 'http://85.185.161.93:1444/api/';
axios.defaults.baseURL = 'http://localhost:8080/api/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
// axios.interceptors.request.use(config  => {
//     const loadable= document.querySelectorAll('[loadable]');
//     if(loadable.length > 0){
//
//         loadable.forEach(value => {
//             value.classList.add("innerLoading")
//         })
//
//
//     }
//   return config
// });

axios.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {
        if (error.response.status === 401 ||error.response.status === 403 ) {
            store.dispatch("LogOut")
        }

        return error;
    }
);
app.use(store)
export const Router = createRouter({
    routes: Route,
    history: createWebHistory()
});
// const socket = io('http://85.185.161.93:1444');

app.use(VueSweetalert2);
app.use(Route)
app.use(Router)
app.config.globalProperties.axios = axios
app.mount('#app')




