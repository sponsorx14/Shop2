import Vue from 'vue';
import Router from 'vue-router';
import ProductList from './views/ProductsList.vue';
import Details from './views/Details.vue';
import Basket from './views/Basket.vue';
import Form from './views/Form.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ],
});
