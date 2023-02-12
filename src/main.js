import {createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import  { createRouter ,createWebHistory } from 'vue-router'
import {Route} from "./routes/routes";

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

export const Router = createRouter({
  routes : Route,
  history:createWebHistory()
});
app.use(Route)
app.use(Router)
app.mount('#app')


