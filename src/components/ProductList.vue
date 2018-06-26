<template>
  <main>
    <h1>Welcome to the shop</h1>
    <Filters></Filters>
    <div class="container">
      <Product></Product>
      <Basket></Basket>
    </div>
  </main>
</template>

<script>
  import Product from './Product.vue';
  import Basket from './Basket.vue';
  import Filters from './Filters.vue';

  export default {
    name: 'ProductList',
    components: {
      Product,
      Basket,
      Filters
    }
  };
</script>

<style lang="scss" scoped>
  main {
    padding: 30px;
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
