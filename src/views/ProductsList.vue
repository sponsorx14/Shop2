<template>
  <main>
    <Filters></Filters>
    <Pagination></Pagination>
    <div class="container">
      <Modal></Modal>
      <Product></Product>
    </div>
    <Pagination></Pagination>
  </main>
</template>

<script>
  import Product from '../components/ProductItem.vue';
  import Filters from '../components/Filters.vue';
  import Modal from '../components/Modal.vue';
  import Pagination from '../components/Pagination.vue';
  import store from '../store';

  export default {
    name: 'ProductList',
    components: {
      Product,
      Filters,
      Modal,
      Pagination
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('fetchData')
        .then(() => next())
    }
  };
</script>

<style lang="scss" scoped>
  main {
    padding: 30px;
    position: relative;
    h1 {
      margin-bottom: 50px;
    }
    .container {
      text-align: center;
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      justify-content: space-around;
    }
  }
</style>
