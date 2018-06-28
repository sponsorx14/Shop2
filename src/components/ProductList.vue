<template>
  <main>
    <Filters></Filters>
    <div class="container">
      <Modal></Modal>
      <Product></Product>
    </div>
    <Pagination></Pagination>
  </main>
</template>

<script>
  import Product from './Product.vue';
  import Filters from './Filters.vue';
  import Modal from './Modal.vue';
  import Pagination from './Pagination.vue';

  export default {
    name: 'ProductList',
    components: {
      Product,
      Filters,
      Modal,
      Pagination
    },
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
