import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home/HomePage'
import ProductPage from '@/components/products/ProductPage'
import ContactPage from '@/components/contact/contactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/Product',
      name: 'Product',
      component: ProductPage
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: ContactPage
    }
  ]
})
