<template>
  <header>
    <h1>Welcome to the shop</h1>
    <div class="container">
      <Product></Product>
      <Basket></Basket>
    </div>
  </header>
</template>

<script>
  import Product from './Product.vue';
  import Basket from './Basket.vue';

  export default {
    name: 'ProductList',
    components: {
      Product,
      Basket
    },
    computed: {
      basket(){
        return this.$store.state.basket
      }
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 50px;
  }
  .container {
    text-align: center;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
</style>
