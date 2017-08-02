import Vue from 'vue'
import Router from 'vue-router'
import Info from '../components/pages/Info';
import Magic from '../components/pages/Magic';
import Home from '../components/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/info', component: Info,  props: {} },
    { path: '/magic', component: Magic, props: {} }
 ]
});
