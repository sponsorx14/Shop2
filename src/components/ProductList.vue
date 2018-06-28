<template>
  <main>
    <Filters></Filters>
    <div class="container">
      <Modal></Modal>
      <Product></Product>
      <Basket></Basket>
    </div>
  </main>
</template>

<script>
  import Product from './Product.vue';
  import Basket from './Basket.vue';
  import Filters from './Filters.vue';
  import Modal from './Modal.vue';

  export default {
    name: 'ProductList',
    components: {
      Product,
      Basket,
      Filters,
      Modal
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
